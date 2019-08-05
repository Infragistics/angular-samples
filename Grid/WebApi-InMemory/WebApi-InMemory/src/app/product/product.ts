export class Product {
    constructor( public id = 0,
                 public Title = '',
                 public ExpiryDate = new Date() ,
                 public Price = 0,
                 public Rating = 0 ) {

    }
}
