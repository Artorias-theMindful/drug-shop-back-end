import { ShopRepository } from "../repos/shopRepository";

export class ShopService {
    shopRepository: ShopRepository
    constructor() {
        this.shopRepository = new ShopRepository()
    }

    async getShop(id: number) {
        return this.shopRepository.getById(id)
    }

    async getShops() {
        return this.shopRepository.getAll()
    }

}