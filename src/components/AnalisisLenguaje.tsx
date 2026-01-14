import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, TrendingUp, Flame } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

interface Puntuacion {
  tecnico?: number;
  basado_en_metricas?: number;
  populista?: number;
  ambiguo?: number;
}

interface AnalisisLenguajeData {
  tipo_predominante?: string;
  descripcion?: string;
  evidencia_textual?: string;
}

interface AnalisisLenguajeProps {
  analisis: AnalisisLenguajeData;
  puntuacion?: Puntuacion;
}

const AnalisisLenguaje: React.FC<AnalisisLenguajeProps> = ({ analisis, puntuacion: puntuacionProp }) => {
  const puntuacion = puntuacionProp || {};

  const scoreEntries = useMemo(() => {
    return Object.entries(puntuacion).map(([k, v]) => ({
      metric: k.replace(/_/g, ' '),
      value: v ?? 0
    }));
  }, [puntuacion]);

  const dominantStyle = useMemo(() => {
    const entries = Object.entries(puntuacion);
    if (entries.length === 0) return null;
    const [key, value] = entries.reduce((max, cur) => (cur[1] > max[1] ? cur : max));
    return {
      label: key.replace(/_/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      value
    };
  }, [puntuacion]);

  const getScoreColor = (score: number): string => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-blue-600';
    if (score >= 4) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <motion.div className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare size={28} className="text-[#CE1126]" />
        <h2 className="text-3xl font-bold text-blue-900">Análisis de Lenguaje</h2>
      </div>

      {/* Perfil general */}
      {analisis.tipo_predominante && (
        <motion.div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-8 border-l-4 border-[#CE1126]" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-gray-700 text-sm font-semibold mb-2 uppercase">Tipo predominante</p>
          <p className="text-gray-800 text-lg font-bold mb-4">{analisis.tipo_predominante}</p>
          {analisis.descripcion && <p className="text-gray-800 leading-relaxed">{analisis.descripcion}</p>}
        </motion.div>
      )}

      {/* Evidencia textual */}
      {analisis.evidencia_textual && (
        <motion.div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6 mb-8" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-yellow-900 text-sm font-semibold mb-2">EVIDENCIA TEXTUAL</p>
          <p className="text-gray-700 italic">"{analisis.evidencia_textual}"</p>
        </motion.div>
      )}

      {/* Puntuación */}
      {scoreEntries.length > 0 && (
        <motion.div className="mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
            <TrendingUp size={24} className="text-[#CE1126]" />
            Puntuación
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="bg-white rounded-xl p-6 border-2 border-[#CE1126]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scoreEntries.map((entry, index) => (
                  <motion.div key={entry.metric} className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-200" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                    <span className="text-gray-700 capitalize">{entry.metric}</span>
                    <span className={`font-bold ${getScoreColor(entry.value)}`}>{entry.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-xl p-4 border-2 border-[#CE1126]">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={scoreEntries} cx="50%" cy="50%" outerRadius="80%">
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="metric" tick={{ fill: '#0f172a', fontSize: 11 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fill: '#64748b', fontSize: 10 }} />
                    <Radar name="Puntuación" dataKey="value" stroke="#CE1126" fill="#CE1126" fillOpacity={0.4} />
                    <Tooltip 
                      formatter={(value: number | undefined) => value ? `${value}/10` : ''}
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '2px solid #CE1126',
                        borderRadius: '8px'
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {dominantStyle && (
            <div className="mt-6 bg-blue-50 border-l-4 border-[#CE1126] rounded-xl p-4 flex items-center gap-3">
              <Flame size={20} className="text-[#CE1126]" />
              <p className="text-gray-700">Estilo predominante: <span className="font-bold text-blue-900">{dominantStyle.label}</span> ({dominantStyle.value}/10)</p>
            </div>
          )}
        </motion.div>
      )}

      {/* Rasgos clave */}
      {/* Ejemplos representativos */}
      {/* Insight analítico */}
    </motion.div>
  );
};

export default AnalisisLenguaje;
