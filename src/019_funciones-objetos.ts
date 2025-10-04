// Función anónima autoejecutable (IIFE) para crear un scope privado.
(() =>{
    // Declaración de la función 'login'.
    // Recibe un *único parámetro* llamado 'data', que DEBE ser un objeto.
    // TypeScript requiere que este objeto tenga:
    // - 'email': de tipo string.
    // - 'password': de tipo number.
    const login = (data: {email: string, password: number }) => {
        // Imprime los valores desestructurados del objeto en la consola.
        console.log(data.email, data.password);        
    };

    // La siguiente línea estaría comentada (como lo has dejado), y es un ejemplo de un ERROR
    // porque intenta pasar dos strings en lugar de un objeto con los tipos correctos.
    // login('juandaniel@gmail.com', '123456789');

    // Llamada correcta a la función 'login'.
    // Se le pasa un único argumento, que es el objeto con la estructura requerida.
    login({
        email: 'juandaniel@gmail.com',
        password: 123456789 // ¡El password es un número, como lo requiere el tipado!
    });

    // Definición de un 'Type Alias' llamado 'Sizes'.
    // Este tipo solo puede tener uno de los valores literales especificados ('S', 'M', 'L', 'XL').
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    
    // Inicialización de un array llamado 'product'.
    // Se usa 'any[]' temporalmente, pero lo ideal sería tiparlo con la estructura de los productos.
    const product: any[] = [];

    // Declaración de la función 'addProduct'.
    // Recibe un *único parámetro* 'data', que es un objeto con la definición del producto:
    // - 'title': string (obligatorio)
    // - 'createdAt': Date (obligatorio)
    // - 'stock': number (obligatorio)
    // - 'size': Sizes (opcional, indicado por el signo '?'). Si se incluye, debe ser 'S', 'M', 'L' o 'XL'.
    const addProduct = (data: {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes // El signo '?' hace que este campo sea opcional
    }) => {
        // Añade el objeto 'data' (el producto) al array 'product'.
        product.push(data);    
    };


    // Llamada a la función 'addProduct' con el objeto que representa el producto.
    addProduct({
        title: 'Producto 1',
        createdAt: new Date(1993, 5, 25), // Se crea un objeto Date
        stock: 10,
        size: 'M' // El valor 'M' es válido porque está en el tipo 'Sizes'.
    });
    
    // Si hubieras omitido 'size', sería válido. Si pones 'size: "XXL"', TypeScript te daría un error.

    // Muestra el contenido final del array 'product' en la consola.
    console.log(product);

})();