import { Cart } from "./cart"

export type Order = {
    id: number,
    name: string,
    email: string,
    phone: string,
    address: string,
    order_data: Cart
}

export type OrderProps = {
    name: string,
    email: string,
    phone: string,
    address: string,
    order_data: Cart
}