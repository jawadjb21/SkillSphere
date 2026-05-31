import ProfileCard from '@/components/profile/ProfileCard';
import ProfileInfoCard from '@/components/profile/ProfileInfoCard';
import React from 'react';

const page = () => {
    return (
        <div className='text-zinc-50 max-w-7xl px-4 sm:px-6 lg:px-8 py-2 md:py-10 container mx-auto'>
            <h1 className='font-bold text-2xl sm:text-4xl text-center'>My Profile</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-16 pb-6 mt-8'>
                <ProfileCard></ProfileCard>
                <ProfileInfoCard></ProfileInfoCard>
            </div>

        </div>
    );
};

export default page;