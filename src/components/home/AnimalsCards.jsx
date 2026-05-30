import { getAnimals } from "@/lib/dataFetch";
import img from '../../assets/hero_cow.jpg'
import Image from "next/image";

const AnimalsCards = async() => {
    const animals = await getAnimals();
  //  console.log(animals);
  let cnt=0;
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-10 gap-5 ">
            {
                
            animals.map(animal => (
                parseInt(animal.id) > 4 ? null :
                
                <div key={animal.id} className="space-y-5 p-4 rounded-2xl text-left shadow-2xl ">
                    <Image
                    src={animal.image} alt="items pictures " width={'200'} height={'200'}
                    className="w-full"
                    ></Image>
                    <h2 className="font-extrabold text-xl">{animal.name}</h2>
                    <p className="font-semibold">{animal.breed}</p>
                    <h2 className="font-extrabold text-2xl">$ {animal.price}</h2>
                   
                </div>
                
            ) )
            
            }
        </div>
    );
};

export default AnimalsCards;