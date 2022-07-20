import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public form!: FormGroup;
  public isWaiting = false;
  public check!: Order;

  constructor(
    private router: Router,
   /* private orderService: OrderService
   public storage: LocalStorageService,
    public translateService: TranslateService*/) { }

  ngOnInit(): void {
    //this.translateService.use(this.storage.getItem('lang'))

    this.form = new FormGroup({
      orderNumber: new FormControl('', [Validators.required]),
    })

  }

  /*getCheck() {
    this.isWaiting = true;
    this.orderService.getCheck(this.form.value.orderNumber).subscribe(data => {
      this.check = data;
      this.isWaiting = false;
    })

  }*/

  getCheck() {
    this.isWaiting = true;
    this.router.navigate([`ordernumber/${this.form.value.orderNumber}`]);
  }
}





