export class Product {
    id: number;
    name: string;
    discription: string;
    price: number;
    imageUrl: string;

    constructor(id, name, discription='', price=0, imageUrl='https://www.tharagold.in/assets/img/empty-cart-icon.jpg'){
        this.id=id
        this.name=name
        this.discription=discription
        this.price=price
        this.imageUrl=imageUrl
    }
}