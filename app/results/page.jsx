'use client';

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
    <div>
      <div className='flex items-center justify-between '>
        {query ? <h1 className='text-2xl'>Results for {query}</h1> : null}
      </div>
      <Products query={query} currentPage={currentPage} />
    </div>
  );
}
