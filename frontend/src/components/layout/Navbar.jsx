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
    const media = window.matchMedia('(max-width: 767px)');
    const apply = () => setIsMobile(media.matches);
    apply();
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', apply);
      return () => media.removeEventListener('change', apply);
    }
    media.addListener(apply);
    return () => media.removeListener(apply);
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
      
      // Threshold to prevent jitter (5px)
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
        borderBottomColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
        paddingTop: isScrolled ? '1rem' : '1.25rem',
        paddingBottom: isScrolled ? '1rem' : '1.25rem',
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut" 
      }}
      className={`fixed top-0 left-0 w-full z-[100] border-b shadow-lg shadow-black/20 ${
         isScrolled ? 'md:backdrop-blur-xl' : ''
       }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 sm:px-14 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <RouterLink to="/" className="cursor-pointer group">
            <h1 className="text-xl sm:text-2xl font-black tracking-tighter flex items-center">
              <span className="text-white">Saket</span>
              <span className="blue-text-gradient ml-1.5">Raj</span>
            </h1>
          </RouterLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks
              .filter((link) => {
                // On Experience page, only show Home and Experience
                if (location.pathname === '/experience') {
                  return link.name === 'Home' || link.name === 'Experience';
                }
                // On Home page, show all links
                return true;
              })
              .map((link) => {
                // Dynamic type: Home is router link on Experience page, else scroll
                const isHomeLink = link.name === 'Home';
                const isOnExperiencePage = location.pathname === '/experience';
                
                const dynamicType = isHomeLink && isOnExperiencePage ? 'router' : link.type;
                const isRouterLinkActive = dynamicType === 'router' && 
                  ((link.name === 'Experience' && isOnExperiencePage));
                
                const LinkComponent = dynamicType === 'router' ? RouterLink : ScrollLink;
                
                const linkProps = dynamicType === 'router' 
                  ? { to: isHomeLink ? '/' : link.to }
                  : { 
                      to: link.scrollTo, 
                      smooth: true, 
                      duration: 500, 
                      offset: -70, 
                      spy: true, 
                      activeClass: 'active-nav' 
                    };

                return (
                  <LinkComponent
                    key={link.name}
                    {...linkProps}
                    className={`text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] cursor-pointer transition-all relative group ${
                      isRouterLinkActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-4 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] ${
                      isRouterLinkActive ? 'w-full' : 'w-0 group-hover:w-full group-[.active-nav]:w-full'
                    }`} />
                  </LinkComponent>
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
                  // On Experience page, only show Home and Experience
                  if (location.pathname === '/experience') {
                    return link.name === 'Home' || link.name === 'Experience';
                  }
                  // On Home page, show all links
                  return true;
                })
                .map((link, index) => {
                  // Dynamic type: Home is router link on Experience page, else scroll
                  const isHomeLink = link.name === 'Home';
                  const isOnExperiencePage = location.pathname === '/experience';
                  
                  const dynamicType = isHomeLink && isOnExperiencePage ? 'router' : link.type;
                  const isRouterLinkActive = dynamicType === 'router' && 
                    ((isHomeLink && isOnExperiencePage) || (link.name === 'Experience' && isOnExperiencePage));
                  
                  const LinkComponent = dynamicType === 'router' ? RouterLink : ScrollLink;
                  
                  const linkProps = dynamicType === 'router' 
                    ? { to: isHomeLink ? '/' : link.to }
                    : { to: link.scrollTo, smooth: true, duration: 500, offset: -80 };

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <LinkComponent
                        {...linkProps}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-bold uppercase tracking-[0.2em] cursor-pointer transition-all ${
                          isRouterLinkActive ? 'text-blue-500' : 'text-white hover:text-blue-500'
                        }`}
                      >
                        {link.name}
                      </LinkComponent>
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
