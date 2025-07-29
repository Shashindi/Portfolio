import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-800 min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            tabIndex={0}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4 cursor-pointer transition duration-300 ease-in-out hover:text-primary-500 dark:hover:text-primary-400 hover:scale-105 focus:outline-none focus:text-primary-500 dark:focus:text-primary-400 focus:scale-105 select-none"
          >
            Contact Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out through any of the methods below or connect with me on LinkedIn, GitHub, Facebook, and Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="group bg-gray-50 dark:bg-dark-700 p-8 rounded-xl shadow-md cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-primary-500 dark:group-hover:text-primary-400 select-none">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MailIcon className="h-6 w-6 text-primary-500 dark:text-primary-400" />
                <a
                  href="mailto:shashindhieravishka@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  shashindhieravishka@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-6 w-6 text-primary-500 dark:text-primary-400" />
                <a
                  href="tel:+94762352603"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  +94 762 352 603
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPinIcon className="h-6 w-6 text-primary-500 dark:text-primary-400" />
                <span className="text-gray-600 dark:text-gray-300">Colombo, Sri Lanka</span>
              </div>
            </div>

            {/* Quick Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row sm:gap-4 gap-3">
              <a
                href="mailto:shashindhieravishka@gmail.com"
                className="flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md shadow-md transition-colors"
              >
                Send Email
              </a>
              <a
                href="tel:+94762352603"
                className="flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md shadow-md transition-colors"
              >
                Call Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 dark:group-hover:text-primary-400 select-none">
                Connect with me
              </h3>
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/shashindi-harischandra-910707322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-white p-3 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Shashindi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-white p-3 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604C8.158 17.2 5.356 16.171 5.356 11.574c0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.002 12.002 0 0024 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://web.facebook.com/profile.php?id=100089862327654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-white p-3 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.408.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.098 2.796.142v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.592 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/_shashindi_?igsh=MTE2aDMzb3U2ZzN0dw==&utm_source=ig_contact_invitei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-white p-3 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.963.24 2.42.407.558.202.957.445 1.376.864.42.42.662.818.864 1.376.167.457.353 1.25.407 2.42.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.963-.407 2.42a3.918 3.918 0 01-.864 1.376 3.918 3.918 0 01-1.376.864c-.457.167-1.25.353-2.42.407-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.963-.24-2.42-.407a3.918 3.918 0 01-1.376-.864 3.918 3.918 0 01-.864-1.376c-.167-.457-.353-1.25-.407-2.42C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.963.407-2.42a3.918 3.918 0 01.864-1.376 3.918 3.918 0 011.376-.864c.457-.167 1.25-.353 2.42-.407C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.772.127 4.708.345 3.77.694a5.921 5.921 0 00-2.168 1.42A5.921 5.921 0 00.694 4.257c-.35.938-.567 2.002-.624 3.282C.012 8.741 0 9.15 0 12c0 2.85.012 3.259.07 4.539.057 1.28.275 2.344.624 3.282a5.921 5.921 0 001.42 2.168 5.921 5.921 0 002.168 1.42c.938.35 2.002.567 3.282.624C8.741 23.988 9.15 24 12 24s3.259-.012 4.539-.07c1.28-.057 2.344-.275 3.282-.624a5.921 5.921 0 002.168-1.42 5.921 5.921 0 001.42-2.168c.35-.938.567-2.002.624-3.282.058-1.28.07-1.689.07-4.539s-.012-3.259-.07-4.539c-.057-1.28-.275-2.344-.624-3.282a5.921 5.921 0 00-1.42-2.168A5.921 5.921 0 0019.543.694c-.938-.35-2.002-.567-3.282-.624C15.259.012 14.85 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center text-center p-8 rounded-xl">
            <p className="text-lg max-w-md text-gray-600 dark:text-gray-300">
              I'm excited to connect! Use the email or phone buttons to reach me directly, or find me on social media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
