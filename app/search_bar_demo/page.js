'use client';

import Search from '@/components/search';
import Products from './products';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page'))
  );

  useEffect(() => {
    console.log(searchParams.get('query)'));
    if (searchParams.get('query')) {
      setQuery(searchParams.get('query')?.toString());
    } else if (searchParams.get('query')?.toString() == null) {
      setQuery('');
    }
  }, [searchParams]);

  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className='text-2xl'>Products</h1>
      </div>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <Search placeholder='Search products...' />
      </div>
      <div>
        <Products query={query} currentPage={currentPage} />
      </div>
    </div>
  );
}
