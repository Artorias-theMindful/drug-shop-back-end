export type Product = {
    id: number,
    name: string,
    image_url: string,
    price: number,
    shop_id: number
}
export type ProductCartProps = {
    product: Product,
    shop_id: number
}
