import React from 'react';
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-lg transition-all duration-300 border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-900 dark:text-white text-sm">
              © {new Date().getFullYear()} Shashindi Harischandra. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/shashindi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-dark-700/50"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://github.com/Shashindi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-dark-700/50"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100089862327654"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-dark-700/50"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://www.instagram.com/_shashindi_?igsh=MTE2aDMzb3U2ZzN0dw==&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-dark-700/50"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
