import { Messaging } from '../services/messaging';
import { Persistence } from '../services/persistence';
import { OrderStatus } from './interfaces/order-status-interface';
import { ShoppingCart } from './shopping-cart';

export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(
        private readonly cart: ShoppingCart,
        private readonly messaging: Messaging,
        private readonly persistence: Persistence,
    ) {}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Cart is empty');
            return;
        }

        this._orderStatus = 'closed';
        this.messaging.sendMessage(
            `Your request was received, total value: $${this.cart.totalWithDiscount()}`,
        );
        this.persistence.saveOrder();
        this.cart.clear();
    }
}
