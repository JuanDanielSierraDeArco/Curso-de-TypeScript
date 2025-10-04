import { addProduct, calcStock, products} from './product.servicios';

addProduct({
  title: 'Product 1',
  createdAt: new Date(1993, 1, 1),
  stock: 10,
});
addProduct({
  title: 'Product 2',
  createdAt: new Date(1993, 1, 1),
  stock: 20,
  size: 'M'
});

console.log(products);
console.log('Total stock', calcStock());
