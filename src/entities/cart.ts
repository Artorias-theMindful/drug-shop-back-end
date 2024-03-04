import { ProductCartProps } from "./product"

export type Cart = {
    products: ProductCartProps[],
    total_price: number
}