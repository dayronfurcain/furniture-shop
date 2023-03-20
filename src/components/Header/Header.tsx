import React, { useState } from 'react';
import Menu from './Menu';
import ModalMenu from './ModalMenu';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between px-10 py-4">
      <a href="#">
        <img src="/shopify.png" alt="shopify" className="w-20" />
      </a>
      <nav className="hidden sm:block">
        <ul className="flex items-center justify-between gap-4 font-semibold text-base">
          <Menu />
        </ul>
      </nav>
      <div className="flex items-center justify-between gap-2 text-xl">
        <i className="bx bx-search cursor-pointer"></i>
        <i className="bx bx-cart cursor-pointer"></i>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed right-4 bottom-4 w-10 h-10 sm:hidden bg-[#F16240] rounded-full flex items-center justify-center ring-4 ring-white"
      >
        <i
          className={`bx ${
            showMenu ? 'bx-x' : 'bx-menu-alt-right'
          } bx-sm text-white`}
        ></i>
        {showMenu && (
          <ul className="absolute right-0 z-50 bg-[#F16240] flex flex-col justify-center items-center gap-2 p-4 text-white rounded-sm slide-top">
            <ModalMenu />
          </ul>
        )}
      </button>
    </header>
  );
};

export default Header;
