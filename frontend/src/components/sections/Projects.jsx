import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const Projects = () => {
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

  const projects = [
    {
      title: "Weather Forecasting App",
      description:
        "A responsive weather forecasting web application that fetches real-time weather data using external APIs. Users can search for any city to view temperature, humidity, and weather conditions with a clean and user-friendly interface.",
      image:
        "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      github:
        "https://github.com/Saketraj234/Projects/tree/main/Weather%20Forecasting",
      live: "https://weather-forecast-650.netlify.app/",
      featured: false,
    },
    {
      title: "Student Toolkit",
      description:
        "A modern student utility platform built using HTML, CSS, and JavaScript that combines Attendance Tracker, CGPA Calculator, and PDF Studio tools into one responsive and user-friendly web application.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  tech: ["HTML", "CSS", "JavaScript"],
  github:
    "https://github.com/Saketraj234/Student-Toolkit",
  live:
    "https://mmu-student-tools.netlify.app/",
  featured: false,
},
{
  title: "AI Chatbot - Smart AI Conversation Platform",

  description:
    "A full-stack AI chatbot platform powered by Groq API, featuring intelligent real-time conversations, fast AI-generated responses, responsive modern UI, and seamless user interaction for an enhanced chat experience.",

  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Groq API"
  ],

  github:
    "https://github.com/Saketraj234/Ai-Chatbot",

  live:
    "https://ai-chatbot-snba.onrender.com/",

  featured: false,
},
    {
      title: "Advanced Scientific Calculator",
      description:
        "A modern scientific calculator web application with support for advanced mathematical operations such as trigonometric functions, square roots, and memory operations. It features multiple themes, a responsive UI, and smooth user interactions for an enhanced calculation experience.",
      image:
        "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=800&q=80",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Saketraj234/Projects/tree/main/Calculator",
      live: "https://simplecalculator620.netlify.app/",
      featured: false,
    },
    {
      title: "RailConnect – Train WiFi Add-On System",
      description:
        "A full-stack MERN application that simulates a railway ticket booking system with an integrated onboard WiFi add-on service. Users can search trains, book tickets, and optionally purchase internet access during their journey, enhancing travel connectivity and user experience.",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Tailwind CSS",
      ],
      github: "https://github.com/Saketraj234/Rail-Connect",
      live: "https://rail-connect-eight.vercel.app/",
      featured: true,
    },
    {
      title: "MMU Vault - Smart Student Resource Platform",
      description:
        "A MERN-based platform for MMU students to access notes, PYQs, assignments, and college updates. Includes an AI Mentor for personalized guidance, doubt solving, study support, and secure real-time communication.",

      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",

      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Socket.io",
        "Tailwind CSS",
      ],

      github: "https://github.com/Saketraj234/MMU-Study-Resources",

      live: "https://mmu-study-resources.vercel.app/",

      featured: true,
    },
    {
      title: "TeamMeet - Smart Video Conferencing Platform",
      description:
        "A MERN-based real-time video conferencing platform built with WebRTC and Socket.io, featuring HD video/audio calls, screen sharing, live chat, meeting recording, and a collaborative whiteboard where hosts can teach, guide, and explain concepts in real-time.",
      image:
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "WebRTC",
        "Socket.io",
        "Tailwind CSS",
      ],
      github:
        "https://github.com/Saketraj234/Video-Conferencing-Web-Application",
      live: "https://team-meet-liart.vercel.app/",
      featured: false,
    },
    {
      title: "Daily Kharcha Tracker (Group Expense & Split App)",
      description:
        "A MERN-based expense tracking application with group expense splitting features. Users can create groups for trips or outings, invite others via shareable links, add shared expenses, automatically split costs, and communicate through real-time chat within the group.",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Socket.io",
      ],
      github: "https://github.com/Saketraj234/Daily-Kharcha-Tracker",
      live: "https://daily-kharcha-tracker.vercel.app/",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="mesh-gradient opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-[3.5rem] font-black text-white mb-10 tracking-tighter">
              My{" "}
              <span className="blue-text-gradient animate-pulse">Projects</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={
                allowAmbientMotion
                  ? {
                      y: [0, -10, 0],
                      transition: {
                        duration: 4 + index,
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
            >
              <div className="relative bg-[#081a3a]/75 backdrop-blur-none md:backdrop-blur-2xl rounded-[2.4rem] overflow-hidden border border-white/5">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden p-6">
                  <div className="w-full h-full rounded-3xl overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-shadow duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {project.featured && (
                    <div className="absolute top-10 left-10 z-20">
                      <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2">
                        <FaStar className="text-yellow-400" /> Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 pt-0 text-center">
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#050b1a] border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all sm:min-w-[140px]"
                    >
                      <FaGithub size={18} /> GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#050b1a] border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all sm:min-w-[140px]"
                      >
                        <FaExternalLinkAlt size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
