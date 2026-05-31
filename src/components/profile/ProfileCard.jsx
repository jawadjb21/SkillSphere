import Image from 'next/image';
import React from 'react';
import PrimaryButton from '../shared/PrimaryButton';
import { FaRegUserCircle } from "react-icons/fa";

const ProfileCard = async ({ user }) => {
    return (
        <div className='col-span-1 w-full'>
            <div className="card bg-[#00272c] w-full shadow-2xl border border-white/20 rounded-2xl">
                {
                    user?.image ?
                        <figure className="flex justify-center items-center py-8">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#e1ff51]">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </figure>
                        : <figure className="flex justify-center items-center py-8">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#e1ff51] flex items-center justify-center">
                                <FaRegUserCircle className="w-24 h-24 text-zinc-400" />
                            </div>
                        </figure>
                }
                <div className="card-body items-center text-center text-zinc-50 space-y-2">
                    <h2 className="card-title ">{user.name}</h2>
                    <p className=''>{user.email}</p>
                    <div className="card-actions justify-end flex items-center gap-x-4">
                        <PrimaryButton href={`#`}>Edit Profile</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;