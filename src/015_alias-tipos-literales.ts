(() =>{
  // 1. Alias de Tipo 'UserID' actualizado:
  // Ahora permite valores de tipo 'string', 'number' O 'boolean'.
  type UserID = string | number | boolean;

  // 2. Alias de Tipo 'Sizes' (Tipo de Literal):
  // Define un conjunto restringido de valores string permitidos.
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  // Declaración de variables usando los nuevos Alias
  let userId: UserID; // Puede ser string, number o boolean
  let shirtSize : Sizes; // Solo puede ser 'S', 'M', 'L', o 'XL'

  // 3. Función 'greeting' que usa los Alias de Tipo
  function greeting( userId: UserID, size: Sizes){
    // 4. Reducción de Tipos (Type Narrowing)
    // Actualmente, la función SOLO comprueba si el 'userId' es un 'string'.
    if (typeof userId === "string"){
      // Si es un string, accedemos a su método toLowerCase().
      console.log(`string ${userId.toLowerCase()}`);
    }
    // NOTA IMPORTANTE:
    // Los casos 'number' y 'boolean' no están siendo manejados explícitamente.
    // Si 'userId' es un number (1111) o un boolean, la función no hará nada
    // en este momento porque no hay un 'else' ni un 'else if' para esos tipos.
  }

  // Asignaciones a shirtSize (válidas por el Alias 'Sizes')
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';
  // shirtSize = 'Z'; // Esto daría un error de compilación.

  // 5. Llamadas a la función
  // Caso 'string': Entra en el 'if' y se imprime 'string la coste'.
  greeting('La coste', 'M');

  // Caso 'number': No entra en el 'if', y la función no imprime nada (silencioso).
  greeting(1111, "M")

  // Podemos llamar con un boolean, pero tampoco entrará en el 'if'.
  greeting(true, "L");
})();
