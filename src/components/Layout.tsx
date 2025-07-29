import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  darkMode,
  setDarkMode
}) => {
  return <div className="min-h-screen flex flex-col bg-white dark:bg-dark-800 text-dark-800 dark:text-white transition-colors duration-200">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>;
};
export default Layout;