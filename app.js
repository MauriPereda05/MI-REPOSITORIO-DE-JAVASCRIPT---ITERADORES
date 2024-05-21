// ITERADORES

// For 

for (let i = 0; i <= 5; i++) { // for se utiliza para ejecutar un codigo repetidamente hasta que se cumpla una condicion.
    console.log(i);
}

// Inicializador: `let i = 1;`

// Limite: `i <= 5;`

// incremento: i++

// forEach y map 

// forEach

// Es una herramienta de JavaScript que ayuda a recorrer cada elemento de una lista, como una lista de números o palabras.

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

// map 

// Es un metodo en Javascript que se utiliza en en arrays,Toma cada elemento del array original y aplica una operacion en cada uno segun la funcion proporcionada.

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

// ¿Cual es la diferencia entre forEach y map?

// forEach realiza una accion para cada elemento de un array pero no devuelve un nuevo array y map transforma cada elemento de un array y devuelve un nuevo array con los resultados de esas transformaciones.

// Array Methods 

const candies = [
    {
        id: 'candy-1',
        name: 'Lollipop',
        ingredients: ['sugar', 'glucose syrup', 'vegetable fat', 'maltrodextrin', 'walter'],
    },

    {
        id: 'candy-2',
        name: 'Gummy Bear',
        ingredients: ['corn syrup', 'sugar', 'gelatin', 'glucose syrup'],
    },
    {
        id: 'candy-3',
        name: 'Candy Buttons',
        ingredients: ['sugar', 'gelatin', 'coconut oil', 'corn starch'],
    },
];

// FIND (Devuelve el primer elemento que cumpla la condicion)

const candyID = candies.find((candy) => candy.name === 'Lollipop');

// const candyID: Declaramos una variable que almacenara el resultado de la busqueda

// candies.find((candy) => candy.name === 'Lollipop'); : Busca un dulce cuyo nombre sea Lollipop en el array de candies y el resultado se guarda en candyID

console.log(candyID);

// SOME (Devuelve true o false dependiendo la condicion)

const Sugar = candies.some((candy) => candy.ingredients.includes('coconut oil'));

// const Sugar: Declaramos una variable llamada Sugar para almacenar el resultado.

// candies.some((candy) => candy.ingredients.includes('coconut oil')); : Utilizamos el metodo some() en el array para verificar si algun dulce contiene 'coconut oil' en su lista de ingredientes.si al menos un dulce cumple con esta condicion,el resultado sera true,de lo contrario sera false.

console.log(Sugar);

// EVERY (Devuelve true o false solo si todos cumplen)

const Sugary = candies.every((candy) => candy.ingredients.includes('sugar'));

console.log(Sugary);