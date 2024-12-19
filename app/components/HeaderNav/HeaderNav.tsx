'use client';

import { NotificationBing } from "iconsax-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between my-10">
      <h1 className="text-xl font-bold text-[#30435C]">Назва Вашого Додатку</h1>
      <div className="">
      <NotificationBing size="26" color="#30435C"/>
      </div>
    </header>
  );
};

export default Header;