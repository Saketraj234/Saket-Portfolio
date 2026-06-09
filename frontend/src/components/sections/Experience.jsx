import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaBriefcase, FaTimes, FaExternalLinkAlt, FaCheckCircle, FaFileAlt, FaAward } from 'react-icons/fa';

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null); // 'offer' or 'certificate'
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Scroll to top when Experience page loads
    window.scrollTo(0, 0);
    
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  const allowAmbientMotion = !reduceMotion && !isMobile;

  const experiences = [
    {
      title: "Front End Web Development Intern",
      company: "Micro Information Technology Services",
      startDate: "May 2025",
      endDate: "June 2025",
      offerImage: "/Micro IIT Internship 2025.jpg",
      certificateImage: "/Micro IIT Internship 2025.jpg", // You can replace with actual certificate
      description: "1-month remote internship program in Front End Web Development. Learned job-level training and worked on real-life, company-level major projects.",
      status: "Completed",
      type: "Frontend"
    },
    {
      title: "Full Stack Development Intern",
      company: "SaiKet Systems",
      startDate: "May 2026",
      endDate: null,
      offerImage: "/Saiket Systems Offer.jpg",
      certificateImage: null,
      description: "Internship offer for Full Stack Development. Will work on diverse range of projects requiring expertise in various web technologies, programming languages, and design principles.",
      status: "Pursuing",
      type: "Full Stack"
    },
    {
      title: "Backend Development Intern",
      company: "CodeAlpha",
      startDate: "June 2026",
      endDate: null,
      offerImage: "/CodeAlpha Backend Offer.jpg",
      certificateImage: null,
      description: "Backend Development Internship at CodeAlpha from 1st June 2026 onwards. Will learn new skills with deeper understanding of concepts through hands-on application.",
      status: "Pursuing",
      type: "Backend"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-transparent relative overflow-hidden">
      <div className="mesh-gradient opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-[3.5rem] font-black text-white mb-10 tracking-tighter">
              My <span className="blue-text-gradient animate-pulse">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={
                allowAmbientMotion
                  ? {
                      y: [0, -10, 0],
                      transition: {
                        duration: 4 + (index % 3),
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
                  : undefined
              }
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-0.5 rounded-[2.5rem] bg-transparent hover:bg-gradient-to-tr from-blue-600/50 to-cyan-400/50 transition-all duration-500"
            >
              <div className="relative bg-[#081a3a]/75 backdrop-blur-none md:backdrop-blur-2xl rounded-[2.4rem] overflow-hidden border border-white/5 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden p-6">
                  <div className="w-full h-full rounded-3xl overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-shadow duration-500">
                    <img 
                      src={exp.offerImage} 
                      alt={exp.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-800');
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden flex-col items-center justify-center opacity-30">
                      <FaBriefcase className="text-6xl text-blue-500" />
                    </div>
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  <div className="absolute top-10 right-10 z-20 flex gap-2">
                    <span className={`px-3 py-1 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg ${
                      exp.status === 'Completed' ? 'bg-green-600' : 'bg-amber-600'
                    }`}>
                      {exp.status}
                    </span>
                    <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="p-8 pt-0 text-center flex flex-col">
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </span>
                  
                  <h3 className="text-xl font-black text-white mb-4 tracking-tight">
                    {exp.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs font-bold mb-6 uppercase tracking-widest">
                    {exp.company}
                  </p>

                  <div className="mt-auto flex justify-center gap-3 flex-wrap">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(exp);
                        setModalType('offer');
                      }}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 border border-transparent rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
                    >
                      <FaFileAlt size={14} /> View Offer
                    </button>
                    {exp.certificateImage && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedItem(exp);
                          setModalType('certificate');
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#050b1a] border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                      >
                        <FaAward size={14} /> View Certificate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && modalType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10 bg-[#050b1a]/98 backdrop-blur-none md:backdrop-blur-2xl"
            onClick={() => { setSelectedItem(null); setModalType(null); }}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-8 right-8 text-white/50 hover:text-blue-500 text-4xl transition-colors z-[210]"
              onClick={() => { setSelectedItem(null); setModalType(null); }}
            >
              <FaTimes />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full bg-[#081a3a] rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.2)] border border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-3/5 bg-black/40 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
                  {(() => {
                    const imgSrc = modalType === 'offer' ? selectedItem.offerImage : selectedItem.certificateImage;
                    return imgSrc ? (
                      <img 
                        src={imgSrc} 
                        alt={selectedItem.title} 
                        loading="lazy"
                        decoding="async"
                        className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null;
                  })()}
                  <div className="flex flex-col items-center justify-center opacity-30">
                    {modalType === 'offer' ? (
                      <FaFileAlt className="text-[15rem] text-blue-500" />
                    ) : (
                      <FaAward className="text-[15rem] text-blue-500" />
                    )}
                  </div>
                </div>

                <div className="lg:w-2/5 p-10 sm:p-16 flex flex-col justify-center bg-gradient-to-br from-[#081a3a] to-[#050b1a] relative">
                  <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none">
                    {modalType === 'offer' ? (
                      <FaFileAlt className="text-[20rem] text-blue-500 rotate-12" />
                    ) : (
                      <FaAward className="text-[20rem] text-blue-500 rotate-12" />
                    )}
                  </div>

                  <div className="relative z-10">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-8 flex gap-3"
                    >
                      <span className={`px-5 py-2 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl ${
                        selectedItem.status === 'Completed' ? 'bg-green-600' : 'bg-amber-600'
                      }`}>
                        {selectedItem.status}
                      </span>
                      <span className="px-5 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl">
                        {selectedItem.type}
                      </span>
                      <span className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl">
                        {modalType === 'offer' ? 'Offer Letter' : 'Certificate'}
                      </span>
                    </motion.div>
                    
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl font-black text-white mb-6 leading-tight tracking-tight"
                    >
                      {selectedItem.title}
                    </motion.h2>
                    
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="w-20 h-1.5 bg-blue-600 mb-10 rounded-full origin-left"
                    />
                    
                    <div className="space-y-8">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Company</p>
                        <p className="text-slate-200 text-xl font-bold">{selectedItem.company}</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Duration</p>
                        <p className="text-slate-300 font-medium text-lg">
                          {selectedItem.startDate} - {selectedItem.endDate || "Present"}
                        </p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Description</p>
                        <p className="text-slate-400 text-sm leading-relaxed italic border-l-2 border-blue-500/30 pl-6 py-2">
                          "{selectedItem.description}"
                        </p>
                      </motion.div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="mt-12 pt-8 border-t border-white/5 flex items-center gap-5"
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${
                        selectedItem.status === 'Completed' 
                          ? 'bg-green-600/10 text-green-500' 
                          : 'bg-amber-600/10 text-amber-500'
                      }`}>
                        {selectedItem.status === 'Completed' ? (
                          <FaCheckCircle className="text-xl" />
                        ) : (
                          <FaBriefcase className="text-xl" />
                        )}
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white">
                          {selectedItem.status === 'Completed' ? 'Successfully Completed' : 'Currently Pursuing'}
                        </p>
                        <p className="text-[9px] font-medium text-slate-500 uppercase tracking-[0.2em]">
                          {selectedItem.status === 'Completed' ? 'Internship Finished' : 'In Progress'}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
