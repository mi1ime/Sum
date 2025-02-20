import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    calculateTotalAmount(items: Buyable[]): number {
        let totalAmount: number = 0;
        totalAmount = items.reduce((currentSum, currentItem) => {
            return currentSum + currentItem.price;
        }, 0);
        return totalAmount;
    }

    calculateBonus(items: Buyable[], bonus: number): number {
        const totalAmount = this.calculateTotalAmount(items);
        return totalAmount - (totalAmount * (bonus / 100));
    }

    deleteFromCart(id: number): void {
        this._items = this._items.filter((item) => item.id !== id);
    }
}