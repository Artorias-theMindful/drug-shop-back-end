import { OrderProps } from "../entities/order";
import { OrderRepository } from "../repos/orderRepository";

export class OrderService {
    orderRepository: OrderRepository
    constructor() {
        this.orderRepository = new OrderRepository()
    }

    async getOrdersForUser(email: string, phone: string) {
        const allOrders = await this.orderRepository.getAll()
        const userOrders = allOrders.filter(order => order.email === email && order.phone === phone)
        return userOrders
    }

    async createOrder(props: OrderProps) {
        await this.orderRepository.create(props)
    }

}