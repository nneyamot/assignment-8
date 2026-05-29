
export const getAnimals = async () => {
    const res = await fetch('https://assignment-8-jt3irkge9-gaffer-s-projects.vercel.app/animals');
    const animals = await res.json();
    //console.log(animals.length);
    return animals;
}

export const getIdDetails = async (id) => {
    const res = await fetch(`https://assignment-8-jt3irkge9-gaffer-s-projects.vercel.app/animals/${id}`);
    const animal = await res.json();
    //console.log(animals.length);
    return animal;
}
// https://assignment-8-gray.vercel.app