import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { getAssetPath } from '../utils/paths';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden shadow-xl">
              <img
                src={getAssetPath('media/pictur-gokhan.jpg')}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {t.home.title} <span className="text-primary-600">Gökhan Dülger</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              {t.home.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {t.home.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                {t.home.viewWork}
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                {t.home.getInTouch}
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section
        title={t.home.featuredProjects}
        subtitle={t.home.featuredSubtitle}
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {project.image && (
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description[language] || project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  {t.home.learnMore} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 text-primary-600 hover:text-primary-700 font-medium"
          >
            {t.home.viewAllProjects} →
          </Link>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title={t.home.skills}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'ROS',
            'SLAM',
            'LiDAR',
            'MATLAB',
            'Simulink',
            'SolidWorks',
            'Python',
            'C/C++',
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-50 rounded-lg p-4 text-center font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;

