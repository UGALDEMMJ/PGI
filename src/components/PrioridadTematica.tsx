import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface PrioridadTematica {
  [key: string]: number;
}

interface PrioridadTematicaProps {
  prioridades: PrioridadTematica;
}

const PrioridadTematica: React.FC<PrioridadTematicaProps> = ({ prioridades }) => {
  const data = Object.entries(prioridades).map(([tema, valor]) => ({
    tema: tema.charAt(0).toUpperCase() + tema.slice(1),
    prioridad: valor
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
        <TrendingUp size={28} className="text-[#CE1126]" />
        <h2 className="text-3xl font-bold text-blue-900">Prioridad Temática (1-10)</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 border-2 border-[#CE1126]">
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 10]} />
              <YAxis type="category" dataKey="tema" width={120} />
              <Tooltip
                formatter={(value: number | undefined) => value ? `${value}/10` : ''}
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '2px solid #CE1126',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="prioridad" fill="#CE1126" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <motion.div
              key={item.tema}
              className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-4 border-l-4 border-[#CE1126]"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-900">{item.tema}</span>
                <span className="text-xl font-bold text-[#CE1126]">{item.prioridad}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-[#CE1126] h-2 rounded-full transition-all"
                  style={{ width: `${(item.prioridad / 10) * 100}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PrioridadTematica;
