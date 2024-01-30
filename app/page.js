import Image from 'next/image';
import SearchPageDemo from '@/app/search_bar_demo/page';

export default function Home() {
  return (
    <main className='flex-col flex w-screen overflow-x-hidden scroll-smooth'>
      <div className='w-3/4 self-center mt-4 h-screen'>
        <SearchPageDemo />
      </div>
    </main>
  );
}
