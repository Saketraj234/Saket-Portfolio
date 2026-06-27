import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let text = '';
      if (hour < 5) text = 'Good Night 🌙';
      else if (hour < 12) text = 'Good Morning ☀️';
      else if (hour < 17) text = 'Good Afternoon ☀️';
      else if (hour < 21) text = 'Good Evening 🌆';
      else text = 'Good Night 🌙';
      setGreeting(text);
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  const allowAmbientMotion = !reduceMotion && !isMobile;

  const techTags = [
    { name: 'React', icon: <FaCode /> },
    { name: 'Node.js', icon: <FaCode /> },
    { name: 'JavaScript', icon: <FaCode /> },
    { name: 'Spring Boot', icon: <FaCode /> },
    { name: 'MongoDB', icon: <FaCode /> },
    { name: 'PostgreSQL', icon: <FaCode /> },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-transparent pt-32 pb-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="mesh-gradient" />
      
      <div className="max-w-7xl mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center"
          >
            {/* Greeting */}
            <p className="text-slate-400 text-xl font-medium mb-4">{greeting}</p>
            
            {/* Availability Badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                Open to Internships
              </span>
            </div>

            <h1 className="text-4xl sm:text-7xl font-black text-white mb-6 tracking-tight">
              Hi, I'm <span className="blue-text-gradient">Saket Raj</span>
            </h1>
            
            <div className="text-3xl sm:text-5xl font-black text-blue-500 h-16 mb-8">
              <Typewriter
                words={['Problem Solver', 'MERN Expertise', 'Full Stack']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </div>

            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed font-medium">
              Engineering high-performance <span className="text-blue-400 font-bold">Scalable Backend Systems</span> and intuitive <span className="text-blue-400 font-bold">Full-Stack Experiences</span> with precision and modern architectural patterns.
            </p>

            {/* Tech Tags - Pill Style with Floating Effect */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl">
              {techTags.map((tag, index) => (
                <motion.div 
                  key={index} 
                  animate={
                    allowAmbientMotion
                      ? {
                          y: [0, -5, 0],
                          transition: {
                            duration: 3 + (index % 3),
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }
                      : undefined
                  }
                  className="flex items-center gap-2 px-5 py-2 bg-[#0a1a3a]/70 border border-white/5 rounded-xl text-slate-200 text-xs font-bold shadow-xl hover:border-blue-500/30 transition-all"
                >
                  <span className="text-blue-500"><FaCode /></span>
                  <span className="tracking-widest">{tag.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 w-full">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
              >
                View Projects
              </Link>
              <a
                href="/Saket Resume 1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 border-2 border-slate-700 text-white font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black hover:border-white transition-all"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons - Circle Style */}
            <div className="flex items-center gap-6">
              {[
                { icon: <FaGithub />, href: "https://github.com/Saketraj234" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/saket-raj62/" },
                { icon: <FaEnvelope />, href: "mailto:saketbarnwal690@gmail.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#081a3a] border border-white/10 text-slate-300 rounded-full hover:text-blue-500 hover:border-blue-500 transition-all text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
