import { ProductRepository } from "../repos/productRepository";

export class ProductService {
    productRepository: ProductRepository
    constructor() {
        this.productRepository = new ProductRepository()
    }

    async getProduct(id: number) {
        return this.productRepository.getById(id)
    }

    async getAllProductsFromShop(shop_id: number) {
        const allProducts = await this.productRepository.getAll()
        const shopProducts = allProducts.filter(product => product.shop_id == shop_id)
        return shopProducts
    }
}