import React from 'react';
import { navLinks } from '../../constants';

const Menu = () => {
  return (
    <>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`px-4 hover:bg-[#F16240]/20 rounded-[4px] transition-all duration-500`}
        >
          <a href={link.link}>{link.description}</a>
        </li>
      ))}
    </>
  );
};

export default Menu;
