(() => {
  // 1. Declaración de una variable con un Union Type.
  // La variable 'userId' solo puede ser de tipo 'string' O de tipo 'number'.
  // TypeScript verificará que cualquier asignación o uso se ajuste a estas opciones.
  let userId: string | number;

  // 2. Asignaciones válidas:
  userId = 1212;      // Válido: es un number.
  userId = 'asasasa'; // Válido: es un string.
  // userId = true;   // ERROR: no es ni string ni number.

  // 3. Función que acepta un Union Type como argumento.
  // El parámetro 'mytext' puede ser string O number.
  function greeting(mytext: string | number) {
    // 4. Reducción de Tipos (Type Narrowing). ¡ESTO ES CRUCIAL!
    // Usamos 'typeof' para comprobar el tipo en tiempo de ejecución.
    // Dentro de este bloque 'if', TypeScript ahora sabe que 'mytext' es *definitivamente* un 'string'.
    if (typeof mytext === 'string') {
      // Por lo tanto, podemos acceder de forma segura a métodos de string como 'toLowerCase()'.
      console.log(`string ${mytext.toLowerCase()}`);
    } else {
      // Dentro de este bloque 'else', TypeScript infiere que 'mytext' es *definitivamente* un 'number'
      // (ya que no era un string, y Union Type solo permite string | number).
      // Por lo tanto, podemos acceder a métodos de number como 'toFixed()'.
      console.log(`number ${mytext.toFixed(1)}`);
    }
  }

  // 5. Llamadas a la función con ambos tipos válidos.
  greeting('Juan');     // Output: string juan
  greeting(12121212); // Output: number 12121212.0
})();
