import Link from 'next/link';
import docImage from '@/app/images/pavithra-photo.jpg'
import NavBar from '../components/NavBar';

export default function Experience() {
    return (
        <div className='flex flex-col items-start justify-center'>
            <NavBar />
            <h1>
                Experience Page
            </h1>
            <p>
                This page contains experience information about the user.
            </p>
            <Link href="/">
                <button>
                    Home Page
                </button>
            </Link>
        </div>
    );
}