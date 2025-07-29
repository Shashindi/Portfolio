import React from 'react';
import { GithubIcon, LinkedinIcon, FileTextIcon } from 'lucide-react';
interface SocialLinksProps {
  size?: number;
  className?: string;
}
const SocialLinks: React.FC<SocialLinksProps> = ({
  size = 24,
  className = ''
}) => {
  return <div className={`flex items-center space-x-4 ${className}`}>
      <a href="http://linkedin.com/in/shashindi-harischandra-910707322" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="LinkedIn">
        <LinkedinIcon size={size} />
      </a>
      <a href="https://github.com/Shashindi?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="GitHub">
        <GithubIcon size={size} />
      </a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="Resume">
        <FileTextIcon size={size} />
      </a>
    </div>;
};
export default SocialLinks;
