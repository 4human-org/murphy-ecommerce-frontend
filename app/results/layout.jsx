import Search from '@/components/search';

export default function Layout({ children }) {
  return (
    <div className='w-full relative mt-4 h-screen flex justify-center'>
      <div className='w-3/4 mt-4'>
        <Search placeholder='Search products...' />
        <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
          {children}
        </div>
      </div>
    </div>
  );
}
