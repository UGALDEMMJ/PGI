import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PartidoCardProps {
  nombre: string;
  siglas: string;
  bandera?: string;
  onClick: () => void;
}

const PartidoCard: React.FC<PartidoCardProps> = ({ nombre, siglas, bandera, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden p-6 text-left border-2 border-[#CE1126] hover:border-blue-400 w-full min-h-[320px] flex flex-col"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300" />
      
      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex flex-col">
          {/* Bandera */}
          <div className="mb-4 flex justify-center h-16">
            {bandera && (
              <img
                src={bandera}
                alt={`Bandera ${siglas}`}
                className="h-16 w-auto max-w-full object-contain rounded-lg shadow-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
          </div>
          
          <div>
            <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-900 transition h-[3.5rem] flex items-center leading-tight">
              {nombre}
            </h3>
            <p className="text-sm font-semibold text-blue-900 mt-2 bg-blue-100 px-3 py-1 rounded-full w-fit">
              {siglas}
            </p>
          </div>
        </div>

        {/* Botón */}
        <div className="flex items-center gap-2 text-blue-900 font-semibold mt-4 group-hover:gap-3 transition-all">
          Ver perfil
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>

      {/* Línea de acento */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-900 to-blue-600 w-0 group-hover:w-full transition-all duration-300" />
    </button>
  );
};

export default PartidoCard;
