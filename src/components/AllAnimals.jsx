// 'use client'
// import { authClient } from "@/lib/auth-client";
// import Image from "next/image";
// import Link from "next/link";
// import img from '../../../assets/hero_cow.jpg'



// const AllAnimals = ({ animal }) => {
//     const { data, isPending, error } = authClient.useSession();
//     const user = data?.user;
//     console.log(data,error);
//     return (
//         <div key={animal.id} className="space-y-5 p-4 rounded-2xl text-left shadow-2xl ">
//             <Image
//                 src={img} alt="items pictures " width={'200'} height={'200'}
//                 className="w-full"
//             ></Image>
//             <h2 className="font-extrabold text-xl">{animal.name}</h2>
//             <p className="font-semibold">{animal.breed}</p>
//             <h2 className="font-extrabold text-2xl">$ {animal.price}</h2>
//             {
//                 user ? (<Link href={`/details/${animal.id}`}>
//                     <button className="btn bg-green-800 text-white w-full">Details</button>
//                 </Link>) : (<Link href={'/login'}></Link>)
//             }
//         </div>
//     );
// };

// export default AllAnimals;