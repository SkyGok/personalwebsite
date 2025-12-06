import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [filter, setFilter] = useState('All');

  // Extract unique tech stacks for filtering
  const allTechs = ['All', ...new Set(projects.flatMap(p => p.techStack))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.techStack.includes(filter));

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.projects.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === tech
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">{t.projects.noProjects}</p>
          </div>
        )}
      </Section>
    </div>
  );
};

export default Projects;

