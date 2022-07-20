import { SafeResourceUrl } from "@angular/platform-browser";
import { BaseEntity } from "./baseEntity";
import { Product } from "./product";

export interface Store extends BaseEntity {
    name: string,
    logoImage?: SafeResourceUrl
    address: string,
    //discounts: Discount[],
    /// orders: Order[],
    //  employees:Employee[],
}





