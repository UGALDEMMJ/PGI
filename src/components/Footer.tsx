import React from 'react';
import { Heart, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-20 border-t-4 border-[#CE1126]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Plan Gobiernos Insights</h3>
            <p className="text-blue-200 text-sm">
              Plataforma informativa sobre los partidos políticos y sus propuestas para las elecciones 2026 en Costa Rica.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">Inicio</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">Acerca de</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="flex gap-4 text-blue-200">
              <a href="mailto:ugaldemoralesmj@gmail.com" className="hover:text-white transition" title="Email">
                <Mail size={20} />
              </a>
              <a href="https://github.com/UGALDEMMJ" className="hover:text-white transition" title="GitHub" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mugaldem" className="hover:text-white transition" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.841-1.562 3.039 0 3.6 2.001 3.6 4.601v5.594z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-200 text-sm">
          <p className="flex items-center gap-2">
            Hecho con <Heart size={16} className="text-red-400" /> para Costa Rica
          </p>
          <p>
            Desarrollado por{' '}
            <a 
              href="https://www.linkedin.com/in/mugaldem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-yellow-300 transition"
            >
              UGALDEMMJ
            </a>
          </p>
          <p>&copy; {currentYear} Plan Gobiernos Insights. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
