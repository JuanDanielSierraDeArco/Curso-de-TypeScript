// Función anónima autoejecutable (Immediately Invoked Function Expression - IIFE).
// Se usa para crear un ámbito de bloque privado y evitar la contaminación del scope global.
(() =>{
    // Declaración de una función llamada 'calcTotal'.
    // Recibe un parámetro:
    // - 'number': Un array de números (number[]).
    // Retorna un valor:
    // - 'string': El total calculado, convertido a cadena de texto.
    const calcTotal = (number: number[]): string => {
        // Inicializa una variable local 'total' a cero para almacenar la suma.
        let total = 0;
        
        // Itera sobre cada 'item' (número) dentro del array 'number'.
        number.forEach((item) => {
            // Suma el valor del 'item' actual al 'total' acumulado.
            total += item;
        });
        
        // Convierte el 'total' (que es de tipo number) a una cadena de texto (string)
        // y lo retorna como resultado de la función.
        return total.toString();
    }

    // Declaración de una función llamada 'printTotal'.
    // Recibe un parámetro:
    // - 'prices': Un array de números (number[]).
    // Retorna un valor:
    // - 'void': Indica que la función no retorna explícitamente ningún valor útil.
    //           Su propósito es realizar una acción (imprimir en consola).
    const printTotal = (prices: number[]): void=> {
        // Llama a la función 'calcTotal' con el array 'prices'.
        // El resultado (una cadena de texto) se asigna a la constante 'rta'.
        const rta = calcTotal(prices);
        
        // Imprime el resultado en la consola, utilizando 'template literals' (`...`).
        console.log(`El total es: ${rta}`);
    }

    // Llamada final a la función 'printTotal' dentro de la IIFE.
    // Le pasa un array de números como argumento para que realice el cálculo e impresión.
    printTotal([1,2,3,4,5,6,7,8,9,10]);
})();