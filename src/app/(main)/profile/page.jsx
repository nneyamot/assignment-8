'use client'
import { authClient } from "@/lib/auth-client";
import img from '../../../assets/icon.jpg'
import Image from "next/image";
const ProfilePage = () => {
  
    const {data}=authClient.useSession();
    const user = data?.user;
    console.log(user?.name,user?.email)

    return (
        <div className="space-y-5 mt-10 container mx-auto">
            <h1 className="font-bold text-2xl">My Profile</h1>
            <div className="flex justify-between items-center mb-10">
                <div className="flex gap-10 items-center">
                     <Image
                      src={img} alt='icon' width={'80'} height={'80'}
                      className="rounded-2xl"
                     ></Image>
                    <div>
                        <h1 className="font-bold text-2xl">{user?.name}</h1>
                        <p>{user?.email}</p>

                    </div>
                </div>
                <button className="btn mr-10 bg-green-800 text-white">Update Profile</button>
            </div>

            <h1 className="font-bold text-2xl">Account Information</h1>
            <div className="text-lg space-y-3">
                <h1>Name         <span className="ml-50">{user?.name}</span></h1>
                <h1>Email        <span className="ml-50">{user?.email}</span></h1>
                <p>Photo link    <span className="ml-50">{user?.link}</span></p>
                <p>Member since  <span className="ml-33">may, 20, 2026</span></p>
            </div>
        </div>
    );
};

export default ProfilePage;