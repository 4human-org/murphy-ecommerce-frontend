import Search from '../../components/Search';
import { Suspense } from 'react';
export default function Layout({ children }) {
  return (
    
      <div className='mt-12 flex flex-col '>
        <Suspense>
          <Search placeholder='Search products...' />
          <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
            {children}
          </div>
        </Suspense>
      </div>
    
  );
}
