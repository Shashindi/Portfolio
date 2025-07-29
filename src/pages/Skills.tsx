import React from 'react';
import {
  BarChart2Icon,
  DatabaseIcon,
  LineChartIcon,
  CodeIcon,
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface ToolTech {
  name: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'Programming' },
  { name: 'R', level: 80, category: 'Programming' },
  { name: 'MYSQL', level: 85, category: 'Database' },
  { name: 'MongoDB', level: 85, category: 'Database' },
  { name: 'Machine Learning', level: 85, category: 'Data Science' },
  { name: 'Statistics & Probability', level: 85, category: 'Data Science' },
  { name: 'Hypothesis Testing', level: 85, category: 'Data Science' },
  { name: 'Statistical Analysis', level: 80, category: 'Data Science' },
  { name: 'Data Visualization', level: 90, category: 'Data Science' },
];

const dataTools: ToolTech[] = [
  { name: 'Pandas' },
  { name: 'NumPy' },
  { name: 'Jupyter Notebook' },
  { name: 'scikit-learn' },
  { name: 'Matplotlib' },
  { name: 'TensorFlow' },
];

const dataEngineering: ToolTech[] = [
  { name: 'Data Pipelines' },
  { name: 'AWS' },
  { name: 'Azure' },
];

const groupedSkills = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
  acc[skill.category] = acc[skill.category] || [];
  acc[skill.category].push(skill);
  return acc;
}, {});

const Home: React.FC = () => (
  <div className="bg-white dark:bg-dark-800 min-h-screen transition-colors duration-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1
        tabIndex={0}
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 select-none cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-500 dark:hover:text-primary-400 focus:text-primary-500 dark:focus:text-primary-400 hover:scale-110 focus:scale-110"
      >
        My Skills
      </h1>

      {/* Skills by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 animate-fade">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="transition-transform hover:scale-[1.02] duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              {category === 'Programming' && (
                <CodeIcon className="mr-2 text-primary-500 dark:text-primary-400" />
              )}
              {category === 'Database' && (
                <DatabaseIcon className="mr-2 text-primary-500 dark:text-primary-400" />
              )}
              {category === 'Data Science' && (
                <LineChartIcon className="mr-2 text-primary-500 dark:text-primary-400" />
              )}
              {category === 'Data Engineering' && (
                <BarChart2Icon className="mr-2 text-primary-500 dark:text-primary-400" />
              )}
              {category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-block bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-white px-4 py-2 rounded-full font-medium shadow-md border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400"
                  title={`Proficiency: ${skill.level}%`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 animate-fade">
        <div className="transition-transform hover:scale-105 duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <BarChart2Icon className="mr-2 text-primary-500 dark:text-primary-400" />
            Data Science Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {dataTools.map((tool) => (
              <span
                key={tool.name}
                className="inline-block bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-white px-4 py-2 rounded-full font-medium border border-gray-200 dark:border-gray-600 hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 transition-colors duration-200"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
        <div className="transition-transform hover:scale-105 duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <DatabaseIcon className="mr-2 text-primary-500 dark:text-primary-400" />
            Data Engineering
          </h2>
          <div className="flex flex-wrap gap-3">
            {dataEngineering.map((tech) => (
              <span
                key={tech.name}
                className="inline-block bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-white px-4 py-2 rounded-full font-medium border border-gray-200 dark:border-gray-600 hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 transition-colors duration-200"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Skills Section */}
      <div className="group bg-gray-50 dark:bg-dark-700 p-8 rounded-xl shadow-lg mb-16 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-primary-500/40 dark:hover:shadow-primary-400/40 hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Additional Skill Areas</h2>
        <ul className="text-gray-700 dark:text-white text-base space-y-3 list-disc list-inside pl-4 leading-relaxed">
          <li>
            <strong>Programming & Scripting Languages:</strong> Java, Kotlin, JavaScript, PHP, C, C++, HTML
          </li>
          <li>
            <strong>Mobile App Development:</strong> Android Studio, Kotlin, Firebase (Authentication, Realtime DB, Storage)
          </li>
          <li>
            <strong>UI/UX Design:</strong> Figma, User-Centered Design Principles
          </li>
          <li>
            <strong>Version Control & Tools:</strong> Git, GitHub
          </li>
          <li>
            <strong>Web Development:</strong> PHP, CSS, JavaScript
          </li>
        </ul>
      </div>

      {/* Workflow Section */}
      <div className="group bg-gray-50 dark:bg-dark-700 p-8 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-primary-500/40 dark:hover:shadow-primary-400/40 hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <CodeIcon className="mr-3 text-primary-500 dark:text-primary-400" />
          My Data Science Workflow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: '1. Data Collection',
              desc: 'Gathering data from various sources, including databases, APIs, and web scraping.',
            },
            {
              title: '2. Data Cleaning',
              desc: 'Preprocessing, handling missing values, outlier detection, and data normalization.',
            },
            {
              title: '3. Analysis & Modeling',
              desc: 'Applying statistical methods and machine learning algorithms to extract insights.',
            },
            {
              title: '4. Visualization & Deployment',
              desc: 'Creating interactive visualizations and deploying models into production environments.',
            },
          ].map((step) => (
            <div
              key={step.title}
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-600 transition hover:shadow-md hover:ring-1 hover:ring-primary-500 dark:hover:ring-primary-400"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Home;
