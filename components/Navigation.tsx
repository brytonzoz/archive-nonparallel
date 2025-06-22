'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[100]">
      <div className="flex items-center gap-1 px-2 py-2 bg-black/40 backdrop-blur-3xl border border-white/15 rounded-full shadow-2xl shadow-black/50">
        {/* Music Toggle */}
        <Link 
          href="/music" 
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ${
            pathname === '/music' 
              ? 'bg-white/15 text-white border border-white/20' 
              : 'text-gray-400 hover:text-white hover:bg-white/8'
          }`}
        >
          Music
        </Link>

        {/* Fashion Toggle */}
        <Link 
          href="/fashion" 
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ${
            pathname === '/fashion' 
              ? 'bg-white/15 text-white border border-white/20' 
              : 'text-gray-400 hover:text-white hover:bg-white/8'
          }`}
        >
          Fashion
        </Link>
      </div>
    </nav>
  );
} 