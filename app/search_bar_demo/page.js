'use client';

import Search from '@/components/search';
import Products from './products';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  // Sets current page to inital searchParams, default value is 1
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page'))
  );

  // UseEffect to handle inital state of query based on searchParams
  useEffect(() => {
    // If query is exists in searchParams, update query state accordingly
    if (searchParams.get('query')) {
      setQuery(searchParams.get('query')?.toString());

      // If query gets deleted by user and gets set to null, update query to empty string
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
