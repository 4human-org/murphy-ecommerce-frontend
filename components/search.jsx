'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
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
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}
