import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

describe('Cart', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    describe('add', () => {
        it('should add an item to the cart', () => {
            const book = new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225);
            cart.add(book);

            expect(cart.items.length).toBe(1);
            expect(cart.items[0]).toEqual(book);
        });
    });

    describe('calculateTotalAmount', () => {
        it('should calculate the total amount of all items', () => {
            const book1 = new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225);
            const book2 = new Book(1004, 'Hotel on the Corner of Bitter and Sweet', 'Jamie Ford', 1800, 290);
            const album1 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
            const album2 = new MusicAlbum(1024, 'Minutes to Midnight', 'Linkin Park', 650);

            cart.add(book1);
            cart.add(book2);
            cart.add(album1);
            cart.add(album2);

            const total = cart.calculateTotalAmount(cart.items);
            expect(total).toBe(2000 + 1800 + 900 + 650); // Total price: 5350
        });
    });

    describe('calculateBonus', () => {
        it('should calculate the bonus based on the total amount and discount percentage', () => {
            const book1 = new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225);
            const book2 = new Book(1004, 'Hotel on the Corner of Bitter and Sweet', 'Jamie Ford', 1800, 290);
            const album1 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
            const album2 = new MusicAlbum(1024, 'Minutes to Midnight', 'Linkin Park', 650);

            cart.add(book1);
            cart.add(book2);
            cart.add(album1);
            cart.add(album2);

            const items = cart.items;
            const total = cart.calculateTotalAmount(items);
            const bonus = cart.calculateBonus(items, 10); // 10% bonus

            expect(bonus).toBe(total - (total * (10 / 100))); // Total after 10% discount
        });
    });

    describe('deleteFromCart', () => {
        it('should remove an item from the cart by ID', () => {
            const book1 = new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225);
            const book2 = new Book(1004, 'Hotel on the Corner of Bitter and Sweet', 'Jamie Ford', 1800, 290);
            const album1 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);

            cart.add(book1);
            cart.add(book2);
            cart.add(album1);

            cart.deleteFromCart(1001); // Remove book1

            expect(cart.items.length).toBe(2);
            expect(cart.items).not.toContain(book1);
        });
    });
});