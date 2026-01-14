# 📊 Plan Gobiernos Insights

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

> Una plataforma moderna y accesible para explorar los planes de gobierno de los partidos políticos en las elecciones 2026 de Costa Rica.

## 🎯 Acerca del Proyecto

**Plan Gobiernos Insights** es una plataforma diseñada para **promover la participación electoral informada** mediante el fácil acceso a información sobre los planes de gobierno de todos los partidos participantes en las elecciones presidenciales 2026 de Costa Rica.

### 🔑 Características Principales

- **📋 Información Centralizada**: Acceso rápido a las propuestas de todos los partidos en un solo lugar
- **👥 Para Ciudadanos Informados**: Herramienta que facilita información, no toma decisiones
- **⚡ Interfaz Moderna**: Diseño limpio e intuitivo con animaciones fluidas
- **🇨🇷 Enfoque Costa Rica 2026**: Datos actualizados de las elecciones generales

### 🎨 Secciones de Análisis

Cada partido político incluye análisis detallado en las siguientes categorías:

1. **Resumen en 10 Puntos Clave** - Las propuestas principales condensadas
2. **Ejes Temáticos Principales** - Economía, Educación, Salud, Ambiente, Seguridad, Gobernanza
3. **Análisis de Propuestas** - Diferenciadas entre concretas y generales/discursivas
4. **Temas Ausentes o Poco Desarrollados** - Identificación de brechas con evidencia
5. **Priorización Temática** - Escala 1-10 para cada eje temático con visualización gráfica
6. **Insights Críticos** - Coherencia, viabilidad, claridad de ejecución y contradicciones
7. **Análisis del Lenguaje** - Tipo predominante y características textuales
8. **Puntuación del Lenguaje** - Visualización en polígono de métricas: técnico, populista, ambiguo, basado en métricas

## 🤖 Metodología de Análisis

Los insights fueron generados utilizando **Google NotebookLM** siguiendo criterios rigurosos:

- ✅ **Análisis exclusivo del contenido** - Solo se analiza el documento cargado
- ✅ **Sin información externa** - No se agrega información de otras fuentes
- ✅ **Sin inferencias no explícitas** - No se infieren intenciones no expresadas claramente
- ✅ **Respaldadas por citas textuales** - Toda afirmación está respaldada por citas directas

### 📚 Fuente de Datos

Toda la información se extrae del **Tribunal Supremo de Elecciones (TSE)**:
- **URL**: [www.tse.go.cr/2026/planesgobierno.html](https://www.tse.go.cr/2026/planesgobierno.html)

## 🚀 Tech Stack

### Core
- **React 19.2.0** - Biblioteca de UI con las últimas características
- **TypeScript 5.9.3** - Tipado estático para mayor seguridad
- **Vite 7.2.4** - Build tool ultrarrápido
- **React Router 7.12.0** - Navegación entre páginas

### Styling & UI
- **TailwindCSS 4.1.18** - Framework de CSS utility-first
- **Motion 12.26.2** - Animaciones fluidas y profesionales
- **Lucide React 0.562.0** - Iconos modernos y consistentes

### Data Visualization
- **Recharts 3.6.0** - Gráficos interactivos (barras, polígonos/radar)

## 📦 Instalación y Uso

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/PlanGobiernosInsights.git

# Navegar al directorio
cd PlanGobiernosInsights/PGI

# Instalar dependencias
npm install
```

### Ejecutar en Desarrollo

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

### Compilar para Producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`

### Vista Previa de Producción

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
PGI/
├── public/               # Archivos estáticos
│   ├── pgi-favicon.svg  # Favicon personalizado
│   └── *.json           # Datos de partidos políticos
├── src/
│   ├── assets/          # Recursos estáticos
│   ├── components/      # Componentes reutilizables
│   │   ├── AnalisisCritico.tsx
│   │   ├── AnalisisLenguaje.tsx
│   │   ├── CandidatoHeader.tsx
│   │   ├── EjesTematicos.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── PartidoCard.tsx
│   │   ├── PrioridadTematica.tsx
│   │   ├── Propuestas.tsx
│   │   └── TemasAusentes.tsx
│   ├── pages/           # Páginas principales
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── PartyDetail.tsx
│   ├── App.tsx          # Componente raíz
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html           # HTML principal
├── package.json         # Dependencias
├── tsconfig.json        # Configuración TypeScript
├── vite.config.ts       # Configuración Vite
└── tailwind.config.js   # Configuración Tailwind
```

## 🎨 Paleta de Colores

- **Primario**: `#003366` (Azul Costa Rica)
- **Acento**: `#CE1126` (Rojo bandera)
- **Fondo**: Gradientes de `blue-50` a `white`

## ⚠️ Disclaimer

Esta plataforma está diseñada para **facilitar información, no para tomar decisiones electorales**. La decisión sobre por quién votar es personal y debe basarse en tu propio criterio. Te recomendamos verificar las fuentes originales y realizar tu propia investigación.

## 🔒 Imparcialidad

**Plan Gobiernos Insights** es una plataforma **neutral y libre de sesgos** políticos. Presentamos información de todos los partidos sin favoritismo. Nuestro único objetivo es facilitar el acceso a información verificada.

## 👨‍💻 Desarrollador

Desarrollado con ❤️ para Costa Rica por **[UGALDEMMJ](https://www.linkedin.com/in/mugaldem)**

## 📄 Licencia

Este proyecto es de código abierto para fines educativos e informativos.

---

**© 2026 Plan Gobiernos Insights. Todos los derechos reservados.**
