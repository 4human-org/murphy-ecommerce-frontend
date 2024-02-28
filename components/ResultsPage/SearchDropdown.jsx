'use client';

import { useEffect, useState } from 'react';
import product_data from './search_bar_data/MOCK_DATA.json';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const SearchDropdown = ({ query, isFocused, setIsFocused }) => {
  const [suggestions, setSuggestions] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSuggestionClick = (term) => {
    const params = new URLSearchParams(searchParams);

    // By default, set params to page=1
    params.set('page', '1');

    // If user input exists, update the query with the term.
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    router.push(`/results?${params.toString()}`);
    setIsFocused(false);
  };

  useEffect(() => {
    if (query == '') {
      setSuggestions(product_data);
    }

    if (query) {
      setSuggestions(
        product_data.filter((product) => {
          return (
            product.product_name.toLowerCase().includes(query.toLowerCase()) &&
            product.product_name != query
          );
        })
      );
    }
  }, [query]);

  function renderQuery() {
    if (isFocused) {
      return suggestions.map((suggestion, i) => {
        if (i > 2) return;
        return (
          <li
            onBlur={() => setIsFocused(false)}
            key={i}
            className='relative  pl-2 pb-1 cursor-pointer hover:bg-gray-600/20 rounded '
          >
            <button
              className='w-full text-left'
              onClick={() => handleSuggestionClick(suggestion.product_name)}
            >
              {suggestion.product_name}
            </button>
          </li>
        );
      });
    }
  }

  return (
    <ul className='absolute min-h-1 pl-8 pr-8 pt-2 pb-1 bg-white flex flex-col rounded flex-1 w-full'>
      {renderQuery()}
    </ul>
  );
};
export default SearchDropdown;
