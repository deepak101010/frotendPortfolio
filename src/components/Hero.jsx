import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
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

  const MotionDiv = motion.div;

  // Interactive tilt state/refs
  const photoWrapperRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (event) => {
    const element = photoWrapperRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8; // left/right
    const rotateX = -((y - centerY) / centerY) * 8; // up/down
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  // Rotating typewriter roles
  const rolesRef = useRef([
    'Frontend Developer',
    'MERN Stack Developer',
    'Full Stack Developer',
    'Software Developer'
  ]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = rolesRef.current[roleIndex];
    const typingSpeed = isDeleting ? 40 : 70;
    const pauseAtEndMs = 1200;
    const pauseAtStartMs = 400;

    let timer;

    if (!isDeleting && displayedText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseAtEndMs);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % rolesRef.current.length);
      timer = setTimeout(() => {}, pauseAtStartMs);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Three.js Animated Background */}
      <ThreeScene opacity={0.18} />

      {/* Floating Elements */}
      <MotionDiv
        className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-lg"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <MotionDiv
        className="absolute bottom-20 right-20 w-16 h-16 border border-white/20 rounded-full"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              className="relative w-32 h-32 mx-auto"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Rotating multi-color gradient ring */}
              <motion.div
                className="absolute inset-0 rounded-full p-[2px]"
                style={{ background: "conic-gradient(from 0deg, #fde68a, #fca5a5, #93c5fd, #6ee7b7, #fde68a)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulsing neon aura */}
              <motion.div
                className="absolute -inset-1 rounded-full"
                style={{ filter: "blur(18px)", background: "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.35), rgba(255,255,255,0))" }}
                animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.03, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Orbiting sparkles */}
              <motion.div className="absolute inset-0" aria-hidden="true">
                <motion.span
                  className="absolute left-1/2 top-0 w-2 h-2 rounded-full bg-white/90 shadow"
                  style={{ boxShadow: "0 0 10px rgba(255,255,255,0.8)" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.span
                  className="absolute left-1/2 bottom-0 w-1.5 h-1.5 rounded-full bg-white/70"
                  style={{ boxShadow: "0 0 8px rgba(255,255,255,0.6)" }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Tilt-enabled photo container */}
              <motion.div
                ref={photoWrapperRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
                transition={{ type: "spring", stiffness: 140, damping: 12, mass: 0.6 }}
                className="relative w-full h-full rounded-full bg-gradient-to-br from-white to-gray-200 p-1 shadow-2xl"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  {personalInfo.photo ? (
                    <img
                      src={personalInfo.photo}
                      alt={`${personalInfo.name} profile photo`}
                      className="w-full h-full object-cover"
                      loading="eager"
                      style={{ transform: "translateZ(20px)" }}
                    />
                  ) : (
                    <span className="text-3xl font-bold text-white" style={{ transform: "translateZ(20px)" }}>
                      {personalInfo.name.charAt(0)}
                    </span>
                  )}

                  {/* Shine sweep on hover */}
                  <motion.div
                    className="pointer-events-none absolute top-0 left-0 h-full w-1/2 opacity-0"
                    style={{
                      background:
                        "linear-gradient(120deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.0) 100%)",
                      transform: "skewX(-20deg)"
                    }}
                    whileHover={{ x: ["-150%", "150%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Text */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-primary-100 mb-8"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="inline-flex items-center"
            >
              <span>{displayedText}</span>
              <motion.span
                aria-hidden="true"
                className="ml-1 w-[10px] h-6 bg-primary-100/80"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <div className="flex items-center space-x-2 text-primary-200">
              <MapPin size={18} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-200">
              <Mail size={18} />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-200">
              <Phone size={18} />
              <span>{personalInfo.phone}</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;