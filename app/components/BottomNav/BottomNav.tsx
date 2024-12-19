'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Home, Heart, SearchNormal, ProfileCircle } from 'iconsax-react';

const menuItems = [
  { name: 'Головна', icon: (active: boolean) => <Home size={24} color='#30435C' variant={active ? 'Bold' : 'Linear'}/>, path: '/' },
  { name: 'Вподобання', icon: (active: boolean) => <Heart size={24} color='#30435C' variant={active ? 'Bold' : 'Linear'}/>, path: '/favorites' },
  { name: 'Пошук', icon: (active: boolean) => <SearchNormal size={24} color='#30435C' variant={active ? 'Bold' : 'Linear'}/>, path: '/search' },
  { name: 'Профіль', icon: (active: boolean) => <ProfileCircle size={24} color='#30435C' variant={active ? 'Bold' : 'Linear'}/>, path: '/profile' },
];

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-[250px] lg:border-r lg:border-gray-200 lg:py-8
                    fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 lg:border-t-0">
      <div className="flex lg:flex-col lg:space-y-4 lg:px-4
                      flex-row justify-around items-center py-2 lg:py-0">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`flex lg:flex-row lg:w-full lg:p-3 lg:rounded-lg lg:hover:bg-gray-100
                       flex-col items-center text-sm ${
                       activePath === item.path ? 'text-black' : 'text-bmcolor'
                     }`}
            onClick={() => handleNavigation(item.path)}
          >
            {item.icon(activePath === item.path)}
            <span className='font-montserrat font-semibold lg:ml-3'>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
