import React from 'react';
import { navLinks } from '../../constants';

const ModalMenu = () => {
  return (
    <>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`hover:opacity-30 transition-all duration-500`}
        >
          <a href={link.link}>{link.description}</a>
        </li>
      ))}
    </>
  );
};

export default ModalMenu;
