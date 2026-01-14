import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

interface TemaAusente {
  tema: string;
  evidencia: string;
}

interface TemasAusentesProps {
  temas: TemaAusente[];
}

const TemasAusentes: React.FC<TemasAusentesProps> = ({ temas }) => {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <AlertCircle size={28} className="text-[#CE1126]" />
        <h2 className="text-3xl font-bold text-blue-900">Temas Ausentes o Débiles</h2>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-8">
        <p className="text-gray-700">
          Se identifican los siguientes temas que no están bien desarrollados o completamente ausentes en el programa:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {temas.map((tema, index) => (
          <motion.div
            key={tema.tema}
            className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-400 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-lg font-bold text-blue-900 mb-3 capitalize">
              {tema.tema}
            </h3>
            <p className="text-gray-700">
              {tema.evidencia}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TemasAusentes;
