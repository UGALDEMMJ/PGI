import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CandidatoHeader from '../components/CandidatoHeader';
import EjesTematicos from '../components/EjesTematicos';
import Propuestas from '../components/Propuestas';
import TemasAusentes from '../components/TemasAusentes';
import AnalisisCritico from '../components/AnalisisCritico';
import AnalisisLenguaje from '../components/AnalisisLenguaje';
import PrioridadTematica from '../components/PrioridadTematica';

interface PuntoGobierno {
  n: number;
  titulo: string;
  detalle: string;
}

interface PartidoDetail {
  id: string;
  nombre: string;
  siglas: string;
  pais: string;
  anio: number;
  periodo_gobierno: string;
  bandera?: string;
  candidato_presidente?: string;
  candidato_imagen?: string;
  resumen_10_puntos: PuntoGobierno[];
  ejes_tematicos?: Array<{ tema: string; resumen: string }>;
  prioridad_tematica_1a10?: Record<string, number>;
  propuestas?: {
    concretas: Array<{ propuesta: string; cita_textual: string }>;
    generales_o_discursivas: Array<{ propuesta: string; cita_textual: string }>;
  };
  temas_ausentes_o_poco_desarrollados?: Array<{ tema: string; evidencia: string }>;
  insights_criticos?: Record<string, { analisis: string; citas_textuales: string[] }>;
  lenguaje?: {
    tipo_predominante?: string;
    descripcion?: string;
    evidencia_textual?: string;
  };
  puntuacion_lenguaje_1a10?: {
    tecnico?: number;
    basado_en_metricas?: number;
    populista?: number;
    ambiguo?: number;
  };
}

const PartyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [partido, setPartido] = useState<PartidoDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPartido = async () => {
      try {
        // Buscar el archivo JSON correcto basado en el ID
        const siglas = [
          'ACRM', 'CAC', 'CDS', 'CR1', 'FA', 'PA', 'PDLCT', 'PEL',
          'PEN', 'PIN', 'PJSC', 'PLN', 'PLP', 'PNG', 'PNR', 'PPSO',
          'PSD', 'PUCD', 'PUSC', 'UP'
        ];

        for (const sigla of siglas) {
          const response = await fetch(`/${sigla}.json`);
          if (response.ok) {
            const data = await response.json();
            if (data.id === id) {
              setPartido(data);
              break;
            }
          }
        }
      } catch (error) {
        console.error('Error al cargar el partido:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPartido();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!partido) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">Partido no encontrado</h1>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <ArrowLeft size={20} />
              Volver a inicio
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-16">
        {/* Botón volver */}
        <motion.button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-800 font-semibold mb-8 transition-all hover:gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={20} />
          Volver a los partidos
        </motion.button>

        {/* Candidato Header */}
        {partido.candidato_presidente && (
          <CandidatoHeader 
            nombre={partido.candidato_presidente}
            imagen={partido.candidato_imagen}
            partido={partido.nombre}
          />
        )}

        {/* Header del partido */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 mb-12 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-blue-200 text-sm font-semibold mb-2">Partido Político</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{partido.nombre}</h1>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg">
                  <FileText size={20} />
                  <span className="font-semibold">{partido.siglas}</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg">
                  <MapPin size={20} />
                  <span>{partido.pais} - {partido.anio}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Información general */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 mb-12 border-l-4 border-blue-900 border-2 border-[#CE1126]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Período de Gobierno</h2>
          <p className="text-lg text-gray-700 font-semibold">{partido.periodo_gobierno}</p>
        </motion.div>

        {/* Puntos de gobierno */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Propuestas Principales</h2>

          <div className="space-y-6 mb-16">
            {partido.resumen_10_puntos.map((punto, index) => (
              <motion.div
                key={punto.n}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border-l-4 border-blue-400 border-2 border-[#CE1126]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-900 to-blue-800 text-white font-bold text-lg">
                      {punto.n}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {punto.titulo}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {punto.detalle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ejes Temáticos */}
        {partido.ejes_tematicos && (
          <EjesTematicos ejes={partido.ejes_tematicos} />
        )}

        {/* Prioridad Temática */}
        {partido.prioridad_tematica_1a10 && (
          <PrioridadTematica prioridades={partido.prioridad_tematica_1a10} />
        )}

        {/* Propuestas Detalladas */}
        {partido.propuestas && (
          <Propuestas propuestas={partido.propuestas} />
        )}

        {/* Temas Ausentes */}
        {partido.temas_ausentes_o_poco_desarrollados && partido.temas_ausentes_o_poco_desarrollados.length > 0 && (
          <TemasAusentes temas={partido.temas_ausentes_o_poco_desarrollados} />
        )}

        {/* Análisis Crítico */}
        {partido.insights_criticos && (
          <AnalisisCritico analisis={partido.insights_criticos} />
        )}

        {/* Análisis de Lenguaje */}
        {partido.lenguaje && (
          <AnalisisLenguaje 
            analisis={partido.lenguaje}
            puntuacion={partido.puntuacion_lenguaje_1a10}
          />
        )}

        {/* Sección final */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#F8F9FA] to-[#CE1126]/10 rounded-2xl p-8 md:p-12 border-2 border-[#CE1126]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">¿Quieres comparar?</h2>
          <p className="text-gray-700 mb-6">
            Vuelve a la página principal para explorar las propuestas de otros partidos y compararlas.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
          >
            Ver todos los partidos
          </button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PartyDetail;
