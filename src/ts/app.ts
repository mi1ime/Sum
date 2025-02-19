import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new Book(1004, 'Hotel on the Corner of Bitter and Sweet', 'Jamie Ford', 1800, 290));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new MusicAlbum(1024, 'Minutes to Midnight', 'Linkin Park', 650));

console.log(cart.items);

