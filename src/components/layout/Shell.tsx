import React from 'react';

export interface ShellProps {
  children: React.ReactNode;
}

export const Shell: React.FC<ShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 flex flex-col font-sans">
      <header className="border-b border-[#22222a] bg-[#101015]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center font-bold text-black text-sm shadow-lg shadow-amber-500/20">
              WR
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">AuthVault JWT Authentication Service</span>
          </div>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <a href="#overview" className="hover:text-amber-400 transition-colors">Overview</a>
            <a href="#telemetry" className="hover:text-amber-400 transition-colors">Telemetry</a>
            <a href="#docs" className="hover:text-amber-400 transition-colors">Documentation</a>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              2019 Release
            </span>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {children}
      </main>

      <footer className="border-t border-[#1e1e24] bg-[#0c0c10] py-6 text-center text-xs text-slate-500">
        <p>&copy; 2019 AuthVault JWT Authentication Service • Built by Wajid Raza • Production Architecture</p>
      </footer>
    </div>
  );
};
