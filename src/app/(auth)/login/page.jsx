"use client";
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Loginpage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError,
    } = useForm();

    const email = watch("email");
    const password = watch("password");

    // const notify = (message, type = "info") => {
    //     if (toast[type]) {
    //         toast[type](message);
    //     } else {
    //         toast(message);
    //     }
    // };

    const [loading, setLoading] = useState(false);
    const [isShowPassword, setShowPassword] = useState(false);

    const handleLogin = async (data) => {
        setLoading(true);
        const { email, password } = data;
        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            setError("root", {
                type: "manual",
                message: "Invalid email or password",
            });
            setLoading(false);
            return;
        }
        setLoading(false);
    }

    return (
        <section className='card bg-[#00272c] w-full max-w-sm mx-auto shadow-2xl border border-white/20 rounded-2xl flex flex-col justify-between items-center gap-y-4 my-auto py-6 px-12'>
            <div className='flex justify-evenly items-center gap-x-2'>
                <Image src={"/logo.png"} alt='logo of the company' width={50} height={50} />
                <h2 className="text-2xl font-bold text-[#e1ff51]">
                    SkillSphere
                </h2>
            </div>
            <div className='space-y-2 text-center'>
                <h1 className='text-3xl font-bold text-zinc-50'>Welcome Back!</h1>
                <p className='text-md text-zinc-400'>Login to continue your learning journey</p>
            </div>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset rounded-box w-xs px-4">

                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: "Email is required" })} className="input bg-[#01343a] text-zinc-50 border-white/20" placeholder="Enter your Email" />
                    {errors?.email && <span className='text-red-500'>{errors.email.message}</span>}

                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: "Password is required" })} className="input bg-[#01343a] text-zinc-50 border-white/20" placeholder="Enter a Password" />
                    {errors?.password && <span className='text-red-500'>{errors.password.message}</span>}
                    <Link href={"/#"} className='text-[#e1ff51] text-end font-bold'>Forgot password</Link>
                    
                    {errors.root && (<span className="text-red-500">{errors.root.message}</span>)}
                    <button type='submit' className="btn bg-[#e1ff51] text-[#00272c] mt-4 font-semibold text-xl">{loading ? "Please wait..." : "Login"}</button>
                </fieldset>
            </form>
            <div className="flex items-center gap-2">
                <hr className="flex-1 border-white/20" />
                <span className="text-md text-zinc-50">OR</span>
                <hr className="flex-1 border-white/20" />
            </div>
            <div className="flex flex-col gap-4 w-full mb-4">
                <button className="btn bg-white text-[#00272c] border-[#e5e5e5] w-full">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
            <p className='font-semibold text-end text-zinc-50'>Dont have an account? <Link href={"/register"} className='text-[#e1ff51]'>Register</Link></p>
        </section>
    );
};

export default Loginpage;