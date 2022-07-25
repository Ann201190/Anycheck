import { Guid } from "guid-typescript";
import { BaseEntity } from "./baseEntity";
import { Employee } from "./employee";
import { OrderStatus } from "./enum/orderstatus";
import { ReservationProduct } from "./reservationProduct";
import { Store } from "./store";


export interface Order extends BaseEntity {
    idStore: Guid;
    store: Store;
    orderNumber: string
    orderDate: Date
    orderStatus: OrderStatus
    reservationProducts: ReservationProduct[]
    employee: Employee
}

