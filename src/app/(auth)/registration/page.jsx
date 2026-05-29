'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Checkbox, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";


const RegistrationPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { data: res, error } = await authClient.signUp.email({
            email: data.email,
            password: data.password,
            name:data.name
        })

        console.log(res, error);
    }

    return (
        <div className="min-h-[60vh] bg-green-50 flex items-center justify-center">
            <Form className="flex w-96 flex-col gap-4 bg-white p-5 m-10 rounded" onSubmit={onSubmit}>
                <h1 className="text-2xl font-bold text-center m-5 text-green-800">Register your account</h1>
                <TextField
                    isRequired
                    name="name"
                    type="text"

                >
                    {/* <Label>Email</Label> */}
                    <Input placeholder="your name" />
                    <FieldError />
                </TextField>

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


                <Button type='submit' className={'btn w-11/12 bg-green-800 text-white text-lg mb-6'}>Registration</Button>

            </Form>

        </div>
    );
};

export default RegistrationPage;
