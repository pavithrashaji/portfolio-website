import Link from 'next/link';
import Image from 'next/image';
import docImage from '@/app/images/pavithra-photo.jpg'
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <div className='h-screen'> HELLO WORLD </div>
      <div className='h-screen'> HELLO WORLD </div>
      <div className='h-screen'> HELLO WORLD </div>
      <div className='h-screen'> HELLO WORLD </div>
    </div>
  );
}
