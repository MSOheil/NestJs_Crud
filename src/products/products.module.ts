import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./productsServices/products.service";

@Module({
    controllers:[ProductsController],
    providers:[ProductsService],

})
export class ProductsModule{}