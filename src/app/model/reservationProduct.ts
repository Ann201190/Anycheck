import { Guid } from "guid-typescript";
import { Order } from "./order";
import { Product } from "./product";

export interface ReservationProduct {
    count: number;
    price: number;
    product: Product;
    productId?: Guid;
    orderId?: Guid;
    order: Order;
    discountValue?: number;
}







