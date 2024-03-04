import express, { Request, Response } from "express";
import { OrderService } from "./service/orderService";
import { ProductService } from "./service/productService";
import { ShopService } from "./service/shopService";

const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));

const orderService = new OrderService()
const productService = new ProductService()
const shopService = new ShopService()

app
    .route('/shops')
    .get(async (req: Request, res: Response) => {
        const data = await shopService.getShops()
        res.status(200).json({
            shops: data
        })
    })

app
    .route('/shops/:id')
    .get(async (req: Request, res: Response) => {
        const data = await shopService.getShop(Number(req.params.id))
        res.status(200).json({
            shop: data
        })
    })

app
    .route('/shops/:id/products')
    .get(async (req: Request, res: Response) => {
        const data = await productService.getAllProductsFromShop(Number(req.params.id))
        res.status(200).json({
            products: data
        })
    })

app
    .route('/orders')
    .post(async (req: Request, res: Response) => {
        await orderService.createOrder(req.body)
        res.sendStatus(200)
    })
    .get(async (req: Request, res: Response) => {
        const data = await orderService.getOrdersForUser(req.body.email, req.body.phone)
        res.status(200).json({
            products: data
        })
    })

if (typeof process.env.PORT === 'string') {
    app.listen(Number(process.env.PORT), () => {
        console.log(`listening ${Number(process.env.PORT)}`)
    })
}