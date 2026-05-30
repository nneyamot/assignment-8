'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Checkbox, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());


        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            // name: data.name
            callbackURL: '/'
        })
        if (error) {
            toast.error('login fail', { position: "top-center" })

        }
        else {
            toast.success('Successfully login', { position: "top-center" })
        }

        //console.log(data);
    }
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }


    return (
        <div className="min-h-[60vh] bg-green-50 flex  flex-col items-center justify-center">
            <Form className="flex w-96 flex-col gap-4 bg-white p-5 m-10 rounded" onSubmit={onSubmit}>
                <h1 className="text-2xl font-bold text-center m-5 text-green-800">Login to your account</h1>

                <TextField
                    isRequired
                    name="email"
                    type="email"

                >
                    {/* <Label>Email</Label> */}
                    <Input placeholder="email" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"

                >
                    {/* <Label>Password</Label> */}
                    <Input placeholder="Enter your password" />
                    <FieldError />
                </TextField>


                <Button type='submit' className={'btn w-11/12 bg-green-800 text-white text-lg mb-6'}>Login</Button>

                <p className="text-center">or continue with</p>
                <button onClick={handleGoogleSignIn} className="w-11/12 btn flex gap-2 items-center justify-center bg-green-800 text-white p-2 text-lg font-bold"><FaGoogle />
                    Login with google</button>


                <h1 className="text-center mt-3">Dont have account?<Link href={'/registration'}><span className="text-blue-500">Register</span></Link></h1>

            </Form>

        </div>
    );
};

export default LoginPage;