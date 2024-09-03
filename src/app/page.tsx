import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex items-start justify-center'>
      <nav className="nav-gradient text-custom-mid flex flex-row self-center items-center justify-around w-4/5 bg-custom-nav-bg rounded-2xl m-8 p-3 shadow-md shadow-custom-nav-bg-2">
        <Link className='border-draw hover:text-white text-2xl' href="/about">
            ABOUT
        </Link>
        <Link className='border-draw hover:text-white text-2xl' href="/about">
          PROJECTS
        </Link>
        <Link className='border-draw hover:text-white text-2xl' href="/about">
          EXPERIENCE
        </Link>
        <Link className='border-draw hover:text-white text-2xl' href="/about">
          CONTACT
        </Link>
      </nav>
    </div>
    
  );
}
