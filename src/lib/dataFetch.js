
export const getAnimals = async () => {
    const res = await fetch('https://animals-server.onrender.com/animals');
    const animals = await res.json();
    //console.log(animals.length);
    return animals;
}

export const getIdDetails = async(id) => {
const res = await fetch(`https://animals-server.onrender.com/animals/${id}`);
    const animal = await res.json();
    //console.log(animals.length);
    return animal;
}