import Image from 'next/image';
import Results from '@/app/results/page';
import Search from '@/components/search';
export default function Home() {
  return (
    <main className='flex-col flex w-screen overflow-x-hidden scroll-smooth'>
      <div className='w-3/4 self-center mt-4 h-screen'>
        <Results />
        <Search placeholder='Search products...' />
      </div>
    </main>
  );
}
