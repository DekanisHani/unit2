// 
// 
class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    static sameOwner(pet1, pet2) {
        return pet1.ownerName === pet2.ownerName;
    }
}

const addPet = (newAnimal) => {
    const animalReferences = document.createElement("li");
    animalReferences.innerText = `${newAnimal.petName}, ${newAnimal.breed}`;
    animalList.appendChild(animalReferences);
    formPets.reset();
}

let formPets = document.getElementById("form");
let addToList = document.getElementById('aggiungi');
let list = document.getElementById('animalList');

addToList.addEventListener("click", (event) => {
    event.preventDefault();
    let petName = document.getElementById('petName').value;
    let ownerName = document.getElementById('ownerName').value;
    let species = document.getElementById('species').value;
    let breed = document.getElementById('breed').value;
    let newAnimal = new Pet (petName, ownerName, species, breed);
    addPet(newAnimal);
})