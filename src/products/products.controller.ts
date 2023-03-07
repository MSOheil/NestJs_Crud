import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { ProductsService } from "src/products/productsServices/products.service";
import { Product } from "./Model/Product.Model";


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    @Post()
    addProduct(@Body('product') proudct: Product,): any {
        var generatedId = this.productsService.insertProduct(proudct.title, proudct.description, proudct.price);
        return { id: generatedId };
    }
    @Get()
    GetAllProducts() {
        return { Products: this.productsService.GetProducts() };
    }

    @Get(":id")
    GetProductById(@Param('id') proId: string) {
        this.productsService.GetSingleProduct(proId);
    }
}