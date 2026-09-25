import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaCertificate,
  FaTrophy,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Achievements = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const allowAmbientMotion = !reduceMotion && !isMobile;

  const certificates = [
    {
      title: "Advanced Diploma in Computer Application",
      issuer: "Arcade Computer Academy",
      date: "Apr 2023",
      image: "/ADCA Course.jpg",
      description: "12-month intensive course completion with Grade A.",
      category: "Diploma",
    },
    {
      title: "National Level Tech Fest Volunteer",
      issuer: "Alpha Intern / MMEC Mullana",
      date: "2025",
      image: "/Alpha Volunteer.jpg",
      description:
        "Successfully contributed as a volunteer in National Level Tech Fest.",
      category: "Volunteer",
    },
    {
      title: "Full Stack Innovation Challenge",
      issuer: "GUVI / HCL",
      date: "Feb 2026",
      image: "/Guvi HCL Buildathon 2k26.jpeg",
      description:
        "Participation in nationwide software innovation challenge among 40,000+ participants.",
      category: "Hackathon",
    },
    {
      title: "Internal Smart India Hackathon",
      issuer: "MMEC Mullana / SIH",
      date: "Sep 2025",
      image: "/SIH 2k25 Hackathon Certficate.jpeg",
      description:
        "Appreciation for participating in Internal SIH 2025 at MMEC.",
      category: "Hackathon",
    },
    {
      title: "Code Rush Participation",
      issuer: "byteXL / MMU",
      date: "Mar 2026",
      image:
        "/MMU CodeRush Certificates of Participation_Saket Raj_11232953_B.Tech CSE _6th Semester.jpg",
      description:
        "Active participation in 'Code Rush' organized by byteXL at MMU.",
      category: "Coding",
    },
    {
      title: "Java (Basic) Certificate",
      issuer: "HackerRank",
      date: "2024",
      image: "/HackerRank Java Basic.png",
      description: "Verified proficiency in Java programming fundamentals.",
      category: "Certification",
    },
    {
      title: "IAENG Membership",
      issuer: "International Association of Engineers",
      date: "2024",
      image: "/IAENG_membership_525210_page.jpg",
      description:
        "Official membership of International Association of Engineers.",
      category: "Professional",
    },
    {
      title: "Infosys Certification",
      issuer: "Infosys Springboard",
      date: "2024",
      image: "/Infosys Certificate.jpg",
      description: "Completed professional development training from Infosys.",
      category: "Certification",
    },
    {
      title: "ET AI Hackathon 2.0",
      issuer: "The Economic Times",
      date: "Aug 2026",
      image: "/Adobe Hackathon Certificate.jpg",
      description: "Certificate of Participation in ET AI Hackathon 2.0.",
      category: "Hackathon",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-transparent relative overflow-hidden"
    >
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
              My{" "}
              <span className="blue-text-gradient animate-pulse">
                Achievements
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
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
                transition: { duration: 0.3 },
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-0.5 rounded-[2.5rem] bg-transparent hover:bg-gradient-to-tr from-blue-600/50 to-cyan-400/50 transition-all duration-500"
              onClick={() => setSelectedImg(cert)}
            >
              <div className="relative bg-[#081a3a]/75 backdrop-blur-none md:backdrop-blur-2xl rounded-[2.4rem] overflow-hidden border border-white/5 h-full flex flex-col cursor-pointer">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden p-6">
                  <div className="w-full h-full rounded-3xl overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-shadow duration-500">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.classList.add(
                          "flex",
                          "items-center",
                          "justify-center",
                          "bg-slate-800",
                        );
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    <FaCertificate className="hidden text-5xl text-blue-500/20" />
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  <div className="absolute top-10 right-10 z-20">
                    <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pt-0 text-center flex-1 flex flex-col">
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">
                    {cert.date}
                  </span>

                  <h3 className="text-xl font-black text-white mb-4 tracking-tight">
                    {cert.title}
                  </h3>

                  <p className="text-slate-500 text-xs font-bold mb-6 uppercase tracking-widest">
                    {cert.issuer}
                  </p>

                  <div className="mt-auto flex justify-center">
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-[#050b1a] border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                      <FaExternalLinkAlt size={14} /> View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10 bg-[#050b1a]/98 backdrop-blur-none md:backdrop-blur-2xl"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-8 right-8 text-white/50 hover:text-blue-500 text-4xl transition-colors z-[210]"
              onClick={() => setSelectedImg(null)}
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
                {/* Image Section */}
                <div className="lg:w-3/5 bg-black/40 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
                  {selectedImg.image ? (
                    <img
                      src={selectedImg.image}
                      alt={selectedImg.title}
                      loading="lazy"
                      decoding="async"
                      className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className={`${selectedImg.image ? "hidden" : "flex"} flex-col items-center justify-center py-32 opacity-10`}
                  >
                    <FaCertificate className="text-[15rem] text-blue-500" />
                  </div>
                </div>

                {/* Details Section */}
                <div className="lg:w-2/5 p-10 sm:p-16 flex flex-col justify-center bg-gradient-to-br from-[#081a3a] to-[#050b1a] relative">
                  <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none">
                    <FaCertificate className="text-[20rem] text-blue-500 rotate-12" />
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-8"
                    >
                      <span className="px-5 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl">
                        {selectedImg.category}
                      </span>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl font-black text-white mb-6 leading-tight tracking-tight"
                    >
                      {selectedImg.title}
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
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                          Authority
                        </p>
                        <p className="text-slate-200 text-xl font-bold">
                          {selectedImg.issuer}
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                          Conferred On
                        </p>
                        <p className="text-slate-300 font-medium text-lg">
                          {selectedImg.date}
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                          Verification
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed italic border-l-2 border-blue-500/30 pl-6 py-2">
                          "{selectedImg.description}"
                        </p>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="mt-12 pt-8 border-t border-white/5 flex items-center gap-5"
                    >
                      <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 shadow-inner">
                        <FaCertificate className="text-xl" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white">
                          Verified Digital Badge
                        </p>
                        <p className="text-[9px] font-medium text-slate-500 uppercase tracking-[0.2em]">
                          Authenticity Confirmed
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

export default Achievements;
