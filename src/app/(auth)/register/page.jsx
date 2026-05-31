"use client";
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError
    } = useForm();

    const password = watch("password");

    const [loading, setLoading] = useState(false);
    const [isShowPassword, setShowPassword] = useState(false);
    const [isShowConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async (data) => {
        setLoading(true);
        const { name, photo, email, password, confirmPassword } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            photo: photo,
            callbackURL: "/",
        });

        if (error) {
            setLoading(false);
            if (error?.message?.toLowerCase() === "password too short") {
                setError("password", {
                    type: "manual",
                    message: "Password needs to be at least 12 characters.",
                });
            }
            if (error?.message?.toLowerCase() === "password too short") {
                setError("confirmPassword", {
                    type: "manual",
                    message: "Password needs to be at least 12 characters.",
                });
            }
            return;
        };
        setLoading(false);
        router.push("/");
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <section className='card bg-[#00272c] w-full max-w-sm mx-auto shadow-2xl border border-white/20 rounded-2xl flex flex-col justify-between items-center gap-y-4 my-auto py-6 px-12'>
            <div className='flex justify-evenly items-center gap-x-2'>
                <Image src={"/logo.png"} alt='logo of the company' width={50} height={50} />
                <h2 className="text-2xl font-bold text-[#e1ff51]">
                    SkillSphere
                </h2>
            </div>
            <div className='space-y-2 text-center'>
                <h1 className='text-3xl font-bold text-zinc-50'>Create an Account</h1>
                <p className='text-md text-zinc-400'>Start your learning journey with us.</p>
            </div>
            <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset rounded-box w-xs px-4">
                    <label className="label text-[#e1ff51]">Name</label>
                    <input type="text" {...register("name", { required: "Name is required." })} className="input bg-[#01343a] text-zinc-50 border-white/20" autoFocus placeholder="Enter Your Name" />
                    {errors?.name && <span className='text-red-500'>{errors.name.message}</span>}

                    <label className="label text-[#e1ff51]">Photo</label>
                    <input type="text" {...register("photo")} className="input bg-[#01343a] text-zinc-50 border-white/20" autoFocus placeholder="Enter Your Photo URL" />

                    <label className="label text-[#e1ff51]">Email</label>
                    <input type="text" {...register("email", { required: "Email is required.", validate: value => isEmail(value) || "Please enter a valid email address" })} className="input bg-[#01343a] text-zinc-50 border-white/20" placeholder="Enter your Email" />
                    {errors?.email && <span className='text-red-500'>{errors.email.message}</span>}

                    <label className="label text-[#e1ff51]">Password</label>
                    <div className="relative">
                        <input type={isShowPassword ? "text" : "password"} {...register("password", { required: "Password is required.", minLength: { value: 12, message: "Password needs to be at least 12 characters." } })} className="input bg-[#01343a] text-zinc-50 border-white/20" placeholder="Enter a Password" />
                        <span className='absolute top-3.5 right-4 cursor-pointer text-zinc-50' onClick={() => setShowPassword(!isShowPassword)}>
                            {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {errors?.password && <span className='text-red-500'>{errors.password.message}</span>}

                    <label className="label text-[#e1ff51]">Confirm Password</label>
                    <div className="relative">
                        <input type={isShowConfirmPassword ? "text" : "password"} {...register("confirmPassword", { required: "Please re-enter your password.", validate: value => value === password || "Passwords don't match." })} className="input bg-[#01343a] text-zinc-50 border-white/20" placeholder="Re-enter your Password" />
                        <span className='absolute top-3.5 right-4 cursor-pointer text-zinc-50' onClick={() => setShowConfirmPassword(!isShowConfirmPassword)}>
                            {isShowConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {errors?.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>}
                    <button type='submit' className="btn bg-[#e1ff51] text-[#00272c] mt-4 font-semibold text-xl">{loading ? "Please wait..." : "Register"}</button>
                </fieldset>
            </form>

            <div className="flex items-center gap-2">
                <hr className="flex-1 border-white/20" />
                <span className="text-md text-zinc-50">OR</span>
                <hr className="flex-1 border-white/20" />
            </div>
            <div className="flex flex-col gap-4 w-full mb-4">
                <button className="btn bg-white text-[#00272c] border-[#e5e5e5] w-full" onClick={handleGoogleSignIn}>
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
            <p className='font-semibold text-end text-zinc-50'>Already have an account? <Link href={"/login"} className='text-[#e1ff51]'>Login</Link></p>
        </section>
    );
};

export default RegisterPage;