import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, GithubIcon, LinkedinIcon, FileTextIcon } from 'lucide-react';

const highlightClass =
  "transition-shadow duration-300 hover:shadow-[0_16px_80px_rgba(80,80,200,0.75)] cursor-pointer";

const styles = `
  @keyframes slideLeftRight {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(6px); }
  }
  .slide-letter {
    display: inline-block;
    animation-name: slideLeftRight;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;

const SlidingText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <style>{styles}</style>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="slide-letter"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight space-y-2 text-gray-900 dark:text-white">
              <span className={`block mb-2 w-fit ${highlightClass}`}>
                Hello, I'm <span className="font-extrabold">Shashindi</span>
              </span>

              {/* Sliding left-right animated text */}
              <span
                className={`block text-2xl md:text-3xl font-semibold w-fit ${highlightClass} text-gray-700 dark:text-gray-200`}
              >
                <SlidingText text="BSc (Hons) IT Undergraduate" />
              </span>

              <span
                className={`block text-xl md:text-2xl font-medium w-fit ${highlightClass} text-primary-600 dark:text-primary-400 animate-pulse`}
              >
                Aspiring Data Scientist
              </span>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-300">
              BSc (Hons) IT undergraduate specializing in Data Science, with skills in Python, machine learning, and data analysis.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="group relative">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-md font-semibold transition-all duration-300 shadow-md group-hover:scale-105 group-hover:shadow-lg"
                >
                  About Me
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="group relative">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-md font-semibold transition-all duration-300 shadow-md group-hover:scale-105 group-hover:shadow-lg"
                >
                  View My Projects
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-600 dark:text-gray-300 mb-3 font-medium">Connect with me:</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-dark-700 p-2 rounded-full shadow-md hover:scale-110 transition-colors duration-200"
                >
                  <LinkedinIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
                </a>
                <a
                  href="https://github.com/Shashindi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-dark-700 p-2 rounded-full shadow-md hover:scale-110 transition-colors duration-200"
                >
                  <GithubIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-dark-700 p-2 rounded-full shadow-md hover:scale-110 transition-colors duration-200"
                >
                  <FileTextIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400 shadow-2xl h-72 w-72 md:h-96 md:w-96 bg-white dark:bg-dark-700 flex items-center justify-center transition-colors duration-200">
              <img
                src="/WhatsApp_Image_2025-07-03_at_21.53.19.jpg"
                alt="Profile of Shashindi"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 text-center text-gray-500 dark:text-gray-400">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Home;
 