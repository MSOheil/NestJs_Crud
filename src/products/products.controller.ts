import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
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
        console.log("hello from one herer");
        return { Products: this.productsService.GetProducts() };
    }

    @Get(":id")
    GetProductById(@Param('id') proId: string) {
        this.productsService.GetSingleProduct(proId);
    }
    @Patch(":id")
    UpdateProduct(@Param('id') prodId: string, @Body('product') product: Product) {
        console.log("hello from pathc");
        return this.productsService.UpdateProduct(prodId, product);
    }
    @Delete(":id")
    DeleteProduct(@Param('id') proId: string) {
        console.log("Hello from tests delete");
        return this.productsService.DeleteProduct(proId);
    }
}