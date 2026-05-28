import Link from 'next/link';
import React from 'react';

const SecondaryButton = () => {
    return (
        <Link href={href} className="btn bg-[#00272c] text-zinc-50 text-xl border border-[#e1ff51] font-bold">{children}</Link>
    );
};

export default SecondaryButton;