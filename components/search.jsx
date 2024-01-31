'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Uses debounce to ensure not updating on every letter input
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    // By default, set params to page=1
    params.set('page', '1');

    // If user input exists, update the query with the term.
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);

    // Set delay of params update
  }, 100);

  return (
    <div className='relative flex flex-1 flex-shrink-0'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        // Sets default search value to whatever the query is when the page is loaded initially
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}
