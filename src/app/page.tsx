import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="flex flex-col items-center justify-center h-screen bg-gray-100">
        Welcome to My Next.js App!
        <Link href="/user/jack">
          <button className="border-2 border-black rounded-lg shadow-md p-2 m-4 hover:border-red-600 hover:bg-red-300">
            User Profile
          </button>
        </Link>
      </h1>
      <div className="flex flex-row text-pretty justify-between items-center flex-wrap">
        <div className="flex-1 basis-1/4 bg-green-100">Item 1</div>
        <div className="flex-1 basis-1/4 bg-red-100">Item 2</div>
        <div className="flex-1 basis-1/4 bg-blue-100">Item 3</div>
        <div className="flex-1 basis-1/4 bg-yellow-100">Item 4</div>
      </div>

      <p className="flex items-center justify-center h-screen bg-gray-100">This is a basic example using the App Router.</p>
      <Link href="/about">
        <button>
          About Page
        </button>
      </Link>
    </div>
  );
}
