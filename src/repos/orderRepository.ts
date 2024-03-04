import { db } from "../entities/db";
import { Order, OrderProps } from "../entities/order";

export class OrderRepository {
    async getAll() {
        const orders: Order[] = await db.select('id', 'name', 'email', 'phone', 'address', 'order_data')
            .from('orders')
        return orders
    }
    async getById(id: number) {
        const order: Order = await db.select('id', 'name', 'email', 'phone', 'address', 'order_data')
            .from('orders')
            .where('id', id)
            .first();
        return order
    }

    async create(props: OrderProps) {
        await db('orders').insert(props)
    }
}