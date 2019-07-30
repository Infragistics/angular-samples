import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Product } from './product';

export class ProductInMemDataService implements InMemoryDbService {
    createDb() {
    const products: Product[] = [
        { Id: 1, Title: 'Book', ExpiryDate: new Date(), Price: 35, Rating: 3.5},
        { Id: 2, Title: 'Pen', ExpiryDate: new Date(), Price: 25, Rating: 4.0},
        { Id: 3, Title: 'Pencil', ExpiryDate: new Date(), Price: 20, Rating: 3.2},
        { Id: 4, Title: 'Bat', ExpiryDate: new Date(), Price: 135, Rating: 4.0},
        { Id: 5, Title: 'Ball', ExpiryDate: new Date(), Price: 65, Rating: 3.8}
    ];
    return { products};
    }
}

