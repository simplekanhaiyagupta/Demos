import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">My Portfolio</h1>
      <nav>
        <a href="#about" className="text-gray-800 dark:text-white mx-3">About</a>
        <a href="#projects" className="text-gray-800 dark:text-white mx-3">Projects</a>
        <a href="#contact" className="text-gray-800 dark:text-white mx-3">Contact</a>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
