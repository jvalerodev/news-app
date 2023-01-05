'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-between items-center max-w-6xl mx-auto px-5"
    >
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full flex-1 h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
      />

      <button
        disabled={!input}
        type="submit"
        className="text-white px-4 py-1 bg-orange-400 rounded-full disabled:bg-orange-200 hover:bg-orange-300 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
