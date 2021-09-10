import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item-interface';

export class ShoppingCart {
    private readonly _items: CartItem[] = [];

    constructor(private readonly discount: Discount) {}

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get Items(): Readonly<CartItem[]> {
        return this._items;
    }

    total(): number {
        return +this._items.reduce((total, item) => total + item.bestPrice, 0).toFixed(2);
    }

    totalWithDiscount(): number {
        return +this.discount.calculate(this.total()).toFixed(2);
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    clear(): void {
        this._items.length = 0;
        console.log('Cart is cleared');
    }
}
