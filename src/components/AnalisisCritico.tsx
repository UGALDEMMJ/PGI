import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lightbulb, ChevronDown } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

interface AnalisisItem {
  analisis: string;
  citas_textuales: string[];
}

interface AnalisisCriticoData {
  [key: string]: AnalisisItem;
}

interface AnalisisCriticoProps {
  analisis: AnalisisCriticoData;
}

const AnalisisCritico: React.FC<AnalisisCriticoProps> = ({ analisis }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = Object.entries(analisis).map(([key, item]) => ({
    key,
    label: key.replace(/_/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    item
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
        <Lightbulb size={28} className="text-[#CE1126]" />
        <h2 className="text-3xl font-bold text-blue-900">Análisis Crítico</h2>
      </div>

      <div className="space-y-6">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.key}
            className="bg-white rounded-xl shadow-md border-2 border-[#CE1126] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <button
              onClick={() => setExpandedCategory(
                expandedCategory === category.key ? null : category.key
              )}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {category.label}
              </h3>
              <ChevronDown
                size={24}
                className={`text-[#CE1126] transition-transform ${
                  expandedCategory === category.key ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {expandedCategory === category.key && (
                <motion.div
                  className="px-6 py-4 bg-blue-50 border-t-2 border-[#CE1126]"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-lg p-4 border-l-4 border-[#CE1126]">
                    <p className="text-gray-800 leading-relaxed mb-3">
                      {category.item.analisis}
                    </p>
                    {category.item.citas_textuales && category.item.citas_textuales.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-blue-900 uppercase">Citas:</p>
                        <div className="space-y-2">
                          {category.item.citas_textuales.map((cita, citaIndex) => (
                            <blockquote
                              key={citaIndex}
                              className="italic border-l-4 border-gray-300 pl-3 text-gray-600 text-sm py-1"
                            >
                              "{cita}"
                            </blockquote>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AnalisisCritico;
