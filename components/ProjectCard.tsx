'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}

// Image mapping for projects
const getProjectImage = (projectName: string) => {
  switch (projectName) {
    case "Just A Reminder To Live Life":
      return "/og/just-a-reminder.png";
    case "The Archive (Music)":
      return "/og/archive-music.png";
    case "Loopless Collection (Episodes)":
      return "/og/Untitled 14.jpg";
    case "Scrapwrk Store":
      return "/og/scrapwrk-store.png";
    default:
      return null;
  }
};

// Enhanced color schemes with sophisticated depth and precedence
const getProjectColors = (projectName: string, type: string) => {
  if (type === "procedural-mixtape") {
    return {
      gradient: "from-purple-500/10 via-violet-500/8 to-fuchsia-500/10",
      hoverGradient: "group-hover:from-purple-500/25 group-hover:via-violet-500/20 group-hover:to-fuchsia-500/25",
      accent: "text-purple-300",
      badge: "bg-purple-500/12 border-purple-400/20 text-purple-200",
      glow: "group-hover:shadow-purple-500/15",
      shadowColor: "shadow-purple-500/10"
    };
  } else if (type === "multi-purpose-stream") {
    return {
      gradient: "from-blue-500/10 via-cyan-500/8 to-sky-500/10",
      hoverGradient: "group-hover:from-blue-500/25 group-hover:via-cyan-500/20 group-hover:to-sky-500/25",
      accent: "text-blue-300",
      badge: "bg-blue-500/12 border-blue-400/20 text-blue-200",
      glow: "group-hover:shadow-blue-500/15",
      shadowColor: "shadow-blue-500/10"
    };
  } else if (type === "video-series") {
    return {
      gradient: "from-orange-500/10 via-amber-500/8 to-yellow-500/10",
      hoverGradient: "group-hover:from-orange-500/25 group-hover:via-amber-500/20 group-hover:to-yellow-500/25",
      accent: "text-orange-300",
      badge: "bg-orange-500/12 border-orange-400/20 text-orange-200",
      glow: "group-hover:shadow-orange-500/15",
      shadowColor: "shadow-orange-500/10"
    };
  } else if (type === "ecommerce") {
    return {
      gradient: "from-emerald-500/10 via-green-500/8 to-teal-500/10",
      hoverGradient: "group-hover:from-emerald-500/25 group-hover:via-green-500/20 group-hover:to-teal-500/25",
      accent: "text-emerald-300",
      badge: "bg-emerald-500/12 border-emerald-400/20 text-emerald-200",
      glow: "group-hover:shadow-emerald-500/15",
      shadowColor: "shadow-emerald-500/10"
    };
  }
  return {
    gradient: "from-gray-500/10 via-slate-500/8 to-zinc-500/10",
    hoverGradient: "group-hover:from-gray-500/25 group-hover:via-slate-500/20 group-hover:to-zinc-500/25",
    accent: "text-gray-300",
    badge: "bg-gray-500/12 border-gray-400/20 text-gray-200",
    glow: "group-hover:shadow-gray-500/15",
    shadowColor: "shadow-gray-500/10"
  };
};

export function ProjectCard({ project, className = "", style }: ProjectCardProps) {
  const imageUrl = getProjectImage(project.name);
  const colors = getProjectColors(project.name, project.type);

  return (
    <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block">
      <div 
        className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ease-out hover:scale-[1.015] cursor-pointer transform-gpu origin-top ${className}`}
        style={style}
      >
        {/* Enhanced Multi-layered Glass Background for Depth */}
        <div className="absolute inset-0 bg-white/8 backdrop-blur-3xl border border-white/15 rounded-3xl"></div>
        <div className="absolute inset-[1px] bg-white/5 rounded-3xl"></div>
        
        {/* Project-specific Color Overlay with Enhanced Depth */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} ${colors.hoverGradient} transition-all duration-700 rounded-3xl`}></div>
        
        {/* Sophisticated Contrast Layer for Visual Precedence */}
        <div className="absolute inset-0 bg-black/8 group-hover:bg-black/4 transition-all duration-700 rounded-3xl"></div>
        
        {/* Enhanced Shadow System for Depth Cues */}
        <div className={`absolute inset-0 rounded-3xl shadow-2xl ${colors.glow} ${colors.shadowColor} transition-all duration-700`}></div>
        
        {/* Content Container with Enhanced Polish and Grid Alignment */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-7 lg:space-y-8">
          {/* Enhanced Project Image with Better Depth and Increased Height */}
          <div className="w-full h-60 sm:h-72 lg:h-80 bg-black/20 rounded-2xl border border-white/8 overflow-hidden group-hover:border-white/15 transition-all duration-700 relative">
            {imageUrl ? (
              <>
                <Image
                  src={imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Enhanced Image Overlay with Better Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40"></div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white/35 text-5xl sm:text-6xl group-hover:text-white/55 transition-colors duration-500">
                  {project.type === "procedural-mixtape" ? "🎵" :
                   project.type === "multi-purpose-stream" ? "🎧" :
                   project.type === "video-series" ? "📹" :
                   project.type === "ecommerce" ? "🛍️" : "✨"}
                </div>
              </div>
            )}
            

            
            {/* Enhanced Reflection Effect for Depth */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Subtle Corner Highlights for Polish */}
            <div className="absolute top-3 left-3 w-6 h-6 bg-white/8 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 bg-white/6 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Enhanced Project Information with Better Grid Alignment */}
          <div className="space-y-3 sm:space-y-4">
            {/* Title Section with Enhanced Precedence */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl leading-tight group-hover:text-white transition-colors duration-500 tracking-tight mb-2 break-words">
                {project.name}
              </h3>
              
              {/* Enhanced Description with Better Typography - Moved closer to title */}
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed group-hover:text-gray-100 transition-colors duration-500 font-light tracking-wide break-words">
                {project.description}
              </p>
            </div>

            {/* Enhanced Metadata Row with Horizontal Tags */}
            <div className="pt-4 sm:pt-5">
                             {/* Horizontal Tags Row */}
               <div className="flex items-center gap-3 mb-4 flex-wrap">
                 {/* Type Badge */}
                 <div className="px-4 py-2.5 bg-white/6 border border-white/12 rounded-2xl backdrop-blur-2xl shadow-lg shadow-black/20 transition-all duration-700 flex-shrink-0">
                   <span className="text-xs text-white/90 font-semibold capitalize tracking-wide whitespace-nowrap">
                     {project.type.replace('-', ' ')}
                   </span>
                 </div>
                 
                 {/* Highlight Badge */}
                 {project.highlight && (
                   <div className={`px-4 py-2.5 ${colors.badge} rounded-2xl backdrop-blur-2xl border shadow-lg transition-all duration-700 flex-shrink-0`}>
                     <span className="text-xs font-semibold capitalize tracking-wide whitespace-nowrap">
                       {project.highlight}
                     </span>
                   </div>
                 )}
               </div>

              {/* Enhanced Action Indicator */}
              <div className={`flex items-center justify-between gap-4 sm:gap-5 ${colors.accent} group-hover:text-white transition-colors duration-500`}>
                <span className="text-lg sm:text-xl font-bold tracking-wide">
                  {project.type === "procedural-mixtape" || project.type === "multi-purpose-stream" ? "Listen" :
                   project.type === "video-series" ? "Watch" :
                   project.type === "ecommerce" ? "Shop" : "Visit"}
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                  <span className="group-hover:translate-x-2 transition-transform duration-500 text-xl sm:text-2xl">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Multi-layered Shine Effect for Premium Polish */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/8 via-transparent to-transparent rounded-3xl"></div>
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/15 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/12 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
        </div>

        {/* Enhanced Border System for Better Depth */}
        <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 transition-all duration-700"></div>
        <div className="absolute inset-[2px] rounded-3xl border border-white/3 group-hover:border-white/8 transition-all duration-700"></div>
        
        {/* Subtle Inner Glow for Premium Feel */}
        <div className="absolute inset-[3px] rounded-3xl shadow-inner shadow-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </Link>
  );
} 