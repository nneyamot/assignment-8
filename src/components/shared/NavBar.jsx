'use client'
import Link from "next/link";
import logo from "../../assets/images.jpg"
import icon from '../../assets/icon.jpg'
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
const NavBar = () => {
    const links = <>
        <li ><Link href='/'>Home</Link></li>
        <li><Link href='/allAnimals'>All Animals</Link></li>
    </>
    const { data, isPending } = authClient.useSession()
    const user = data?.user;


    return (
        <div className="navbar bg-base-100 shadow-sm p-3 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-3 ">
                    <Image src={logo} alt="logo" width={'40'} height={'40'} className="rounded-xl" />
                    <h1 className="text-xl font-bold text-green-600">Qurbani</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                {
                    user ? <Link href={'/profile'}><h1 className="font-bold text-xl text-green-600">{user.name}</h1></Link>  : ' '
                }
                <Image src={icon} alt="icon" width={'70'} height={'70'} className="rounded-xl "></Image>
                {
                    user ?
                        (
                            <button className="btn text-xl font-bold text-green-600"
                                onClick={async () => {
                                    await authClient.signOut();
                                }}
                            >Logout</button>
                        ) :
                        (<Link href={'/login'}>
                            <button className="btn text-xl font-bold text-green-600">Login</button>
                        </Link>)

                }
            </div>
        </div>
    );
};

export default NavBar;