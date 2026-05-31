import Image from 'next/image';
import React from 'react';
import PrimaryButton from '../shared/PrimaryButton';

const ProfileCard = ({userId}) => {
    return (
        <div className='col-span-1'>
            <div className="card bg-[#00272c] w-full max-w-sm mx-auto shadow-2xl border border-white/20 rounded-2xl  hover:scale-101 cursor-pointer">
                <figure className="w-full h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                    <Image
                        src={course.image}
                        alt="Image of the course subject"
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-zinc-50 w-50">{user.name}</h2>
                    <p className='text-zinc-50'>{user.email}</p>
                    <div className="card-actions justify-end flex items-center gap-x-4">
                        <PrimaryButton href={`/#`}>Details</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;