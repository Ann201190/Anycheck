import { Guid } from "guid-typescript";
import { BaseEntity } from "./baseEntity";
import { Employee } from "./employee";
import { ReservationProduct } from "./reservationProduct";
import { Store } from "./store";


export interface Order extends BaseEntity {
    idStore: Guid;
    store: Store;
    orderNumber: string
    orderDate: Date
    reservationProducts: ReservationProduct[]
    employee: Employee
}

