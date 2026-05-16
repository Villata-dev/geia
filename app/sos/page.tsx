"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SOSPage() {
  const [mensaje, setMensaje] = useState('Prepárate...');
  const [animacion, setAnimacion] = useState({ scale: 1, duration: 2000 });
  const [timer, setTimer] = useState(0); // Tiempo en el ciclo de 16s (0-15s)
  const [contador, setContador] = useState(0); // Número a mostrar

  // useEffect para el ciclo principal de 16s (mensajes y animación)
  useEffect(() => {
    let t1: NodeJS.Timeout, t2: NodeJS.Timeout, t3: NodeJS.Timeout, intervaloFases: NodeJS.Timeout, intervaloReloj: NodeJS.Timeout;

    const cicloRespiracion = () => {
      // 1. Inhala (4 segundos) -> El círculo crece
      setMensaje('Inhala...');
      setAnimacion({ scale: 1.6, duration: 4000 });

      // 2. Sostén (4 segundos) -> Se mantiene grande
      t1 = setTimeout(() => {
        setMensaje('Sostén...');
      }, 4000);

      // 3. Exhala (6 segundos) -> El círculo se achica suavemente
      t2 = setTimeout(() => {
        setMensaje('Exhala...');
        setAnimacion({ scale: 1, duration: 6000 });
      }, 8000);

      // 4. Pausa (2 segundos) -> Se mantiene pequeño
      t3 = setTimeout(() => {
        setMensaje('Pausa...');
      }, 14000);
    };

    const ticDelReloj = () => {
        setTimer(prev => (prev + 1) % 16); // Reinicia cada 16 segundos
    };

    // Dar 2 segundos de preparación
    const inicio = setTimeout(() => {
      cicloRespiracion();
      intervaloFases = setInterval(cicloRespiracion, 16000); // Fases cada 16s
      
      // Iniciamos el contador de segundos al mismo tiempo
      intervaloReloj = setInterval(ticDelReloj, 1000);
    }, 2000);

    return () => {
      clearTimeout(inicio);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(intervaloFases);
      clearInterval(intervaloReloj);
    };
  }, []);

  // useEffect separado para derivar el contador visual de segundos
  useEffect(() => {
    if (timer < 4) {
      // Inhala (0-3s)
      setContador(4 - timer); // 4, 3, 2, 1
    } else if (timer < 8) {
      // Sostén (4-7s)
      setContador(8 - timer); // 4, 3, 2, 1
    } else if (timer < 14) {
      // Exhala (8-13s)
      setContador(14 - timer); // 6, 5, 4, 3, 2, 1
    } else {
      // Pausa (14-15s)
      setContador(16 - timer); // 2, 1
    }
  }, [timer]);

  return (
    <main className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center bg-[#1a1c29] overflow-hidden">
      
      {/* Botón Volver Premium (Glassmorphism oscuro) */}
      <div className="absolute top-8 md:top-12 left-6 md:left-12 z-50">
        <Link 
          href="/" 
          className="w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg active:scale-90 transition-all duration-300 flex items-center justify-center group hover:bg-white/10 text-white/80 hover:text-white"
        >
          <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Centro Visual: Círculo de Respiración Orgánico */}
      <div className="relative flex items-center justify-center w-full max-w-md aspect-square z-10 mt-[-10vh]">
        
        {/* Aura Exterior (Brillo expansivo difuminado) */}
        <div 
          className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full bg-[#a799c7] mix-blend-screen filter blur-[50px] opacity-30 transition-transform ease-in-out"
          style={{ 
            transform: `scale(${animacion.scale})`, 
            transitionDuration: `${animacion.duration}ms` 
          }}
        ></div>

        {/* Círculo Interior (El pulmón táctil con efecto cristalino) */}
        <div 
          className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-[#a799c7] to-[#c2b6d6] shadow-[0_0_60px_rgba(167,153,199,0.3),inset_0_4px_20px_rgba(255,255,255,0.5),inset_0_-4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center transition-transform ease-in-out z-20 border border-white/20"
          style={{ 
            transform: `scale(${animacion.scale})`, 
            transitionDuration: `${animacion.duration}ms` 
          }}
        >
          {/* EL CAMBIO: Reemplazamos el emoji por el contador numérico */}
          <span className="text-[#1a1c29] text-5xl md:text-7xl font-bold opacity-90 drop-shadow-md">
            {contador}
          </span>
        </div>

      </div>

      {/* Instrucciones de Respiración */}
      <div className="absolute bottom-28 md:bottom-36 z-30 flex flex-col items-center w-full px-6">
        <h2 className="text-4xl md:text-5xl text-white font-medium tracking-wide drop-shadow-md text-center">
          {mensaje}
        </h2>
        <p className="text-slate-400 mt-6 text-sm md:text-base tracking-[0.2em] uppercase opacity-70 font-light">
          Sigue el ritmo del círculo
        </p>
      </div>

    </main>
  );
}