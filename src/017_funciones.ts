(() =>{
    type Size = 'S' | 'M' | 'L' | 'XL';
    function createProductToJson(
        title: string,
        createdAd: Date,
        stock: number,
        size: Size 
    ){
        return {
            title,
            createdAd,
            stock,
            size
        }
    };

    const producto1 = createProductToJson('p1', new Date(), 12, 'XL');
    console.log(producto1);
    console.log(producto1.title);


    const createProductToJsonv2 = (
        title: string,
        createdAd: Date,
        stock: number,
        size?: Size,
    ) => {
        return {
            title,
            createdAd,
            stock,
            size
        }
    }

    const producto2 = createProductToJson('p2', new Date(), 15);
    console.log(producto2);
    console.log(producto2.title);
    console.log(producto2.size);
    

})();