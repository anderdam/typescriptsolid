type CartItem = {
    //productId: number;
    name: string;
    //salesChannel: number;
    //available: boolean;
    //bestPriceFormatted: string;
    bestPrice: number;
    //quantity: number;
    //image: string;
};

type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
    private readonly _items: CartItem[] = [];
    private _orderStatus: OrderStatus = 'open';

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get Items(): Readonly<CartItem[]> {
        return this._items;
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    total(): number {
        return +this._items.reduce((total, item) => total + item.bestPrice, 0).toFixed(2);
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log('Cart is empty');
            return;
        }

        this._orderStatus = 'closed';
        this.sendMessage(`Your request was received, total value: $${this.total()}`);
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    sendMessage(msg: string): void {
        console.log(msg);
    }

    saveOrder(): void {
        console.log('Save order');
    }

    clear(): void {
        this._items.length = 0;
        console.log('Cart is cleared');
    }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'Camiseta', bestPrice: 49.99 });
shoppingCartLegacy.addItem({ name: 'Caderno', bestPrice: 9.99 });
shoppingCartLegacy.addItem({ name: 'Lápis', bestPrice: 1.59 });

console.log(shoppingCartLegacy.Items);
console.log(shoppingCartLegacy.total());
shoppingCartLegacy.checkout();
console.log(shoppingCartLegacy.orderStatus);
