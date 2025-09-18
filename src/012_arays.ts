(() => {
  let prices = [1,2,3,4,5,6,7,212, 'Hola', true];
  //prices.push('asas');
  //prices.push(true);
  //prices.push({};)
  prices.push(121212121);
  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object) [] = ['hola', true, 16];
  mixed.push(12);
  mixed.push('asasasas');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,4,5,6,7,8,9,10];
  let number = numbers.map(items => items ** 2);
  console.log(number);

})();
