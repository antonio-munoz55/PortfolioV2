import React, { useState } from 'react'
import './index.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="backdrop-blur-md bg-gray-900/90 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Antonio
          </div>
          
          {/* Menú para desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#projects" className="hover:text-purple-400 transition-colors duration-300 relative group">
              Proyectos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-purple-400 transition-colors duration-300 relative group">
              Sobre mí
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-purple-400 transition-colors duration-300 relative group">
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Botón de menú para móvil */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
        
        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4 px-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a 
                href="#projects" 
                className="text-white hover:text-purple-400 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-purple-400 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre mí
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-purple-400 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header className="h-screen flex flex-col items-center justify-center relative overflow-hidden mt-[-60px] pt-[76px]">
        {/* Fondo */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 animate-gradient-x"></div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          {/* TÍTULO */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fadeInDown">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 font-space-grotesk">
              Antonio Muñoz Obreo
            </span>
          </h1>

          {/* SUBTÍTULO */}
          <p className="text-xl md:text-2xl font-light mb-8 text-indigo-100 animate-fadeInUp opacity-0 --font-josefin-sans" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Desarrollador de Aplicaciones Web
          </p>

          {/* DESCRIPCIÓN */}
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 text-indigo-100 animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Bienvenido/a a mi mundo de proyectos. Descubre lo que he estado creando y aprendiendo.
          </p>

          {/* BOTÓN */}
          <a 
            href="#projects"
            className="inline-block bg-white text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-indigo-100 transition-all duration-300 animate-fadeInUp shadow-lg hover:shadow-xl opacity-0 hover:-translate-y-1"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            Ver Proyectos
          </a>
        </div>
        
        {/* Flecha indicadora de scroll */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </header>

      {/* SECCIÓN "SOBRE MÍ" */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Sobre mí
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 transform transition-all duration-500 hover:scale-105">
              <img
                src="/images/antonio.jpg"
                alt="Foto de Antonio"
                className="rounded-2xl w-80 h-80 object-cover shadow-2xl mx-auto"
              />
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Me especializo en la creación de soluciones digitales funcionales y atractivas, 
                combinando código limpio con un diseño intuitivo.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Siempre estoy explorando nuevas tecnologías para optimizar el rendimiento y 
                la experiencia del usuario en cada proyecto.
              </p>
              
              {/* HABILIDADES */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-4">Habilidades</h3>
                <div className="flex flex-wrap gap-3">
                  {['Java', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'MySQL', 'Hibernate', 'HTML/CSS', 'Git', 'Docker', 'Phaser', 'Figma'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PROYECTOS */}
      <main id="projects" className="py-20 px-4 text-white bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl leading-12 font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Mis Proyectos
          </h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* PROYECTO 1 - Web de emprendimiento */}
            <div className="group">
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl ring-1 ring-indigo-500/30 
                            transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 
                            group-hover:shadow-indigo-500/20 h-full flex flex-col">
                <div className="relative overflow-hidden h-56 flex items-center justify-center">
                  <img
                    src="/images/emprendimiento.PNG"
                    alt="Web de Emprendimiento"
                    className="w-full h-auto object-contain transition-all duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    Web de Emprendimiento
                  </h3>
                  
                  <p className="text-gray-300 mb-4 flex-1">
                    Web de emprendimiento sostenible, hecha en colaboración con los alumnos de DAW2A, para la jornada del 2025.
                  </p>
                  
                  <div className="flex space-x-3 mb-4">
                    <span className="px-3 py-1 bg-indigo-900/50 rounded-full text-xs font-medium text-indigo-300">Astro</span>
                    <span className="px-3 py-1 bg-indigo-900/50 rounded-full text-xs font-medium text-indigo-300">Tailwind</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href="https://emprendimiento-one.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300"
                    >
                      <span>Ver proyecto</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                    
                    <a
                      href="https://github.com/antonio-munoz55/Emprendimiento"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                    >
                      <span>Ver código</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* PROYECTO 2 - App de Gasolineras */}
            <div className="group">
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl ring-1 ring-indigo-500/30 
                            transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 
                            group-hover:shadow-indigo-500/20 h-full flex flex-col">
                <div className="relative overflow-hidden h-56 flex items-center justify-center">
                  <img
                    src="/images/gasStation.PNG" 
                    alt="App de Gasolineras"
                    className="w-full h-auto object-contain transition-all duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    App de Gasolineras
                  </h3>
                  
                  <p className="text-gray-300 mb-4 flex-1">
                    Aplicación que muestra precios actualizados de combustible de estaciones de servicio, con opciones de filtrado.
                  </p>
                  
                  <div className="flex space-x-3 mb-4">
                    <span className="px-3 py-1 bg-indigo-900/50 rounded-full text-xs font-medium text-indigo-300">Tailwind</span>
                    <span className="px-3 py-1 bg-indigo-900/50 rounded-full text-xs font-medium text-indigo-300">JavaScript</span>
                    <span className="px-3 py-1 bg-indigo-900/50 rounded-full text-xs font-medium text-indigo-300">API</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href="https://tailwind-gas-virid.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300"
                    >
                      <span>Ver proyecto</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                    
                    <a
                      href="https://github.com/antonio-munoz55/TailwindGas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                    >
                      <span>Ver código</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* PROYECTO 3 - Eternal Descent */}
            <div className="group">
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl ring-1 ring-indigo-500/30 
                            transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 
                            group-hover:shadow-indigo-500/20 h-full flex flex-col">
                <div className="relative overflow-hidden h-56 flex items-center justify-center">
                  <img
                    src="/images/eternalDescent.PNG"
                    alt="Eternal Descent"
                    className="w-full h-auto object-contain transition-all duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    Eternal Descent
                  </h3>
                  
                  <p className="text-gray-300 mb-4 flex-1">
                  Sencillo juego de mazmorras en 2D en el que el jugador controla un personaje que se mueve, ataca y rueda para derrotar enemigos, recolectar elementos y sobrevivir a través de oleadas de desafíos.
                  </p>
                  
                  <div className="flex space-x-3 mb-4">
                    <span className="px-3 py-1 bg-indigo-900/50 rounded-full text-xs font-medium text-indigo-300">Phaser</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href="https://altair555.itch.io/eternal-descent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300"
                    >
                      <span>Jugar ahora</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                    
                    <a
                      href="https://github.com/antonio-munoz55/EternalDescent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                    >
                      <span>Ver código</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* PROYECTO 4 - Clon de Spotify */}
            <div className="group">
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl ring-1 ring-indigo-500/30 
                            transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 
                            group-hover:shadow-indigo-500/20 h-full flex flex-col">
                <div className="relative overflow-hidden h-56 flex items-center justify-center">
                  <img
                    src="/images/spotify.PNG"
                    alt="Clon de Spotify"
                    className="w-full h-auto object-contain transition-all duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    Clon de Spotify
                  </h3>
                  
                  <p className="text-gray-300 mb-4 flex-1">
                    Reproductor de música inspirado en Spotify, con listas de reproducción, búsqueda y opciones de personalización.
                  </p>
                  
                  <div className="flex space-x-3 mb-4">
                    <span className="px-3 py-1 bg-indigo-900/50 rounded-full text-xs font-medium text-indigo-300">JavaScript</span>
                    <span className="px-3 py-1 bg-indigo-900/50 rounded-full text-xs font-medium text-indigo-300">API</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href="https://antonio-munoz55.github.io/MusicPlayer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300"
                    >
                      <span>Ver proyecto</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                    
                    <a
                      href="https://github.com/antonio-munoz55/MusicPlayer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                    >
                      <span>Ver código</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* SECCIÓN DE CONTACTO */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            ¡Hablemos!
          </h2>
          
          <p className="text-xl text-gray-700 mb-10">
            Si te interesa trabajar conmigo o tienes alguna pregunta, puedes contactarme a través de:
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="mailto:altair555mu@gmail.com" className="w-36 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/antonio-mu%C3%B1oz-obreo-653385353/" target="_blank" rel="noopener noreferrer" className="w-36 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/antonio-munoz55" target="_blank" rel="noopener noreferrer" className="w-36 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="flex justify-center">
            <a href="/download/CurriculumAntonioMunoz.pdf" download className="w-48 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              <svg className="w-5 h-5" fill="pdf" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>Descargar CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Antonio
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} - Antonio Muñoz Obreo - Todos los derechos reservados
          </div>
          
          <div className="flex space-x-4">
            <a href="https://x.com/Altair5552" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100011413407330" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/antonio_mo55/" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App