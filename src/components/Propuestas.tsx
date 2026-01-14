import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle, Target } from 'lucide-react';

interface Propuesta {
  propuesta: string;
  cita_textual: string;
}

interface PropuestasData {
  concretas?: Propuesta[];
  generales_o_discursivas?: Propuesta[];
}

interface PropuestasProps {
  propuestas?: PropuestasData;
}

const Propuestas: React.FC<PropuestasProps> = ({ propuestas }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'concretas' | 'generales'>('concretas');

  const concretas = propuestas?.concretas || [];
  const generales = propuestas?.generales_o_discursivas || [];
  const currentPropuestas = activeTab === 'concretas' ? concretas : generales;

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <Target size={28} className="text-[#CE1126]" />
        <h2 className="text-3xl font-bold text-blue-900">Propuestas</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b-2 border-[#CE1126]">
        <button
          onClick={() => {
            setActiveTab('concretas');
            setExpandedIndex(null);
          }}
          className={`px-6 py-3 font-semibold border-b-4 transition-all ${
            activeTab === 'concretas'
              ? 'border-[#CE1126] text-blue-900'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Concretas ({concretas.length})
        </button>
        <button
          onClick={() => {
            setActiveTab('generales');
            setExpandedIndex(null);
          }}
          className={`px-6 py-3 font-semibold border-b-4 transition-all ${
            activeTab === 'generales'
              ? 'border-[#CE1126] text-blue-900'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Generales ({generales.length})
        </button>
      </div>

      {/* Propuestas List */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {currentPropuestas.map((propuesta, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              className="bg-white rounded-xl shadow-md border-2 border-[#CE1126] overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-grow text-left">
                  <CheckCircle size={20} className="text-[#CE1126] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900 text-lg">{propuesta.propuesta}</h3>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-blue-900 transition-transform flex-shrink-0 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    className="px-6 py-4 bg-blue-50 border-t-2 border-[#CE1126]"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm font-semibold text-blue-900 mb-3">Cita textual:</p>
                    <blockquote
                      className="italic border-l-4 border-[#CE1126] pl-4 text-gray-700 text-sm py-2"
                    >
                      "{propuesta.cita_textual}"
                    </blockquote>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Propuestas;
