import Link from 'next/link';
import docImage from '@/app/images/pavithra-photo.jpg'
import NavBar from '../components/NavBar';

export default function Projects() {
    return (
        <div className='flex flex-col items-start justify-center'>
          <NavBar />
          <h1>
              Project Page
          </h1>
          <p>
              This page contains projects completed by the user.
          </p>
          <Link href="/">
              <button>
                  Home Page
              </button>
          </Link>
    </div>
    );
}