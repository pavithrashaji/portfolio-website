import Link from 'next/link';
import docImage from '@/app/images/pavithra-photo.jpg'

export default function NavBar() {
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
                
                <nav className="nav-gradient left-14 top-32 md:left-44 md:top-20 lg:left-44 lg:top-20  text-custom-mid flex flex-col sm:flex-col md:flex-row lg:flex-row self-center items-center justify-around w-32 h-3/4 md:h-auto lg:h-auto md:w-5/6 lg:w-5/6 bg-custom-nav-bg rounded-2xl mx-3 my-4 md:m-0 lg:m-0 p-2 shadow-md shadow-custom-mid">
                    <Link className='border-draw hover:text-white focus:text-white text-2xl' href="/about">
                        ABOUT
                    </Link>
                    <Link className='border-draw hover:text-white focus:text-white text-2xl' href="/projects">
                    PROJECTS
                    </Link>
                    <Link className='border-draw hover:text-white focus:text-white text-2xl' href="/experience">
                    EXPERIENCE
                    </Link>
                    <Link className='border-draw hover:text-white focus:text-white text-2xl' href="/contact">
                    CONTACT
                    </Link>
                </nav>
            </div>
        </div>
    );
}