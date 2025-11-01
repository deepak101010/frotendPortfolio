import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench } from 'lucide-react';
import { skills } from '../data/portfolioData';

const SkillCard = ({ skill, index, category }) => {
  const iconMap = {
    SiJavascript: '🟨',
    SiHtml5: '🟧',
    SiCss3: '🔵',
    SiPhp: '🟣',
    SiJava: '☕',
    SiReact: '⚛️',
    SiNextdotjs: '▲',
    SiVuedotjs: '💚',
    SiNuxtdotjs: '💚',
    SiLaravel: '🔴',
    SiNodedotjs: '💚',
    SiGit: '📋',
    SiGithub: '🐙',
    SiPostman: '🧡',
    SiBootstrap: '🟣',
    SiSass: '🌸'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{iconMap[skill.icon] || '💻'}</span>
          <span className="font-semibold text-gray-800">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <motion.div
          className={`h-2 rounded-full ${
            category === 'languages' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
            category === 'frameworks' ? 'bg-gradient-to-r from-green-500 to-green-600' :
            'bg-gradient-to-r from-purple-500 to-purple-600'
          }`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-16">
            {/* Languages */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Programming Languages</h3>
                  <p className="text-gray-600">Core languages I work with</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.languages.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={index} 
                    category="languages"
                  />
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Frameworks & Libraries</h3>
                  <p className="text-gray-600">Modern frameworks for efficient development</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.frameworks.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={index} 
                    category="frameworks"
                  />
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Tools & Technologies</h3>
                  <p className="text-gray-600">Development tools and workflow</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.tools.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={index} 
                    category="tools"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                I'm always exploring new technologies and improving my skills to stay current 
                with industry trends and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  GraphQL
                </span>
                <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  Docker
                </span>
                <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  AWS
                </span>
                <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  Node JS
                </span>
                <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  MongoDB
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;