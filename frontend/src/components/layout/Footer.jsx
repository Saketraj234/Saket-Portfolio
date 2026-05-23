import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Saketraj234",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/saket-raj62/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitterSquare />,
      href: "https://x.com/saketraj235",
      label: "Twitter",
    },
  ];

  return (
    <footer className="bg-transparent pt-20 pb-12 relative overflow-hidden">
      <div className="mesh-gradient opacity-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl font-black tracking-tighter">
            <span className="text-white">Saket</span>
            <span className="blue-text-gradient ml-2">Raj</span>
          </h2>
        </motion.div>

        {/* Short Bio */}
        <p className="text-slate-400 max-w-md leading-relaxed font-medium mb-10">
          Backend Architect & Full Stack Developer focused on building scalable,
          high-performance and real-world impactful applications.
        </p>

        {/* Decorative Divider */}
        <div className="w-40 h-1.5 bg-blue-600 rounded-full mb-12 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

        {/* Social Icons - Circle Style */}
        <div className="flex items-center justify-center gap-6 mb-16">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 flex items-center justify-center bg-[#081a3a] border border-white/10 text-slate-300 rounded-full hover:text-blue-500 hover:border-blue-500 transition-all text-2xl shadow-xl"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/20 mb-16"
        >
          <FaArrowUp />
        </motion.button>

        {/* Copyright */}
        <div className="space-y-4">
          <p className="text-slate-500 text-sm font-bold flex items-center justify-center gap-2">
            Handcrafted by{" "}
            <span className="text-white font-black tracking-tight">
              Saket <span className="blue-text-gradient">Raj</span>
            </span>{" "}
            <span className="text-blue-500 animate-pulse text-lg">✨</span>
          </p>
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 Saket Raj — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
