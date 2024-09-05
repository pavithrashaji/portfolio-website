"use client";
import Link from 'next/link';
import docImage from '@/app/images/pavithra-photo.jpg'
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavBar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    return (
        <div>
            <div className='flex flex-col md:flex-row lg:flex-row fixed justify-start w-screen'>
                <div className='w-36 h-36 my-10 mx-14 nav-gradient-2 border-dotted border-2 rounded-full shadow-inner shadow-custom-start'></div>
                <Link href="/">
                    <img
                        src={docImage.src}
                        className="absolute left-12 top-9 z-20 w-32 h-32 lg:w-32 lg:h-32  mx-4 my-3 rounded-full object-cover shadow-md shadow-custom-nav-bg-2" 
                        />
                 </Link>
                
                <nav className="nav-gradient left-14 top-32 md:left-44 md:top-20 lg:left-32 lg:top-20  text-custom-mid flex flex-col sm:flex-col md:flex-row lg:flex-row self-center items-center justify-around w-32 h-3/4 md:h-auto lg:h-auto md:w-5/6 lg:w-5/6 bg-custom-nav-bg rounded-2xl mx-3 my-4 md:m-0 lg:m-0 p-2 shadow-md shadow-custom-mid">
                    <Link className={`${isActive("/about") ? 'text-white p-1 border-b border-t' : 'text-custom-mid border-draw'} hover:text-white text-2xl`} href="/about">
                        ABOUT
                    </Link>

                    <Link href="/projects" className={`${isActive("/projects") ? 'text-white p-1 border-b border-t' : 'text-custom-mid border-draw'} hover:text-white after:text-white text-2xl`}>
                    PROJECTS
                    </Link>

                    <Link className={`${isActive("/experience") ? 'text-white p-1 border-b border-t' : 'text-custom-mid border-draw'} hover:text-white text-2xl`} href="/experience">
                    EXPERIENCE
                    </Link>

                    <Link className={`${isActive("/contact") ? 'text-white p-1 border-b border-t' : 'text-custom-mid border-draw'} hover:text-white text-2xl`} href="/contact">
                    CONTACT
                    </Link>
                </nav>
            </div>
        </div>
    );
}
