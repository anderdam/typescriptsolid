import { CartItem } from './interfaces/cart-item-interface';

export class Product implements CartItem {
    constructor(
        //public productId: number,
        public name: string,
        //salesChannel: number,
        //available: boolean,
        //bestPriceFormatted: string,
        public bestPrice: number, //quantity: number, //image: string,
    ) {}
}
