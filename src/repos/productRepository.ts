import { db } from "../entities/db";
import { Product } from "../entities/product";

export class ProductRepository {
    async getAll() {
        const products: Product[] = await db.select('id', 'name', 'image_url', 'price', 'shop_id')
            .from('products')
        return products
    }
    async getById(id: number) {
        const product: Product = await db.select('id', 'name', 'image_url', 'price')
            .from('products')
            .where('id', id)
            .first();
        return product
    }
}