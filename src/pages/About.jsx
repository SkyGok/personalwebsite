import { motion } from 'framer-motion';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import { timelineItems } from '../data/timeline';

const About = () => {
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              Frontend Engineer & UI/UX Designer
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                My Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a passionate frontend engineer with a love for creating beautiful,
                functional web experiences. With years of experience in modern web technologies,
                I specialize in building responsive, performant applications that users love.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                My journey in web development started with a curiosity about how websites work,
                and it has evolved into a career focused on crafting exceptional user experiences.
                I believe in writing clean, maintainable code and staying current with the latest
                technologies and best practices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to
                open-source projects, or sharing knowledge with the developer community. I'm always
                excited to take on new challenges and collaborate on innovative projects.
              </p>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 mb-12"
          >
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section
        title="Experience & Education"
        subtitle="A timeline of my professional journey"
        className="bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <Timeline items={timelineItems} />
        </div>
      </Section>

      {/* Skills & Interests */}
      <Section title="What I Do">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Skills</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Frontend Development (React, Vue, Angular)</li>
              <li>• UI/UX Design & Prototyping</li>
              <li>• Responsive Web Design</li>
              <li>• Performance Optimization</li>
              <li>• Version Control (Git)</li>
              <li>• Testing & Quality Assurance</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Interests</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Open Source Contributions</li>
              <li>• Web Performance</li>
              <li>• Design Systems</li>
              <li>• Accessibility</li>
              <li>• Developer Education</li>
              <li>• Emerging Technologies</li>
            </ul>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default About;

