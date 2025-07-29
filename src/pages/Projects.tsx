import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
   
   
    {
      id: 2,
      title: 'Movie Recommendation System',
      description:
        'Machine Learning web app recommends movies by similarity, with interactive UI and real-time poster display',
      image: "https://i.postimg.cc/j2BM83V7/1-leu-I7f-Vke-Or-KAIGOOj-T9-A.png",
      tags: ['python','scikit-learn','Streamlit','HTML/CSS','Jupyter Notebook','Pandas','TMDb API','Numpy'],
      githubUrl: 'https://github.com/Shashindi/MovieRecommendationSystem',
    },
    {
      id: 1,
      title: 'Laptop Price Predictor',
      description:
        'Machine Learning Model for Predicting Laptop Prices.',
      image: "https://i.postimg.cc/L5kVT9Vr/dataset-cover.jpg",
      tags: ['python','scikit-learn','Flask','HTML/CSS','Jupyter Notebook','Pandas','Numpy'],
      githubUrl: 'https://github.com/Shashindi/Laptop-Price-Predictor',
    },
     {
      id: 5,
      title: 'AI Hand Pose Estimation ',
      description:
        'Real-time hand landmark detection & visualization from webcam and Automatically saves annotated images',
      image: "https://i.postimg.cc/tJn5Vd1C/1-s2-0-S0031320319301724-gr1.jpg",
      tags: ['python','MediaPipe','OpenCV','Jupyter Notebook','Numpy'],
      githubUrl: 'https://github.com/Shashindi/AI-Hand-Pose-Estimation',
    },
     {
      id: 3,
      title: 'Finance Tracker App',
      description:
        'Created a mobile app to track income, expense, and budgeting goals.',
      image: "https://i.postimg.cc/gkPS65KC/data-information-report-statistics-strategy-concept.jpg",
      tags: ['Android Studio (Native Android with Kotlin)'],
      githubUrl: 'https://github.com/Shashindi/Personal-Finance-Tracker-',
    },
    {
      id: 4,
      title: 'Image Slider App',
      description:
        'Included navigation controls and dynamic image rendering using JavaScript.',
      image: "https://i.postimg.cc/g07pHwPy/Screenshot-2025-07-05-at-14-46-51.png",
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Shashindi/Image_Slider',
    },
    {
      id: 6,
      title: 'Fake News Detection System',
      description:
        'Developed a web application that detects fake news using machine learning.',
      image: "https://i.postimg.cc/wML9v9ZX/new-it-rules-prevent-fake-news-misuse-of-freedom-of-press-centre-tells-delhi-high-court-jpg.webp",
      tags: ['Python', 'scikit-learn', 'Flask', 'Jupyter Notebook', 'Pandas' , 'HTML/CSS'],
      githubUrl: 'https://github.com/Shashindi/Fake_News_Detection',
    },
     {
      id: 7,
      title: 'Online Stock Management System (Group Project)',
      description:
        'Implemented CRUD operations, role-based access and optimized SQL queries for efficient data handling and reporting.',
      image: "https://i.postimg.cc/rm51Nrt7/futuristic-technology-concept.jpg", // ✅ fixed path
      tags: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'HTML'],
      githubUrl: 'https://github.com/Shashindi/Online-Stock-Managment-System-',
    },
    {
      id: 8,
      title: 'Online Cake Ordering Management System (Group Project)',
      description:
        'Developed a full-stack e-commerce platform with product listings, user authentication, order management and integrated cart functionality, payment simulations and dynamic product filtering.',
      image: "https://i.postimg.cc/zvcGLdGN/mid-section-woman-holding-meringue-sugar-cubes-three-tier-serving-tray-wooden-table.jpg",
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      githubUrl: 'https://github.com/Shashindi/Online-Cake-Ordering-System',
    },
    
  ];

  return (
    <div className="bg-white dark:bg-dark-800 min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 group">
        <div className="text-center mb-10 transition duration-500">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(0,115,245,0.6)]">
            My Projects
          </h1>
          <p className="text-md text-primary-600 dark:text-primary-400 underline underline-offset-4 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
            <a
              href="https://github.com/Shashindi?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Please check out all my projects from here: https://github.com/Shashindi?tab=repositories
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 transition-colors duration-200"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <GithubIcon size={18} className="mr-1" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLinkIcon size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
