import { getAnimals, getIdDetails } from "@/lib/dataFetch";
import img from '../../../../assets/hero_cow.jpg'
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import FormBook from "@/components/FormBook";

const page = async ({ params }) => {
    const { id } = await params;
    const details = await getIdDetails(id);
    const { name, breed, weight, age, location, category, description, price, color } = details;

    return (

        <div className="grid grid-cols-2 mt-10 shadow-xl p-5 container mx-auto">
            <div className="flex items-center ">
                <Image
                    src={img}
                    alt="cows picture"
                    width={'300'}
                    height={'300'}
                    className="w-full"
                ></Image>
            </div>

            <div className="space-y-5 text-xl font-semibold text-gray-500 mb-10 p-4">
                <h1 className="font-extrabold text-3xl text-black">{name}</h1>
                <h3 className="font-extrabold text-3xl text-green-800 ">${price}</h3>
                <h2>Breed : {breed}</h2>
                <h2>Weight : {weight}kg</h2>
                <h2>Age :  {age}</h2>
                <h2>Color : {color}</h2>
                <h2>Location : {location}</h2>
                <h2>Category : {category}</h2>
                <br />
                <h2 className="font-extrabold text-3xl text-black">Description </h2>
                <p>{description}</p>
                <Link href={'/allAnimals'}>
                    <button className="btn text-bold text-lg text-white bg-green-800"><FaArrowLeft />
                        Back to Animals</button>

                </Link>

            </div>

            <div>
                <FormBook></FormBook>
            </div>

            <div className="p-5 space-y-5 text-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
                <h1 className="text-2xl font-bold text-green-800">Why Choose Us?</h1>
                <ul className="space-y-5">
                    <li>100% healthy Animals</li>
                    <li>Veterinary Checked</li>
                    <li>Best Price Guarantee</li>
                    <li>Easy Booking Process</li>
                    <li>trusted by Thousands</li>
                </ul>

            </div>

        </div>





    );
};

export default page;