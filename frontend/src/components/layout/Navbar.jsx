import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollYRef = useRef(0);
  const isMobileRef = useRef(false);
  const isOpenRef = useRef(false);
  const isVisibleRef = useRef(true);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', to: '/', type: 'scroll', scrollTo: 'home' },
    { name: 'Skills', to: '/', type: 'scroll', scrollTo: 'skills' },
    { name: 'Experience', to: '/experience', type: 'router' },
    { name: 'Projects', to: '/', type: 'scroll', scrollTo: 'projects' },
    { name: 'Achievements', to: '/', type: 'scroll', scrollTo: 'achievements' },
    { name: 'Contact', to: '/', type: 'scroll', scrollTo: 'contact' },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const apply = () => setIsMobile(mediaQuery.matches);
    apply();
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', apply);
      return () => mediaQuery.removeEventListener('change', apply);
    }
    mediaQuery.addListener(apply);
    return () => mediaQuery.removeListener(apply);
  }, []);

  useEffect(() => {
    isMobileRef.current = isMobile;
  }, [isMobile]);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  useEffect(() => {
    let rafId = null;
    let lastScrolledValue = null;

    const update = () => {
      rafId = null;
      const y = window.scrollY;
      const nextScrolled = y > 20;
      if (nextScrolled !== lastScrolledValue) {
        lastScrolledValue = nextScrolled;
        setIsScrolled(nextScrolled);
      }

      if (!isMobileRef.current) {
        lastScrollYRef.current = y;
        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          setIsVisible(true);
        }
        return;
      }

      if (isOpenRef.current) {
        lastScrollYRef.current = y;
        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          setIsVisible(true);
        }
        return;
      }

      const lastY = lastScrollYRef.current;
      const diff = y - lastY;
      
      if (Math.abs(diff) < 5 && y > 20) {
        return;
      }

      const isScrollingDown = diff > 0;
      const shouldHide = isScrollingDown && y > 100;
      const shouldShow = !isScrollingDown || y < 20;

      if (shouldHide && isVisibleRef.current) {
        isVisibleRef.current = false;
        setIsVisible(false);
      } else if (shouldShow && !isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      lastScrollYRef.current = y;
    };

    const onScroll = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (rafId != null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <motion.nav
      animate={{ 
        y: isVisible ? 0 : -100,
        backgroundColor: isScrolled ? 'rgba(6, 20, 50, 0.95)' : 'rgba(6, 20, 50, 0)',
        paddingTop: isScrolled ? '0.75rem' : '1rem',
        paddingBottom: isScrolled ? '0.75rem' : '1rem',
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut" 
      }}
      className="fixed top-0 left-0 w-full z-[100]"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <RouterLink to="/" className="cursor-pointer group">
            <h1 className="text-xl sm:text-2xl font-black tracking-tighter flex items-center">
              <span className="text-white">Saket</span>
              <span className="blue-text-gradient ml-1.5">Raj</span>
            </h1>
          </RouterLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks
              .filter((link) => {
                if (location.pathname === '/experience') {
                  return link.name === 'Home' || link.name === 'Experience';
                }
                return true;
              })
              .map((link) => {
                const isOnExperiencePage = location.pathname === '/experience';
                
                // Experience Page Links
                if (isOnExperiencePage) {
                  const isHome = link.name === 'Home';
                  
                  return (
                    <RouterLink
                      key={link.name}
                      to={isHome ? '/' : link.to}
                      className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] cursor-pointer transition-all relative group text-slate-400 hover:text-white"
                    >
                      {link.name}
                      <span className="absolute -bottom-3 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 w-0 group-hover:w-full" />
                    </RouterLink>
                  );
                }

                // Home Page Links - check if it's a router link (Experience) or scroll link
                if (link.type === 'router') {
                  return (
                    <RouterLink
                      key={link.name}
                      to={link.to}
                      className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] cursor-pointer transition-all relative group text-slate-400 hover:text-white"
                    >
                      {link.name}
                      <span className="absolute -bottom-3 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 w-0 group-hover:w-full" />
                    </RouterLink>
                  );
                }

                return (
                  <ScrollLink
                    key={link.name}
                    to={link.scrollTo}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] cursor-pointer transition-all relative group text-slate-400 hover:text-white"
                  >
                    {link.name}
                    <span className="absolute -bottom-3 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 w-0 group-hover:w-full" />
                  </ScrollLink>
                );
              })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/90 hover:text-white transition-colors z-[110]"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-gradient-to-b from-[#050b1a] via-[#07122d] to-[#050b1a] z-[105] flex flex-col items-center justify-center"
          >
            {/* Logo in Overlay */}
            <div className="absolute top-5 left-6">
              <h1 className="text-xl font-black tracking-tighter">
                <span className="text-white">Saket</span>
                <span className="blue-text-gradient ml-1.5">Raj</span>
              </h1>
            </div>

            <div className="flex flex-col items-center gap-12">
              {navLinks
                .filter((link) => {
                  if (location.pathname === '/experience') {
                    return link.name === 'Home' || link.name === 'Experience';
                  }
                  return true;
                })
                .map((link, index) => {
                  const isOnExperiencePage = location.pathname === '/experience';
                  
                  if (isOnExperiencePage) {
                    const isHome = link.name === 'Home';
                    
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <RouterLink
                          to={isHome ? '/' : link.to}
                          onClick={() => setIsOpen(false)}
                          className="text-2xl font-bold uppercase tracking-[0.2em] cursor-pointer transition-all text-white hover:text-blue-500"
                        >
                          {link.name}
                        </RouterLink>
                      </motion.div>
                    );
                  }

                  // Home page mobile links - check link.type
                  if (link.type === 'router') {
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <RouterLink
                          to={link.to}
                          onClick={() => setIsOpen(false)}
                          className="text-2xl font-bold uppercase tracking-[0.2em] cursor-pointer transition-all text-white hover:text-blue-500"
                        >
                          {link.name}
                        </RouterLink>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <ScrollLink
                        to={link.scrollTo}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-bold uppercase tracking-[0.2em] cursor-pointer transition-all text-white hover:text-blue-500"
                      >
                        {link.name}
                      </ScrollLink>
                    </motion.div>
                  );
                })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
