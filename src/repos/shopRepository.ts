import { db } from "../entities/db";
import { Shop } from "../entities/shop";

export class ShopRepository {
    async getAll() {
        const shops: Shop[] = await db.select('id', 'name', 'latitude', 'longitude')
            .from('shops')
        return shops
    }
    async getById(id: number) {
        const shop: Shop = await db.select('id', 'name', 'latitude', 'longitude')
            .from('shops')
            .where('id', id)
            .first();
        return shop
    }
}