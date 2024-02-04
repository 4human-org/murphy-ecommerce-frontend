import Search from '@/components/search';

export default function Layout({ children }) {
  return (
    
      <div className='mt-12 flex flex-col '>
        <Search placeholder='Search products...' />
        <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
          {children}
        </div>
      </div>
    
  );
}
