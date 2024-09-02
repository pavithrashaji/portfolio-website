import Link from 'next/link';

export default function About() {
    return (
        <div>
            <h1>
                About Page
            </h1>
            <p>
                This page contains information about the user.
            </p>
            <Link href="/">
                <button>
                    Home Page
                </button>
            </Link>
        </div>
    );
}