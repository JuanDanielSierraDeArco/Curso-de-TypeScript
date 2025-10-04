// Función anónima autoejecutable (IIFE) para crear un ámbito de bloque privado.
(() =>{
    // 1. Definición de un 'Type Alias' para tallas.
    // 'Sizes' solo puede tener uno de los cuatro valores literales especificados.
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    
    // 2. Definición de un 'Type Alias' para la estructura de un producto.
    // Esto centraliza la definición del tipo, haciéndolo reutilizable.
    type Product = {
        // Propiedades obligatorias:
        title: string,
        createdAt: Date,
        stock: number,
        // Propiedad opcional:
        // Usa el tipo 'Sizes' definido arriba. La '?' la hace opcional.
        size?: Sizes
    }

    // Inicialización del array 'product'.
    // Ahora está fuertemente tipado como un array de objetos 'Product' (Product[]).
    const product: Product[] = [];

    // Declaración de la función 'addProduct'.
    // Ahora, en lugar de una definición de objeto anónima, usamos el alias 'Product'.
    // Esto garantiza que el argumento 'data' cumpla exactamente con la estructura 'Product'.
    const addProduct = (data: Product) => {
        // Agrega el objeto producto al array.
        product.push(data);    
    };

    // Llamada a la función 'addProduct'.
    // TypeScript verifica que el objeto pasado cumpla con el tipo 'Product'.
    addProduct({
        title: 'Producto 1',
        createdAt: new Date(1993, 5, 25),
        stock: 10,
        size: 'M' // Válido, ya que 'M' es parte del tipo 'Sizes'.
    });

    // Muestra el array de productos.
    console.log(product);
})();