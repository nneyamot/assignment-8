import Link from "next/link";
import Image from "next/image";
// import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className=" mt-20 container mx-auto shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">

            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

                {/* Logo Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        {/* <Image
                            src={logo}
                            alt="logo"
                            width={45}
                            height={45}
                        /> */}

                        <h1 className="text-2xl font-extrabold text-green-700">
                            Qurbani
                        </h1>
                    </div>

                    <p className=" leading-7 text-black">
                        Trusted online marketplace for healthy cows,
                        goats, and camels for Qurbani across Bangladesh.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="ml-15">
                    <h2 className="text-2xl font-extrabold mb-5 text-green-700">
                        Quick Links
                    </h2>

                    <ul className="space-y-3 text-black">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-green-600 duration-300"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/allAnimals"
                                className="hover:text-green-600 duration-300"
                            >
                                All Animals
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/profile"
                                className="hover:text-green-600 duration-300"
                            >
                                My Profile
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/login"
                                className="hover:text-green-600 duration-300"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-bold mb-5 text-green-700">
                        Contact Info
                    </h2>

                    <ul className="space-y-3 text-black">
                        <li>
                            Chattogram, Bangladesh
                        </li>

                        <li>
                            +880 1838670500
                        </li>

                        <li>
                           support@qurbani.com
                        </li>
                    </ul>

                    {/* Social Links */}
                    <div className="gap-4 mt-6 grid  lg:grid-cols-3 grid-cols-2  ">

                        <Link
                            href="/"
                            className="bg-green-800 text-white p-3 rounded-full hover:scale-110 duration-300"
                        >
                            <h1>Facebook</h1>
                        </Link>

                        <Link
                            href="/"
                            className="bg-green-800 text-white p-3 rounded-full hover:scale-110 duration-300"
                        >
                            YouTube
                        </Link>

                        <Link
                            href="/"
                            className="bg-green-800 text-white p-3 rounded-full hover:scale-110 duration-300"
                        >
                            Instagram
                        </Link>

                    </div>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className="border-t py-5 text-center text-gray-500">
                © 2026 Qurbani Marketplace. All Rights Reserved.
            </div>

        </footer>
    );
};

export default Footer;