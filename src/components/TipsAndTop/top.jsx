import Image from 'next/image';
import breed from '../../assets/breed.png'
const Top = () => {
    return (
        <div className='grid grid-cols-2 gap-4 shadow-2xl p-5'>
            <div className="space-y-5">
                <h1 className="font-extrabold text-2xl ">Top Breeds</h1>
                <ul className="list-decimal space-y-2 ml-10 marker:font-bold marker:text-green-800">
                    <li>Local Deshi</li>
                    <li>Sahiwal Cross</li>
                    <li>Friesian Cross</li>
                    <li>Arabian Camel</li>
                    <li>Black Bengal</li>
                </ul>
                <button className="text-white bg-green-800 font-semibold rounded-md ml-5 p-2">View All Breeds</button>
            </div>
            <div className='flex items-center'>
                <Image
                    src={breed}
                    alt='breeds'
                    height={'300'}
                    width={'300'}
                    className='w-full rounded-2xl'
                ></Image>

            </div>
        </div>
    );
};

export default Top;