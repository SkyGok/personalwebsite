import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const ProjectDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.projects.projectNotFound}</h1>
          <Link to="/projects" className="text-primary-600 hover:text-primary-700">
            ← {t.projects.backToProjects}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.projects.backToProjects}
          </Link>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {project.description[language] || project.description}
            </p>

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {t.projects.viewCode}
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  {t.projects.liveDemo}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>

          {/* Project Image */}
          {project.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </motion.div>
          )}

          {/* YouTube Video */}
          {project.youtubeVideoId && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <YouTubeEmbed videoId={project.youtubeVideoId} title={project.title} />
            </motion.div>
          )}

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.projects.aboutProject}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'en' 
                  ? 'This project represents a significant milestone in my development journey. It showcases my ability to work with modern technologies and create solutions that are both functional and user-friendly.'
                  : 'Bu proje, geliştirme yolculuğumda önemli bir kilometre taşını temsil ediyor. Modern teknolojilerle çalışma ve hem işlevsel hem de kullanıcı dostu çözümler oluşturma yeteneğimi sergiliyor.'
                }
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">{t.projects.keyFeatures}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {language === 'en' ? (
                  <>
                    <li>Responsive design that works on all devices</li>
                    <li>Modern UI/UX with smooth animations</li>
                    <li>Optimized performance and loading times</li>
                    <li>Clean, maintainable code structure</li>
                  </>
                ) : (
                  <>
                    <li>Tüm cihazlarda çalışan duyarlı tasarım</li>
                    <li>Akıcı animasyonlarla modern UI/UX</li>
                    <li>Optimize edilmiş performans ve yükleme süreleri</li>
                    <li>Temiz, bakımı kolay kod yapısı</li>
                  </>
                )}
              </ul>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">{t.projects.challenges}</h3>
              <p className="text-gray-600 leading-relaxed">
                {language === 'en'
                  ? 'During the development of this project, I encountered various challenges that required creative problem-solving and research. The experience helped me grow as a developer and learn new techniques that I now apply to all my projects.'
                  : 'Bu projenin geliştirilmesi sırasında, yaratıcı problem çözme ve araştırma gerektiren çeşitli zorluklarla karşılaştım. Bu deneyim, bir geliştirici olarak büyümeme ve artık tüm projelerime uyguladığım yeni teknikler öğrenmeme yardımcı oldu.'
                }
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectDetail;

