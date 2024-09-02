"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function UserProfile() {
    const { username } = useParams<{ username: string }>();

    return (
        <div>
            <h1>
                Welcome, {username}.
            </h1>
            <div>
                This profile page belongs to {username}.
            </div>
            <Link href="/">
                <button className="border-2 border-black rounded-lg shadow-md p-2 m-4 hover:border-red-600 hover:bg-red-300">
                    Home Page
                </button>
            </Link>
        </div>
    );
}