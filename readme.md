# Javascript - Iteradores

Los iteradores en JavaScript son objetos que proporcionan un mecanismo para iterar sobre los elementos de una colección como un array. Permiten acceder a los elementos de la colección uno por uno generalmente a través de un bucle for o métodos como forEach(), map(), 

## for 

for se utiliza para ejecutar un codigo repetidamente hasta que se cumpla una condicion.

```javascript
for (let i = 0; i <= 5; i++) { 
    console.log(i);
}

// Inicializador: `let i = 1;`

// Limite: `i <= 5;`

// incremento: i++
```

## forEach

Es una herramienta de JavaScript que ayuda a recorrer cada elemento de una lista, como una lista de números o palabras.

```javascript
const numeros = [1, 2, 3, 4, 5]; // declaracion array de una serie de numeros del 1 al 5.

numeros.forEach(numero => {
  const resultado = numero * 2;
  console.log(resultado);
});

// numeros.forEach(): Llama al método forEach en el array numeros que se ejecutara en cada elemento del array.

// numero => {}: Define una función de '{}' que tomara cada elemento del array numero en cada iteración.

// const resultado = numero * 2; : Realizara una operación multiplicando cada número del array (numero * 2) y guarda el resultado en la variable resultado.

// Diferentes usos con forEach 

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 40 }
  ];
  
  personas.forEach(persona => {
    console.log(persona.nombre);
});
```

## map

Es un metodo en Javascript que se utiliza en en arrays,Toma cada elemento del array original y aplica una operacion en cada uno segun la funcion proporcionada.

```javascript
const numeral = [1, 2, 3, 4, 5];

const duplicados = numeral.map(numero => {
    return numero * 2;
});

console.log(duplicados);

// const numeral = [1, 2, 3, 4, 5]; : Creamos un array llamado numeral con una serie de numeros del 1 al 5.

// const duplicados = numeral.map(numero => { return numero * 2; }); : Aqui utilizamos el metodo map en el array numeral

// numero => { return numero * 2; }); : Esta es una (arrow function) que se pasa como argumento al metodo map y toma cada numero del array numeral y lo multiplica por 2

// const duplicados: Aqui se guardara el resultado de la operacion en una nueva variable llamada duplicados,en esta variable contiene un nuevo array.

// Diferentes usos con forEach

const nombres = ["juan", "maría", "pedro", "ana"];

const nombresMayusculas = nombres.map(nombre => {
    return nombre.toUpperCase(); // Vuelve en mayuscula los nombres 
});

console.log(nombresMayusculas);
```
## ¿Cual es la diferencia entre forEach y map?

forEach realiza una accion para cada elemento de un array pero no devuelve un nuevo array y map transforma cada elemento de un array y devuelve un nuevo array con los resultados de esas transformaciones.

## Array Methods

Los métodos de array, o array methods, son funciones integradas en JavaScript que se aplican a objetos de tipo array para realizar operaciones comunes de manipulación, iteración y transformación de datos. 

## Find

Es un método de array en JavaScript que se utiliza para buscar el primer elemento que cumple con una condición específica en un array. 

```javascript
const candyID = candies.find((candy) => candy.name === 'Lollipop');

// const candyID: Declaramos una variable que almacenara el resultado de la busqueda

// candies.find((candy) => candy.name === 'Lollipop'); : Busca un dulce cuyo nombre sea Lollipop en el array de candies y el resultado se guarda en candyID
```

## Some 

Es un método de array en JavaScript que se utiliza para verificar si al menos un elemento en el array cumple con una condición específica.Si al menos un elemento satisface la condición definida en la función da true de lo contrario false.

```javascript
const Sugar = candies.some((candy) => candy.ingredients.includes('coconut oil'));

// const Sugar: Declaramos una variable llamada Sugar para almacenar el resultado.

// candies.some((candy) => candy.ingredients.includes('coconut oil')); : Utilizamos el metodo some() en el array para verificar si algun dulce contiene 'coconut oil' en su lista de ingredientes.si al menos un dulce cumple con esta condicion,el resultado sera true,de lo contrario sera false.
```

## Every 

Es un método de array en JavaScript que se utiliza para verificar si todos los elementos en el array cumplen con una condición específica.

```javascript
const Sugary = candies.every((candy) => candy.ingredients.includes('sugar'));

console.log(Sugary);
```

