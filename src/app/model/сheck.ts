import { BaseEntity } from "./baseEntity";
import { CheckProduct } from "./сheckProduct";

export interface Check {
    email: string;
    storeName: string;
    storeAddress: string;
    orderNumber: string;
    employeeFIO: string;
    orderDate: Date;
    reservationProducts: CheckProduct[];
}











