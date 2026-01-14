import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Vote } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PartidoCard from '../components/PartidoCard';

interface Partido {
  nombre: string;
  siglas: string;
  id: string;
  bandera?: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [partidos, setPartidos] = useState<Partido[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lista de partidos para las elecciones 2026 en Costa Rica
    const siglas = [
      'ACRM',
      'CAC',
      'CDS',
      'CR1',
      'FA',
      'PA',
      'PDLCT',
      'PEL',
      'PEN',
      'PIN',
      'PJSC',
      'PLN',
      'PLP',
      'PNG',
      'PNR',
      'PPSO',
      'PSD',
      'PUCD',
      'PUSC',
      'UP'
    ];

    const loadPartidos = async () => {
      try {
        const partidosData: Partido[] = [];

        // Cargar cada archivo JSON
        for (const sigla of siglas) {
          const response = await fetch(`/${sigla}.json`);
          if (response.ok) {
            const data = await response.json();
            partidosData.push({
              nombre: data.nombre,
              siglas: data.siglas,
              id: data.id,
              bandera: data.bandera
            });
          }
        }

        setPartidos(partidosData);
      } catch (error) {
        console.error('Error al cargar los partidos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPartidos();
  }, []);

  const handlePartidoClick = (id: string) => {
    navigate(`/party/${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-16">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Vote size={40} className="text-blue-900" />
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900">
              Elecciones 2026
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explora los partidos políticos y sus propuestas de gobierno para Costa Rica
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900" />
          </div>
        ) : (
          <>
            {/* Contador de partidos */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-gray-600">
                <span className="font-bold text-blue-900 text-2xl">{partidos.length}</span> partidos políticos participantes
              </p>
            </motion.div>

            {/* Grid de partidos */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.05 }}
            >
              {partidos.map((partido, index) => (
                <motion.div
                  key={partido.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <PartidoCard
                    nombre={partido.nombre}
                    siglas={partido.siglas}
                    bandera={partido.bandera}
                    onClick={() => handlePartidoClick(partido.id)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Sección informativa */}
            <motion.div
              className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-blue-900 border border-[#CE1126]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                ¿Cómo usar esta plataforma?
              </h2>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-4">
                  <span className="font-bold text-blue-900 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                  <span>Selecciona un partido político de la lista anterior</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-blue-900 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                  <span>Revisa el perfil completo con sus propuestas de gobierno</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-blue-900 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                  <span>Compara propuestas entre diferentes partidos</span>
                </li>
              </ol>
            </motion.div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;