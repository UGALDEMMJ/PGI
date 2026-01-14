import React from 'react';
import { Link } from 'react-router';
import { Landmark } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg border-b-4 border-[#CE1126]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <Landmark size={32} className="text-blue-300" />
          <div>
            <h1 className="text-2xl font-bold">Plan Gobiernos Insights</h1>
            <p className="text-xs text-blue-200">Elecciones 2026 - Costa Rica</p>
          </div>
        </Link>
        <nav className="flex gap-8">
          <Link
            to="/"
            className="hover:text-blue-200 transition font-medium flex items-center gap-2"
          >
            Partidos
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-200 transition font-medium flex items-center gap-2"
          >
            Acerca de
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
