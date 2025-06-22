'use client';

import React, { useEffect, useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { getProjects } from '../lib/projects';
import { Navigation } from '../components/Navigation';

export default function HomePage() {
  const { music, fashion } = getProjects();
  const allProjects = [...music, ...fashion]; // Music first, then fashion
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.scroll-container');
      if (!container) return;

      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const newIndex = Math.round(scrollTop / containerHeight);
      
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex <= allProjects.length) {
        setIsTransitioning(true);
        setActiveIndex(newIndex);
        
        // Shorter transition reset for smoother feel
        setTimeout(() => setIsTransitioning(false), 400);
      }
    };

    // Initialize the first container as active on mount
    const initializeActiveState = () => {
      const container = document.querySelector('.scroll-container');
      if (container) {
        const scrollTop = container.scrollTop;
        const containerHeight = container.clientHeight;
        const initialIndex = Math.round(scrollTop / containerHeight);
        setActiveIndex(initialIndex);
      }
    };

    // Set initial state after component mounts
    setTimeout(initializeActiveState, 100);

    const container = document.querySelector('.scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex, allProjects.length]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation Component */}
      <Navigation />

      {/* Enhanced Apple-inspired Ambient Background with Better Depth */}
      <div className="absolute inset-0">
        {/* Multi-layered gradient base for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/12 via-black to-gray-800/12"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/5 via-transparent to-blue-900/5"></div>
        
        {/* Refined floating orbs with better positioning and depth */}
        <div className="absolute top-[15%] left-[18%] w-96 h-96 sm:w-[600px] sm:h-[600px] bg-purple-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[15%] w-80 h-80 sm:w-[500px] sm:h-[500px] bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-[65%] left-[65%] w-64 h-64 sm:w-96 sm:h-96 bg-violet-500/2 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle mesh pattern for texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Enhanced vignette for focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-transparent to-black/25"></div>
      </div>

      {/* Main Content Container with enhanced scroll animations */}
      <div className="scroll-container relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth pt-20">
        {/* Projects Container with smooth transition animations */}
        <div className="w-full max-w-none px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          {allProjects.map((project, index) => {
            const isActive = index === activeIndex;
            const isPrevious = index === activeIndex - 1;
            const isNext = index === activeIndex + 1;
            
            return (
              <div
                key={project.name}
                className="h-screen snap-center flex items-start justify-center pt-24"
              >
                <div 
                  className={`
                    w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 
                    relative z-0 transform-gpu origin-center
                    hover:scale-105 hover:duration-200 hover:ease-out
                    ${isActive ? 
                      'scale-100 opacity-100' : 
                      isPrevious ? 
                        'scale-75 opacity-30' :
                        isNext ?
                          'scale-75 opacity-30' :
                          'scale-50 opacity-0'
                    }
                  `}
                  style={{
                    filter: isActive ? 'blur(0px)' : 'blur(1px)',
                    transition: isTransitioning 
                      ? 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.25s ease-out' 
                      : 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1), filter 0.3s ease-out'
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tab Section with enhanced transition */}
        <div className="h-[calc(100vh-80px)] snap-center flex items-start justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-4">
          <div 
            className={`
              w-full max-w-4xl relative z-0 h-full transform-gpu origin-center
              ${activeIndex === allProjects.length ? 
                'scale-100 opacity-100' : 
                'scale-90 opacity-60'
              }
            `}
            style={{
              filter: activeIndex === allProjects.length ? 'blur(0px)' : 'blur(0.5px)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1), filter 0.3s ease-out'
            }}
          >
            {/* Glass morphism tab container with controlled height */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-t-3xl p-8 sm:p-12 h-full overflow-y-auto">
              {/* Tab handle indicator */}
              <div className="flex justify-center mb-8">
                <div className="w-12 h-1 bg-white/30 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="space-y-8 text-center">
                {/* Company branding */}
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    NONPARALLEL
                  </h2>
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"></div>
                </div>
                
                {/* Project description */}
                <div className="space-y-6 max-w-2xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white/90">
                    archive.bryton.studio
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    An experiment to push the limitations of combining music, fashion, and software. 
                    This creative archive is always evolving, showcasing the intersection of digital 
                    artistry and human expression.
                  </p>
                </div>
                
                {/* Social Media Links */}
                <div className="space-y-6 pt-8">
                  <div className="flex items-center gap-4 justify-center">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
                    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                    <div className="w-16 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
                    <a href="https://facebook.com/brytonzoz" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      Facebook
                    </a>
                    <a href="https://instagram.com/brytonzoz" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      Instagram
                    </a>
                    <a href="https://tiktok.com/@brytonzoz" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      TikTok
                    </a>
                    <a href="https://x.com/zozbryton" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      X (Twitter)
                    </a>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="pt-12 pb-8">
                  <p className="text-gray-600 text-xs sm:text-sm font-light tracking-wide">
                    © 2025 Bryton Zoz • NONPARALLEL™
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 