import ProfileCard from '@/components/profile/ProfileCard';
import ProfileInfoCard from '@/components/profile/ProfileInfoCard';
import React from 'react';
import { auth } from '@/lib/auth.js';
import { headers } from 'next/headers';

export const metadata = {
    title: "SkillSphere | Profile",
    description: "SkillSphere Profile Section",
};

const page = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    });
    const user = session?.user;
    return (
        <div className='text-zinc-50 max-w-7xl px-4 sm:px-6 lg:px-8 py-2 md:py-10 container mx-auto'>
            <h1 className='font-bold text-2xl sm:text-4xl text-center'>My Profile</h1>
            <div className='flex flex-col justify-center items-center gap-y-2 md:grid md:grid-cols-3 md:gap-6 md:px-16 pb-6 mt-8'>
                <ProfileCard user={user}></ProfileCard>
                <ProfileInfoCard user={user}></ProfileInfoCard>
            </div>

        </div>
    );
};

export default page;