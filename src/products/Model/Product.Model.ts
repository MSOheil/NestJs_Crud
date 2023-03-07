export class Product {
    id: string;
    title: string;
    description: string;
    price: number;
    constructor(id: string, title: string, dec: string, price: number) {
        this.id = id;
        this.title = title;
        this.description = dec;
        this.price = price;
    };
    


}