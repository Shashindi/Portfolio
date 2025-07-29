import React from 'react';
import {
  BookOpenIcon,
  AwardIcon,
  GraduationCapIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon,
  GithubIcon,
} from 'lucide-react';

const certifications = [
  {
    title: "Java/SQL Developer Industrial Expert Masterclass Course",
    provider: "Institute of Digital Engineering Technology (PVT.) LTD. , 2024",
    icon: <AwardIcon className="w-6 h-6 text-primary-400" />,
  },
  {
    title: "Python for Beginners , Web Design for Beginners",
    provider: "University of Moratuwa, 2024",
    icon: <AwardIcon className="w-6 h-6 text-primary-400" />,
  },
  {
    title: "Data Science Masterclass for Beginners, Data Science Working with Data, Math for Data Science, Machine Learning in Python Environment, Data Entry Tools and Techniques ",
    provider: "Alison , 2025",
    icon: <AwardIcon className="w-6 h-6 text-primary-400" />,
  },
  {
    title: "Introduction to Programming with R for data Science, Data Science for Beginners, Python full course for Begineers",
    provider: "Cursa, 2025",
    icon: <AwardIcon className="w-6 h-6 text-primary-400" />,
  },
  {
    title: "Building with Artificial Intelligence, Introduction to Modern Database Systems",
    provider: "Saylor.Org Academy, 2025",
    icon: <AwardIcon className="w-6 h-6 text-primary-400" />,
  },
];

const education = [
  {
    title: "BSc (Hons) Information Technology",
    subtitle: "Specialization in Data Science",
    institution: "Sri Lanka Institute of Information Technology(SLIIT) - Malabe",
    period: "2023 - 2027 (Expected)",
    icon: <GraduationCapIcon className="text-white w-5 h-5" />,
    color: "bg-primary-600",
  },
  {
    title: "Medirigiriya Central College",
    subtitle: "Secondary education in physical science stream.",
    institution: "",
    period: "2012 - 2021",
    icon: <UserIcon className="text-white w-5 h-5" />,
    color: "bg-primary-400",
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-800 min-h-screen text-gray-900 dark:text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Headline */}
        <div className="flex justify-center mb-16">
          <h1 className="text-5xl font-extrabold transition-transform duration-300 hover:scale-105 hover:text-primary-400 cursor-pointer">
            About Me
          </h1>
        </div>

        {/* Profile & Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Profile Card */}
          <div className="bg-gray-50 dark:bg-dark-700 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl hover:scale-[1.03] transition-colors duration-200">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400 shadow-lg mb-4">
              <img
                src="/WhatsApp_Image_2025-07-03_at_21.53.19.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">Shashindi Harischandra</h2>
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">Aspiring Data Scientist</p>
            <div className="flex flex-col items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
              <a
                href="mailto:shashindhieravishka@email.com"
                className="flex items-center hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <MailIcon className="w-5 h-5 mr-2" /> shashindhieravishka@email.com
              </a>
              <a
                href="tel:+94762352603"
                className="flex items-center hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <PhoneIcon className="w-5 h-5 mr-2" /> +94 762352603
              </a>
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" /> Colombo, Sri Lanka
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="w-6 h-6 text-gray-700 dark:text-white hover:scale-110 transition-colors hover:text-primary-500 dark:hover:text-primary-400" />
              </a>
              <a href="https://github.com/Shashindi/" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-6 h-6 text-gray-700 dark:text-white hover:scale-110 transition-colors hover:text-primary-500 dark:hover:text-primary-400" />
              </a>
            </div>
            <p className="text-center text-base text-gray-600 dark:text-gray-300">
              Passionate about transforming data into actionable insights and building innovative solutions.
            </p>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 dark:bg-dark-700 rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:scale-[1.03] transition-colors duration-200">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
              <BookOpenIcon className="mr-2 text-primary-500 dark:text-primary-400" />
              Professional Summary
            </h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <p>I am an aspiring data scientist with a strong foundation in
                  information technology and a specialization in data science.
                  My academic journey has equipped me with the knowledge and
                  skills to extract meaningful insights from complex datasets
                  and develop data-driven solutions.</p>
              <p>I am passionate about leveraging machine learning algorithms,
                  statistical analysis, and data visualization techniques to
                  solve real-world problems. My goal is to contribute to the
                  field of data science by creating innovative solutions that
                  drive decision-making and add value to organizations.</p>
              <p>I am continuously learning and expanding my skill set to stay
                  current with the latest technologies and methodologies in the
                  rapidly evolving field of data science.</p>
            </div>
          </div>
        </div>

        {/* Certifications & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Certifications */}
          <section className="transition hover:shadow-2xl hover:scale-[1.03]">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
              <AwardIcon className="mr-3 text-primary-500 dark:text-primary-400" />
              Certifications & Courses
            </h2>
            <div className="grid gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 dark:bg-dark-700 p-6 rounded-xl shadow-md flex items-start gap-4 hover:scale-[1.03] transition-colors duration-200"
                >
                  <div className="mt-1">{cert.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{cert.provider}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="relative transition hover:shadow-2xl hover:scale-[1.03]">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
              <GraduationCapIcon className="mr-3 text-primary-500 dark:text-primary-400" />
              Education
            </h2>
            <div className="space-y-16">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <span
                    className={`absolute left-1/2 -top-8 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 ${edu.color} rounded-full shadow-lg ring-4 ring-white dark:ring-dark-800 z-10`}
                  >
                    {edu.icon}
                  </span>
                  <div className="bg-gray-50 dark:bg-dark-700 p-8 pt-12 rounded-2xl shadow-lg text-center text-gray-600 dark:text-gray-300">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.title}</h3>
                    {edu.subtitle && (
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.subtitle}</p>
                    )}
                    {edu.institution && <p className="mb-1">{edu.institution}</p>}
                    <p>{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
         
        </footer>
      </div>
    </div>
  );
};

export default About;
