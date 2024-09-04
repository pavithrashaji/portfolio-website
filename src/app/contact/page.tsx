import Link from 'next/link';
import docImage from '@/app/images/pavithra-photo.jpg'
import NavBar from '../components/NavBar';

export default function Contact() {
    return (
        <div className='flex flex-col items-start justify-center'>
            <NavBar />
            <h1>
                Contact Page
            </h1>
            <p>
                This page contains contact information about the user.
            </p>
            <Link href="/">
                <button>
                    Home Page
                </button>
            </Link>
        </div>
    );
}