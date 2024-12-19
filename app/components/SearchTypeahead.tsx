'use client';

import { SearchNormal1 } from 'iconsax-react';

const SearchTypeahead = () => {
  return (
    <div className="flex items-center w-full mb-10">
      <input
        type="text"
        placeholder="Пошук"
        className="w-full px-4 py-2.5 rounded-lg bg-[#F5F7FA] border border-[#A7BAD2] 
                 font-montserrat text-sm placeholder:text-[#D0DAE7] text-bmcolor font-semibold 
                 focus:outline-none focus:border-[#6a7f99] focus:ring-0"
                 style={{ fontSize: '16px' }}
      />
      <button className="ml-2 p-2 rounded-lg bg-itsearch border border-[#A7BAD2]">
        <SearchNormal1 color='#A7BAD2' size={20} />
      </button>
    </div>
  );
};

export default SearchTypeahead;
