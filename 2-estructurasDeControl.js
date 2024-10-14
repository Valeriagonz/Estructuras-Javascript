// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
  if (numero % 2 === 0) {
      console.log("El número es par");
  } else {
      console.log("El número es impar");
  }
}
verificarParidad(4);
verificarParidad(7); 

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
  if (edad < 18){
    console.log("Menor de edad");
  } else if (edad >= 18 && edad <= 65) {
    console.log("Adulto");
  } else {
    console.log("Adulto mayor");
  }
}
clasificarEdad(25);

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
  while (numero >= 0) {
    console.log(numero);
    numero--;
}    
}
cuentaRegresiva(5);

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
  let i = 0;
  do {
    console.log("Estoy aprendiendo JavaScript");
    i++;
  } while (i < 5);
}   
  repetirMensaje(4);

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
  // Inicializamos el bucle desde 0 y lo hacemos hasta el número ingresado
  for (let i = 0; i <= numero; i++) {
    // Verificamos si el número actual es par
    if (i % 2 === 0) {
      // Si es par, lo imprimimos
      console.log(i);
    }
}
    }
  imprimirPares(10);

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 6) {
      break;
    }
  }    
    }
  detenerEnSeis ()

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
}
}
  saltarCinco();

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
  switch (dia) {
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miércoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sábado";
    case 7:
      return "Domingo";
    default:
      return "Número inválido";
    }
    }
  console.log(obtenerDiaSemana(1));
  console.log(obtenerDiaSemana(5)); 
  console.log(obtenerDiaSemana(8)); 

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
  switch (letra.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
}
    }
console.log(esVocal('a')); 
console.log(esVocal('b'));
console.log(esVocal('E'));

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
  // Verifica que los parámetros sean números
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error('Los parámetros deben ser números');
  }

  // Primero, comprobamos si todos los números son positivos
  if (a > 0 && b > 0 && c > 0) {
    return "Todos los números son positivos";
  } 
  // Si no, comprobamos si todos los números son negativos
  else if (a < 0 && b < 0 && c < 0) {
    return "Todos los números son negativos";
  } 
  // Si ninguna de las condiciones anteriores es verdadera, significa que al menos uno de los números es negativo
  else {
    return "Al menos uno de los números es negativo";
    }
    }
  console.log(evaluarNumeros(1, 2, 3)); 
  console.log(evaluarNumeros(-1, -2, -3));
  console.log(evaluarNumeros(-1, 2, -3));

// Exportar todas las funciones
export {
  verificarParidad,
  clasificarEdad,
  cuentaRegresiva,
  repetirMensaje,
  imprimirPares,
  detenerEnSeis,
  saltarCinco,
  obtenerDiaSemana,
  esVocal,
  evaluarNumeros,
};