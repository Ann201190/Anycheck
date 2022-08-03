import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { Check } from '../model/сheck';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  /* private connectionStringOrder = `https://localhost:44350/api/order/getcheck`;
   private connectionStringSend = `https://localhost:44327/api/check/checksend`;*/

  private connectionStringOrder = `http://user21741.realhost-free.net/api/order/getcheck`;
  private connectionStringSend = `http://auth.user21741.realhost-free.net/api/check/checksend`;


  constructor(private http: HttpClient) { }

  getCheck(number: string): Observable<Order> {
    return this.http.get<Order>(`${this.connectionStringOrder}/${number}`);
  }

  Send(check: Check): Observable<boolean> {
    return this.http.post<boolean>(`${this.connectionStringSend}`, check);
  }
}
