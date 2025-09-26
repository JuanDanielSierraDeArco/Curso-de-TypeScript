( () => {
  // let myNumber: number = undefined; // Error: 'undefined' no se puede asignar a 'number'.
  // let myString: string = null;      // Error: 'null' no se puede asignar a 'string'.

  // 1. Declaración explícita de tipos 'null' y 'undefined'.
  // Esto es posible, pero no muy útil en la práctica.
  let myNull : null = null;
  let myUndefined: undefined = undefined;

  // 2. Uso de Union Types para permitir 'null' o 'undefined'.
  // Si queremos que una variable sea un 'number' pero también pueda estar vacía,
  // usamos un Union Type para incluir explícitamente 'null'.
  let myNumber: number | null = null;
  myNumber = 12; // Válido

  // De forma similar, incluimos 'undefined' para indicar que el valor es opcional o faltante.
  let myString: string | undefined = undefined;
  myString = 'Juan Daniel' // Válido

  // --- Manejo tradicional de null y undefined (con if) ---

  // 3. Función para manejar un parámetro que puede ser 'string' o 'null'.
  function hi(name: string | null){
    let hello = 'Hola ';

    // La condición 'if (name)' realiza una Reducción de Tipo (Type Narrowing):
    // Evalúa si 'name' NO es null, NO es undefined, y NO es una cadena vacía ('').
    // Si la condición es verdadera, TypeScript sabe que 'name' es definitivamente un 'string'.
    if (name) {
      hello += name; // Concatenación normal si 'name' tiene un valor.
    } else {
      // Si 'name' es null, undefined, o string vacío, se asigna 'nobody'.
      hello += 'nobody';
    }
    console.log(hello);
  }

  hi('Juan Daniel'); // Output: Hola Juan Daniel
  hi(null);          // Output: Hola nobody

  // --- Manejo moderno y conciso (con Operadores) ---

  // 4. Función para manejo con los operadores modernos de JavaScript/TypeScript.
  function hiV2(name: string | null){
    let hello = 'Hola ';

    // Operadores en acción:
    // a) Operador de Encadenamiento Opcional (Optional Chaining): 'name?.'
    //    Si 'name' es null o undefined, el código se detiene inmediatamente y devuelve 'undefined'.
    //    Si 'name' tiene un valor, intenta llamar a '.toLowerCase()'.
    // b) Operador Lógico OR (||): '... || nobody'
    //    Si el resultado de la expresión 'name?.toLowerCase()' es 'undefined' (o null),
    //    el operador OR toma el valor de la derecha: 'nobody'.

    // Es importante notar que si 'name' fuera un string vacío (''), toLowerCase() se ejecuta
    // devolviendo un string vacío, que el operador OR también trata como "falsy" y devuelve 'nobody'.
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV2('Juan DAniel'); // Output: Hola juan daniel
  hiV2(null);          // Output: Hola nobody

})();
