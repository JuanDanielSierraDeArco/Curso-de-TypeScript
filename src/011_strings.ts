 (() =>{
  let productTitle = 'My amazing product';
  //productTitle = null;
  //productTitle = () => {};
  //productTitle = 123;
  productTitle = 'my amazing product changed';
  console.log('productTitle => ', productTitle);

  const productDescription = "bla bla bla bla";
  console.log('productDescription => ', productDescription);

  let productPrice = 100;
  let isNew = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);

 })();
