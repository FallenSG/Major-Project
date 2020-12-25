import { Injectable } from '@angular/core';

import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

	products = [
		new Product(1,'Bad Blood','A really cool book',499,'https://images.penguinrandomhouse.com/cover/9780525431992'),
		new Product(1,'Bad Blood','A really cool book',499,'https://images.penguinrandomhouse.com/cover/9780525431992'),
		new Product(1,'Bad Blood','A really cool book',499,'https://images.penguinrandomhouse.com/cover/9780525431992'),
		new Product(1,'Bad Blood','A really cool book',499,'https://images.penguinrandomhouse.com/cover/9780525431992'),
		new Product(1,'Bad Blood','A really cool book',499,'https://images.penguinrandomhouse.com/cover/9780525431992'),
		new Product(1,'Bad Blood','A really cool book',499,'https://images.penguinrandomhouse.com/cover/9780525431992'),
	]

	constructor() { }
	
	getProducts(){
		return this.products
	}
}
