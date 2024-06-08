"use client";
import SearchDropdown from "../ResultsPage/SearchDropdown";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react"; // Import useState hook

export default function Search({ placeholder }) {
  const [searchTerm, setSearchTerm] = useState(""); // State to store search term
  const [isFocused, setIsFocused] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (searchTerm) {
      params.set("query", searchTerm); // Set search query in URL params
    } else {
      params.delete("query");
    }
    router.push(`/results?${params.toString()}`);
    setIsFocused(false);
  };

  return (
    <div className="relative mb-3 w-3/4 flex-1 flex-col self-center">
      <form onSubmit={handleSearch}>
        {/* Use form onSubmit instead of input onSubmit */}
        <div className="relative flex  flex-1 flex-shrink-0"
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        >
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder={placeholder}
            value={searchTerm}
            onClick={() => setIsFocused(true)}
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
          />
        </div>
      </form>

      <SearchDropdown
        query={searchTerm}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
      />
    </div>
  );
}
