import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "../Model/Product.Model";

@Injectable()
export class ProductsService {
    products: Product[] = [];


    insertProduct(title: string, desc: string, price: number): string {
        const id = Math.random().toString();
        const newProduct = new Product(id, title, desc, price);
        this.products.push(newProduct);
        return id;
    }
    GetProducts(): any {
        return [...this.products];
    }
    GetSingleProduct(productId: string) {
        const product = this.products.find(a => a.id === productId);
        if (!product) {
            throw new NotFoundException('Could not find product');
        }
        return { ...product };
    }
}