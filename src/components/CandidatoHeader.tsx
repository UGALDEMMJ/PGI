import React from 'react';
import { motion } from 'motion/react';
import { User } from 'lucide-react';

interface CandidatoHeaderProps {
  nombre: string;
  imagen?: string;
  partido: string;
}

const CandidatoHeader: React.FC<CandidatoHeaderProps> = ({ nombre, imagen, partido }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-xl p-8 mb-8 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-6 flex-wrap md:flex-nowrap">
        {imagen && (
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={imagen}
              alt={nombre}
              className="w-32 h-40 object-cover rounded-lg shadow-lg border-4 border-white"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
        )}
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <User size={24} className="text-yellow-300" />
            <p className="text-blue-100 text-sm font-semibold uppercase">Candidato Presidencial</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {nombre}
          </h2>
          <p className="text-blue-100 text-lg">
            Candidato por <span className="font-bold text-yellow-300">{partido}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CandidatoHeader;
