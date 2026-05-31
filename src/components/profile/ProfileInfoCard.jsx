import React from 'react';

const ProfileInfoCard = ({ user }) => {
    return (
        <div className='col-span-1 md:col-span-2'>
            <div className="card bg-[#00272c] w-full shadow-2xl border border-white/20 rounded-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-zinc-50 mb-4">
                        Profile Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-zinc-400 text-sm">Full Name</p>
                            <p className="text-zinc-50 font-semibold">
                                {user.name}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-400 text-sm">Email Address</p>
                            <p className="text-zinc-50 font-semibold break-all">
                                {user.email}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-400 text-sm">Role</p>
                            <p className="text-zinc-50 font-semibold">
                                Student
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-400 text-sm">Member Since</p>
                            <p className="text-zinc-50 font-semibold">
                                May 2026
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-400 text-sm">Courses Enrolled</p>
                            <p className="text-zinc-50 font-semibold">
                                0
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-400 text-sm">Certificates Earned</p>
                            <p className="text-zinc-50 font-semibold">
                                0
                            </p>
                        </div>
                    </div>

                    <div className="divider divider-neutral"></div>

                    <div>
                        <p className="text-zinc-400 text-sm mb-2">
                            Learning Goal
                        </p>
                        <p className="text-zinc-50">
                            Become a full-stack developer by mastering React, Next.js, Node.js, and MongoDB.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfoCard;