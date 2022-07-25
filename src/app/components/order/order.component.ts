import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { Check } from 'src/app/model/сheck';
import { CheckProduct } from 'src/app/model/сheckProduct';
import { OrderService } from 'src/app/services/order.service';
import { OrderStatus } from '../../model/enum/orderstatus';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public check!: Order;
  public isWaiting = false;
  public hasCheck = true;
  public form!: FormGroup;
  statusType: Array<string> = Object.keys(OrderStatus).filter(key => isNaN(+key))

  constructor(public orderService: OrderService, public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })

    this.isWaiting = true;
    this.route.params.subscribe((params: Params) => {
      let number = params["num"];
      this.orderService.getCheck(number).subscribe(data => {
        this.check = data;
        if (!this.check) {
          this.hasCheck = false;
        }
        else {
          this.hasCheck = true;
        }
        this.isWaiting = false;
      })
      this.isWaiting = false;
    });
  }


  public ComingTotalPrice(): number {
    let count: number = 0;
    this.check.reservationProducts.forEach(rp => {
      if (rp.discountValue != null && rp.discountValue > 0) {
        count += (rp.price - rp.discountValue) * rp.count;
      }
      else {
        count += rp.price * rp.count;
      }
    });
    return count;
  }

  discountValue(discount: any, count: number): number {
    let discounts = 0
    if (discount != null && discount > 0) {
      discounts += discount * count
    }
    else {
      discounts += discount * count;
    }

    return Number(discounts);
  }


  ComingTotalDiscount(): number {
    let discount: number = 0;
    this.check.reservationProducts.forEach(rp => {
      if (rp.discountValue != null && rp.discountValue > 0)
        discount += rp.discountValue * rp.count;
    });
    return discount;
  }


  sendCheck() {
    let reservationProductsOrder: CheckProduct[] = [];

    this.check.reservationProducts.forEach(rp => {

      let discount: number = 0

      if (rp.discountValue != null && rp.discountValue > 0) {
        discount = rp.discountValue
      }

      let product: CheckProduct = {
        name: rp.product.name,
        price: rp.price,
        discountValue: discount,
        count: rp.count
      }
      reservationProductsOrder.push(product);
    });


    var check: Check = {
      storeName: this.check.store.name,
      email: this.form.value.email,
      storeAddress: this.check.store.address,
      orderNumber: this.check.orderNumber,
      employeeFIO: this.check.employee.surName + " " + this.check.employee.name,
      orderDate: this.check.orderDate,
      reservationProducts: reservationProductsOrder
    }

    this.orderService.Send(check).subscribe(data => {

      if (data) {
        alert("Чек успешно оправлен на почту")
      }
      else {
        alert("Что-то пошло не так. Попробуйте еще.")
      }
    })
  }
}
