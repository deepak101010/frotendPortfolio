import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="about" className="section-padding bg-white">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know me better through my journey, education, and passion for technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Personal Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hello! I'm {personalInfo.name.split(' ')[0]}
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate Software Developer based in {personalInfo.location}. 
                I love creating digital experiences that combine beautiful design with 
                powerful functionality.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My journey in web development started with curiosity about how websites work, 
                and has evolved into a deep passion for creating user-centric applications. 
                I enjoy working with modern technologies and continuously learning new skills 
                to stay current with industry trends.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">Location</h4>
                  <p className="text-primary-700">{personalInfo.location}</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">Email</h4>
                  <p className="text-primary-700">{personalInfo.email}</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">Phone</h4>
                  <p className="text-primary-700">{personalInfo.phone}</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">Availability</h4>
                  <p className="text-primary-700">Open to opportunities</p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 rounded-2xl text-white">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-xl mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                        <p className="text-primary-100 mb-2">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-primary-100 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{edu.duration}</span>
                        </div>
                        <div className="flex items-center text-yellow-300">
                          <Award className="w-4 h-4 mr-1" />
                          <span className="text-sm font-semibold">CGPA: {edu.cgpa}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-primary-100 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}

                {/* Achievement Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">3+</div>
                    <div className="text-sm text-primary-100">Years Study</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">8.51</div>
                    <div className="text-sm text-primary-100">CGPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">2023</div>
                    <div className="text-sm text-primary-100">Graduate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* What I Do */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What I Do
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Frontend Development</h4>
                <p className="text-gray-600">
                  Creating responsive and interactive user interfaces with React, Vue, and modern CSS frameworks.
                </p>
              </motion.div>

              <motion.div
                className="text-center p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Backend Development</h4>
                <p className="text-gray-600">
                  Building robust server-side applications with Node.js, Express, and database integration.
                </p>
              </motion.div>

              <motion.div
                className="text-center p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Full Stack Solutions</h4>
                <p className="text-gray-600">
                  Developing complete web applications from database design to user interface implementation.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;