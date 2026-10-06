import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const About = () => {
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

  const education = [
    {
      year: "2018",
      title: "10th Standard",
      institution: "Bihar Board",
      result: "61.4%",
      icon: "📚",
      color: "from-blue-500 to-cyan-400"
    },
    {
      year: "2020",
      title: "12th Standard",
      institution: "Bihar Board",
      result: "70%",
      icon: "🎓",
      color: "from-cyan-400 to-blue-600"
    },
    {
      year: "2023 - Present",
      title: "Graduation (B.Tech CSE)",
      institution: "MMDU",
      result: "Pursuing",
      icon: "💻",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  const stats = [
    { label: 'Projects', value: '5+' },
    { label: 'DSA Problems', value: '250+' },
    { label: 'Technologies', value: '12+' },
  ];

  const tags = ['DSA', 'OOPS', 'DBMS', 'MongoDB', 'OS', 'System Design'];

  const quickInfo = [
    { label: 'Name', value: 'Saket Raj' },
    { label: 'Location', value: 'India' },
    { label: 'Role', value: 'Full Stack Developer & MERN Expert' },
    { label: 'Education', value: 'B.Tech (4th Year)' },
    { label: 'Focus', value: 'Scalable Apps | DSA | Web Architecture' },
  ];

  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden">
      <div className="mesh-gradient opacity-20" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Profile Image - Centered on top with Floating Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={
            allowAmbientMotion
              ? {
                  y: [0, -15, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
              : undefined
          }
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative p-1.5 rounded-[3.5rem] bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-500 shadow-[0_0_50px_rgba(59,130,246,0.3)] group cursor-pointer">
            <div className="bg-[#050b1a] rounded-[3.2rem] p-1.5 overflow-hidden">
              <img 
                src="/profile.png" 
                alt="Saket Raj" 
                loading="lazy"
                decoding="async"
                className="w-full max-w-[400px] h-auto object-cover rounded-[3rem] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-12">
          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-5xl font-black text-white mb-4 tracking-tighter">
              About <span className="blue-text-gradient animate-pulse">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            
            <motion.div 
              animate={
                allowAmbientMotion
                  ? {
                      y: [0, -5, 0],
                      transition: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
                  : undefined
              }
              className="space-y-6 text-slate-300 text-lg leading-relaxed font-medium"
            >
              <p>
                I am a driven 4th-year Engineering student with a deep-rooted passion for architecting <span className="text-blue-400 font-bold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">Robust Backend Infrastructures</span> and developing high-performance <span className="text-blue-400 font-bold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">Full-Stack Digital Solutions</span>.
              </p>
              <p>
                My expertise lies in bridging complex system requirements with elegant code, specializing in <span className="text-white font-bold underline decoration-blue-500/50 decoration-2 underline-offset-4">Spring Boot, Node.js, and PostgreSQL</span>. With a strong foundation in Data Structures and Algorithms, I am committed to engineering scalable applications that deliver exceptional user experiences.
              </p>
              <p className="text-slate-400 border-l-2 border-blue-500/30 pl-6 italic">
                I focus on writing clean, optimized and production-ready code while continuously evolving with emerging technologies to build the future of the web.
              </p>
            </motion.div>
          </motion.div>

          {/* Stats Bar - Horizontal with Floating Effect */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 py-8 border-y border-white/5 bg-white/2 backdrop-blur-none md:backdrop-blur-sm rounded-2xl px-2 sm:px-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={
                  allowAmbientMotion
                    ? {
                        y: [0, -5, 0],
                        transition: {
                          duration: 3 + index,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                    : undefined
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <h3 className="text-4xl md:text-5xl font-black text-blue-500 mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">{stat.value}</h3>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Tags - Pills with subtle floating */}
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag, i) => (
              <motion.span 
                key={tag} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={
                  allowAmbientMotion
                    ? {
                        y: [0, -3, 0],
                        transition: {
                          duration: 2 + (i % 3),
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                    : undefined
                }
                transition={{ delay: i * 0.05 }}
                className="px-6 py-2.5 bg-blue-500/5 border border-blue-500/20 rounded-full text-blue-400 text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Quick Info Box - Enhanced with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={
              allowAmbientMotion
                ? {
                    y: [0, -10, 0],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
                : undefined
            }
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#081a3a]/60 backdrop-blur-none md:backdrop-blur-2xl border border-white/5 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-all" />
            
            <h3 className="text-3xl font-black text-blue-500 mb-10 tracking-tight flex items-center gap-4">
              <span className="w-8 h-1 bg-blue-500 rounded-full" />
              Quick Info
            </h3>
            
            <div className="space-y-8">
              {quickInfo.map((info, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 group/item">
                  <span className="text-slate-500 text-sm font-black uppercase tracking-[0.2em] min-w-[120px] group-hover/item:text-blue-500 transition-colors">
                    {info.label}:
                  </span>
                  <span className="text-slate-200 text-lg font-bold group-hover/item:translate-x-2 transition-transform duration-300">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Compact Animated Vertical Education Timeline */}
          <div className="mt-20 relative">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-2xl font-black text-white mb-12 tracking-tight flex items-center gap-4 justify-center"
            >
              <span className="w-6 h-1 bg-blue-500 rounded-full" />
              Education Journey
              <span className="w-6 h-1 bg-blue-500 rounded-full" />
            </motion.h3>

            <div className="relative w-full max-w-2xl mx-auto">
              {/* Central Vertical Line with Glow */}
              <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-900/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-full bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-600 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                />
              </div>

              {/* Timeline Items */}
              <div className="space-y-10 md:space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Node/Circle with Pulsing Glow */}
                    <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 z-20 -translate-x-1/2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] border-2 border-[#050b1a]`}>
                          <span className="text-sm">{edu.icon}</span>
                        </div>
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping -z-10" />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                      className={`relative ml-10 md:ml-0 md:w-[44%] ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}
                    >
                      <div className="bg-[#081a3a]/50 backdrop-blur-sm md:backdrop-blur-xl p-6 rounded-[2rem] border border-white/5 shadow-2xl group hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
                        <div className={`text-blue-400 text-[11px] font-black uppercase tracking-[0.2em] mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} flex items-center gap-3`}>
                          {index % 2 === 0 ? <><span className="hidden md:block w-4 h-[1px] bg-blue-500/30" /> {edu.year}</> : <>{edu.year} <span className="hidden md:block w-4 h-[1px] bg-blue-500/30" /></>}
                        </div>

                        <h4 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                          {edu.title}
                        </h4>

                        <p className="text-slate-500 text-[12px] font-bold uppercase tracking-wider mb-4">
                          {edu.institution}
                        </p>

                        <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="px-4 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest shadow-lg">
                            {edu.result}
                          </span>
                        </div>
                      </div>

                      {/* Connector Line (Desktop Only) */}
                      <div className={`hidden md:block absolute top-4.5 w-8 h-[1px] bg-blue-500/30 ${index % 2 === 0 ? '-right-8' : '-left-8'}`} />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
