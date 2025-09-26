(() => {
  // 1. Declaración de una variable con el tipo 'any'.
  // 'any' desactiva la verificación de tipos de TypeScript para esta variable,
  // permitiendo que contenga cualquier tipo de valor.
  let myDinamicVar: any;

  // 2. Asignaciones con diferentes tipos de datos:
  // Esto es posible gracias a 'any'.
  myDinamicVar = 100; // number
  myDinamicVar = null; // null
  myDinamicVar = {}; // object
  myDinamicVar = ''; // string

  // 3. Asignación de un string para el siguiente ejemplo
  myDinamicVar = 'Hola';

  // 4. Aserción de tipo (Type Assertion) usando 'as'.
  // Le decimos explícitamente a TypeScript que, a pesar de que
  // 'myDinamicVar' es de tipo 'any', en este momento la trate como un 'string'.
  // Esto permite acceder a métodos específicos de 'string' como 'toLowerCase()'.
  const rta = (myDinamicVar as string).toLowerCase();
  console.log(rta); // Salida: 'hola'

  // 5. Asignación de un number para el siguiente ejemplo
  myDinamicVar = 1212.12; // Modifiqué el valor para que 'toFixed()' sea más ilustrativo

  // 6. Aserción de tipo (Type Assertion) usando sintaxis de corchetes angulares '<>'.
  // Esta es una forma alternativa de aserción de tipo (similar a 'as T').
  // Le decimos a TS que trate 'myDinamicVar' como un 'number'.
  // Esto permite acceder a métodos de 'number' como 'toFixed()'.
  const rta2 = (<number>myDinamicVar).toFixed(1); // Muestro 1 decimal
  console.log(rta2); // Salida: '1212.1'
})();
