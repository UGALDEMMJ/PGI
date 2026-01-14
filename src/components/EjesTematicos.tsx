import React from 'react';
import { motion } from 'motion/react';
import { Layers } from 'lucide-react';

interface EjeTematico {
  tema: string;
  resumen: string;
}

interface EjesTematicosProps {
  ejes: EjeTematico[];
}

const EjesTematicos: React.FC<EjesTematicosProps> = ({ ejes }) => {
  const temas = ejes.map((eje) => ({
    key: eje.tema,
    label: eje.tema.charAt(0).toUpperCase() + eje.tema.slice(1),
    descripcion: eje.resumen
  }));

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <Layers size={28} className="text-[#CE1126]" />
        <h2 className="text-3xl font-bold text-blue-900">Ejes Temáticos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {temas.map((tema, index) => (
          <motion.div
            key={tema.key}
            className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md p-6 border-l-4 border-[#CE1126] hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-3 capitalize">
              {tema.label}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {tema.descripcion}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EjesTematicos;
