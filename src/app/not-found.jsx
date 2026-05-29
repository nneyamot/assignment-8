import Link from "next/link";

const NotFound = () => {
    return (
        <div className="container mx-auto bg-green-50  flex justify-center items-center flex-col mt-10 p-10 space-y-5 w-1/2 rounded-2xl">
            <h1 className="text-5xl text-green-900 font-extrabold">404</h1>
            <h3 className="text-xl font-bold">Oops! Page Not Found</h3>
            <Link href={'/'}>
                <button className="btn bg-green-800 text-white">Back to Home</button>

            </Link>
        </div>
    );
};

export default NotFound;