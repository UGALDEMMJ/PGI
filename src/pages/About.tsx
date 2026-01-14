import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Zap, Globe, CheckCircle, Lightbulb } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Información Centralizada',
      description: 'Acceso rápido a las propuestas de gobierno de todos los partidos en un solo lugar'
    },
    {
      icon: Users,
      title: 'Para Ciudadanos Informados',
      description: 'Herramienta diseñada para ayudarte a tomar decisiones electorales informadas'
    },
    {
      icon: Zap,
      title: 'Interfaz Moderna',
      description: 'Diseño limpio e intuitivo para una experiencia de usuario excepcional'
    },
    {
      icon: Globe,
      title: 'Costa Rica 2026',
      description: 'Enfocado en las próximas elecciones generales de Costa Rica'
    }
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
            Plan Gobiernos Insights
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Una plataforma de <strong>fácil acceso a insights</strong> de los planes de gobierno de los partidos 
            participantes en las elecciones 2026 en Costa Rica. Información verificada y libre de sesgos.
          </p>
        </motion.div>

        {/* Propósito y Alcance */}
        <motion.div
          className="bg-blue-50 border-2 border-[#CE1126] rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">¿Cuál es el propósito de esta plataforma?</h2>
            <p className="text-gray-700 mb-3">
              <strong>Plan Gobiernos Insights</strong> es una plataforma diseñada para <strong>promover la participación electoral informada</strong> en 
              las elecciones 2026 de Costa Rica. Su objetivo es <strong>facilitar el acceso a información</strong> sobre 
              los planes de gobierno de todos los partidos políticos participantes.
            </p>
            <p className="text-gray-700 mb-3">
              <strong className="text-[#CE1126]">Importante:</strong> Esta plataforma está diseñada para <strong>facilitar información, 
              no para tomar decisiones electorales</strong>. La decisión final sobre por quién votar es personal y debe 
              basarse en tu propio criterio.
            </p>
          </div>
        </motion.div>

        {/* Fuentes de Datos */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe size={28} />
            Fuente de Información
          </h2>
          <p className="text-blue-100 mb-2">
            Toda la información contenida en esta plataforma fue extraída de:
          </p>
          <a 
            href="https://www.tse.go.cr/2026/planesgobierno.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-300 font-bold hover:text-yellow-200 transition underline break-all"
          >
            Tribunal Supremo de Elecciones (TSE) - Planes de Gobierno 2026
          </a>
          <p className="text-blue-100 mt-3">
            Nos comprometemos a mantener la información actualizada, verificada y presentada sin sesgos políticos.
          </p>
        </motion.div>

        {/* Características */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
            Características Principales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow text-center border-2 border-[#CE1126] hover:border-blue-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <Icon size={40} className="text-blue-900" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Sección de Datos */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">¿De dónde proviene la información?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Los datos presentados en esta plataforma provienen de fuentes oficiales, sitios web de los partidos
            políticos y documentos públicos. Nos comprometemos a mantener la información actualizada y verificada.
          </p>
        </motion.div>

        {/* Sección de IA y Metodología */}
        <motion.div
          className="mb-20 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border-2 border-[#CE1126]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-2">
            <Lightbulb size={32} className="text-[#CE1126]" />
            Generación de Insights con Inteligencia Artificial
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Herramienta Utilizada</h3>
              <p className="text-gray-700">
                Los insights analizados en esta plataforma fueron generados utilizando <strong>Google NotebookLM</strong>, 
                una herramienta de inteligencia artificial que asiste en el análisis y resumen de documentos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Criterios de Análisis</h3>
              <p className="text-gray-700 mb-3">
                El análisis se realizó siguiendo criterios estrictos de rigor académico para garantizar la precisión:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={20} className="text-[#CE1126] flex-shrink-0 mt-0.5" />
                  <span><strong>Análisis exclusivo del contenido:</strong> Se analiza únicamente el contenido del documento cargado.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={20} className="text-[#CE1126] flex-shrink-0 mt-0.5" />
                  <span><strong>Sin información externa:</strong> No se agrega información de otras fuentes.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={20} className="text-[#CE1126] flex-shrink-0 mt-0.5" />
                  <span><strong>Sin inferencias no explícitas:</strong> No se infieren intenciones no claramente expresadas en el documento.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={20} className="text-[#CE1126] flex-shrink-0 mt-0.5" />
                  <span><strong>Respaldadas por citas textuales:</strong> Toda afirmación está respaldada por citas directas del documento.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Estructura del Análisis</h3>
              <p className="text-gray-700 mb-3">
                El análisis de cada partido sigue una estructura estandarizada que incluye:
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#CE1126] space-y-2 text-sm">
                <p><strong>1. Resumen en 10 Puntos Clave</strong> - Las propuestas principales del partido</p>
                <p><strong>2. Ejes Temáticos Principales</strong> - Categorización por temas: Economía, Educación, Salud, Ambiente, Seguridad, Gobernanza</p>
                <p><strong>3. Análisis de Propuestas</strong> - Diferenciadas entre concretas y generales/discursivas</p>
                <p><strong>4. Temas Ausentes o Poco Desarrollados</strong> - Identificación de brechas con evidencia</p>
                <p><strong>5. Priorización Temática</strong> - Escala 1-10 para cada eje temático</p>
                <p><strong>6. Insights Críticos</strong> - Análisis de coherencia, viabilidad, claridad de ejecución y posibles contradicciones</p>
                <p><strong>7. Análisis del Lenguaje</strong> - Tipo predominante y características textuales</p>
                <p><strong>8. Puntuación del Lenguaje</strong> - Evaluación en escala 1-10 de aspectos técnico, populista, ambiguo y basado en métricas</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <motion.div
              className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-900 border-2 border-[#CE1126]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                ¿Es esta plataforma imparcial?
              </h3>
              <p className="text-gray-700">
                Sí. Plan Gobiernos Insights es una plataforma neutral diseñada para presentar información sobre
                todos los partidos políticos sin favoritismo ni sesgos. Nuestro objetivo es <strong>facilitar acceso a información</strong>, 
                no influir en decisiones electorales.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-900 border-2 border-[#CE1126]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                ¿Puedo usar esta información para tomar mi decisión electoral?
              </h3>
              <p className="text-gray-700">
                Esta plataforma está diseñada para <strong>facilitar información, no para tomar decisiones</strong>. 
                Los insights generados por IA son un complemento para tu investigación personal. Te recomendamos 
                revisar los documentos originales del TSE y otras fuentes para formar tu propio criterio.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-900 border-2 border-[#CE1126]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                ¿Qué tan confiables son los insights generados con IA?
              </h3>
              <p className="text-gray-700">
                Los insights fueron generados siguiendo criterios rigurosos: análisis exclusivo del contenido, 
                sin información externa, y todas las afirmaciones están respaldadas por citas textuales directas. 
                Sin embargo, la IA es una herramienta que asiste en el análisis; te recomendamos siempre verificar 
                las fuentes originales.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-900 border-2 border-[#CE1126]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                ¿De dónde obtienen ustedes la información?
              </h3>
              <p className="text-gray-700">
                Toda la información se extrae del <strong>Tribunal Supremo de Elecciones (TSE)</strong> en: 
                <a 
                  href="https://www.tse.go.cr/2026/planesgobierno.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#CE1126] font-bold hover:underline ml-1"
                >
                  www.tse.go.cr/2026/planesgobierno.html
                </a>
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-900 border-2 border-[#CE1126]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                ¿Puedo sugerir cambios o reportar errores?
              </h3>
              <p className="text-gray-700">
                Absolutamente. Valoramos tus comentarios y sugerencias. Si encuentras información inconsistente 
                o deseas proporcionar retroalimentación, puedes contactarnos a través de los datos disponibles en el pie de página.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-900 border-2 border-[#CE1126]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                ¿Con qué frecuencia se actualiza la información?
              </h3>
              <p className="text-gray-700">
                Nos esforzamos por mantener la información lo más actualizada posible. Durante el período
                electoral, realizamos actualizaciones periódicas para reflejar cambios en las propuestas
                o posiciones de los partidos según se publiquen en el sitio del TSE.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
