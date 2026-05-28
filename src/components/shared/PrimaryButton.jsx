import Link from 'next/link';
import React from 'react';

const PrimaryButton = ({ children, href = null }) => {
    return (
        <Link href={href} className="btn bg-[#e1ff51] text-[#00272c] text-xl font-bold">{children}</Link>
    );
};

export default PrimaryButton;