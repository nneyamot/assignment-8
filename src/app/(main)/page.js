import Image from "next/image";
import hero_cow from '../../assets/hero_cow.jpg'
import AnimalsCards from "@/components/home/AnimalsCards";
import TipsAndTop from "@/components/TipsAndTop/tips";
import Tips from "@/components/TipsAndTop/tips";
import Top from "@/components/TipsAndTop/top";

export default function Home() {
  return (

    <div className="container mx-auto">
      <div className="container mx-auto mt-10  grid grid-cols-2  shadow-2xl">
        <div className="space-y-5 p-10 ">
          <h1 className="text-5xl font-extrabold text-black">Find Your <span className="text-green-700">Perfect</span> <br></br> <span className="text-green-700">Qurbani</span> Animals</h1>
          <p className="text-black font-semibold">Healthy Well-cared animals for your <br></br> blessed Qurbani</p>
          <button className="btn text-xl font-bold text-white bg-green-700">Browse Animals</button>
        </div>
        <div className="text-center  mb-10 flex items-center">
          <Image src={hero_cow} alt="hero-cow" height={'400'} width={'400'} className="rounded-2xl w-full"></Image>
        </div>
      </div>


      <div className="mt-10">
        <h1 className="text-2xl font-extrabold text-green-900 ">Featured Animals</h1>
        <AnimalsCards></AnimalsCards>
      </div>
      
      <div className="mt-10 grid lg:grid-cols-2 md:grid-cols-1 gap-3">
        <Tips></Tips>
        <Top ></Top>
      </div>



    </div>

  );
}
