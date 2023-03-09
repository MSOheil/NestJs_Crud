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

    UpdateProduct(productId: string, product: Product): any {
        const productEntity = this.FindProductById(productId);
        this.products[productEntity.productIndex] = product;
        console.log(productEntity.product);
        return this.products[productEntity.productIndex];
    }
    DeleteProduct(productId: string) {
        const productEntity = this.FindProductById(productId);
        console.log(this.products);
        this.products.splice(productEntity.productIndex, 1);
        console.log(this.products);
        return { StatusCode: "201", Message: "Product was deleted" };
    }
    private FindProductById(productId: string): { product: Product, productIndex: number } {
        const productIndex = this.products.findIndex(a => a.id === productId);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Could not find product');
        }
        return { product: product, productIndex: productIndex };
    }
}