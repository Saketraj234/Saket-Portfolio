import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJs, FaGithub, FaDatabase, FaCode, FaTerminal, FaPython, FaBrain, FaJava
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiGit, SiSpringboot, SiPostgresql, SiPostman } from 'react-icons/si';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Full Stack Development',
      skills: [
        { name: 'Frontend', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Backend', icon: <FaNodeJs className="text-green-500" /> },
      ],
    },
    {
      title: 'Backend Architecture',
      skills: [
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava className="text-orange-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'HTML/CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Express.js', icon: <SiExpress className="text-slate-400" /> },
        { name: 'REST APIs', icon: <FaCode className="text-blue-500" /> },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <SiGit className="text-orange-600" /> },
        { name: 'GitHub', icon: <FaGithub className="text-white" /> },
        { name: 'VS Code', icon: <FaTerminal className="text-blue-500" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-transparent relative overflow-hidden">
      <div className="mesh-gradient opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-[3.5rem] font-black text-white mb-10 tracking-tighter">
              My <span className="blue-text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          </motion.div>
        </div>

        <div className="space-y-24">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={
                  allowAmbientMotion
                    ? {
                        y: [0, -5, 0],
                        transition: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                    : undefined
                }
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <h3 className="text-xl sm:text-2xl font-black text-white text-center uppercase tracking-[0.5em] mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                  {category.title}
                </h3>
                <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              </motion.div>

              <div className="flex flex-wrap justify-center gap-10 sm:gap-14">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    animate={
                      allowAmbientMotion
                        ? {
                            y: [0, -10, 0],
                            transition: {
                              duration: 3.5 + (index % 3),
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: (index % 4) * 0.25,
                            },
                          }
                        : undefined
                    }
                    whileHover={{ 
                      y: -20, 
                      scale: 1.08,
                      rotate: [0, -2, 2, 0],
                      transition: { duration: 0.3 } 
                    }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="w-44 h-44 flex flex-col items-center justify-center gap-6 bg-[#081a3a]/50 backdrop-blur-none md:backdrop-blur-xl border border-white/5 rounded-[2.5rem] hover:border-blue-500/40 transition-all duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500" />
                    <div className="text-5xl group-hover:scale-125 transition-transform duration-500 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] relative z-10">
                      {skill.icon}
                    </div>
                    <h4 className="text-sm font-black text-slate-300 uppercase tracking-widest text-center px-4 relative z-10 group-hover:text-white transition-colors">
                      {skill.name}
                    </h4>
                    
                    {/* Subtle bottom glow on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
