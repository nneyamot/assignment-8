
import { getAnimals } from "@/lib/dataFetch";
import Image from "next/image";
import img from '../../../assets/hero_cow.jpg'
import Link from "next/link";
import { authClient } from "@/lib/auth-client";


const AllAnimalsPage = async () => {

    const animals = await getAnimals();

    return (
        <div className="container mx-auto mt-10">
            <div className="space-y-5">
                <h1 className="text-3xl font-extrabold ">All Animals</h1>
                <div className="flex justify-between items-center">
                    <p className="text-xl">Find your perfect Qurbani animal from our collection</p>
                    <button className="btn text-xl font-bold  mr-5">Sorted Price</button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
                {
                    animals.map(animal =>
                    //  <AllAnimalsPage key={animal.id} animal={animal}></AllAnimalsPage>

                    (<div key={animal.id} className="space-y-5 p-4 rounded-2xl text-left shadow-2xl ">
                        <Image
                            src={img} alt="items pictures " width={'200'} height={'200'}
                            className="w-full"
                        ></Image>
                        <h2 className="font-extrabold text-xl">{animal.name}</h2>
                        <p className="font-semibold">{animal.breed}</p>
                        <h2 className="font-extrabold text-2xl">$ {animal.price}</h2>
                        {
                            (<Link href={`/details/${animal.id}`}>
                                <button className="btn bg-green-800 text-white w-full">Details</button>
                            </Link>)
                            // : (<Link href={'/login'}></Link>)
                        }
                    </div>)

                    )
                }
            </div>

        </div >
    );
};

export default AllAnimalsPage;