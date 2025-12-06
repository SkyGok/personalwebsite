import { motion } from 'framer-motion';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import { timelineItems } from '../data/timeline';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden shadow-xl">
              <img
                src="/media/pictur-gokhan.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-600">
              {t.about.subtitle}
            </p>
          </motion.div>

        </div>
      </Section>

      {/* Timeline Section */}
      <Section
        title={t.about.experience}
        subtitle={t.about.experienceSubtitle}
        className="bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <Timeline items={timelineItems} />
        </div>
      </Section>

      {/* Skills & Interests */}
      <Section title={t.about.whatIDo}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.about.technicalSkills}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• ROS, SLAM, LiDAR</li>
              <li>• MATLAB, Simulink, Simscape</li>
              <li>• SolidWorks, ROBODK</li>
              <li>• Python, C/C++</li>
              <li>• Machine Learning Frameworks</li>
              <li>• Embedded Systems</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.about.softSkills}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Project Management</li>
              <li>• Leadership</li>
              <li>• Problem Solving</li>
              <li>• Communication</li>
              <li>• Patent Portfolio Analysis</li>
              <li>• Cross-functional Collaboration</li>
            </ul>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default About;

