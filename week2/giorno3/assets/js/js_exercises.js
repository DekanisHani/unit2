/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
let myself = "Dekanis";
console.log("Esercizio 1 ", myself);

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla'];
console.log("Esercizio 2 ", pets);

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
pets.push("elephant")
console.log("Esercizio 3 ", pets)


/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/
pets.pop();
console.log("Esercizio 4 ", pets)

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let last = (let_array) => {
    let_array.push(let_array.shift());
    return let_array;
}
console.log("Esercizio 5", last(pets));

/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/
for (i = 0; i < pets.length; i++) {
    if (pets.find((animal) => animal.slice(0, 1) === 'c'))
        console.log("Esercizio 6 ", true)
    else { console.log("Esercizio 6 ", false) }
}


/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
]
let licensePlate = ["aa000bb", "bb111cc", "cc222dd"]
cars[0].licensePlate = licensePlate[0];
cars[1].licensePlate = licensePlate[1];
cars[2].licensePlate = licensePlate[2];
console.log("Esercizio 7 ", cars)

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/

console.log("Esercizio 8 (lunghezza iniziale) ", cars.length);
const obj = {
    brand: "Audi",
    model: "A3",
    color: "white",
    trims: ["s-line", "rs", "sportback"],
    licensePlate: "dd333ee"
}
cars.push(obj);
console.log("Esercizio 8 (lunghezza finale) ", cars.length);

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
let justFirstTrims = [];
// inserisci la tua funzione qui
let trim1 = (let_array) => {
    cars.forEach(cars => let_array.push(cars.trims[0]));
    return let_array;
};

console.log("Esercizio 9", trim1(justFirstTrims));



/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/

cars.forEach(cars => cars.color.length <= 4 ? console.log("Esercizio 10 ", "Fizz") : console.log("Esercizio 10 ", "Buzz"));


/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/
console.log("Esercizio 11 ", cars.filter(cars => cars.trims.length > 2));

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/
cars.map(cars => { cars.model = cars.brand + ' ' + cars.model; delete cars.brand; })
console.log("Esercizio 12", cars);

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
/*let j = 0;
while (numericArray[j] != 32) {
    console.log("Esercizio 13 ",numericArray[j]);
    j++
}*/
console.log("Esercizio 13 ", numericArray)
let j;
for (j = 0; j < 13; j++) {
    console.log("Esercizio 13 ", numericArray[j])
}

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
