"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SOSPage() {
  const [fase, setFase] = useState<'Espera' | 'Inhala' | 'Mantén' | 'Exhala' | 'Terminado'>('Espera');
  const [contador, setContador] = useState(4);
  const [ciclo, setCiclo] = useState(1);
  const totalCiclos = 3;

  useEffect(() => {
    if (fase === 'Espera' || fase === 'Terminado') return;

    const timer = setInterval(() => {
      setContador((prev) => {
        if (prev > 1) return prev - 1;

        if (fase === 'Inhala') {
          setFase('Mantén');
          return 4;
        } else if (fase === 'Mantén') {
          setFase('Exhala');
          return 4;
        } else if (fase === 'Exhala') {
          if (ciclo < totalCiclos) {
            setCiclo((c) => c + 1);
            setFase('Inhala');
            return 4;
          } else {
            setFase('Terminado');
            return 0;
          }
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [fase, ciclo]);

  const iniciarEjercicio = () => {
    setFase('Inhala');
    setContador(4);
    setCiclo(1);
  };

  const tamañoCirculo = (fase === 'Inhala' || fase === 'Mantén') ? 'scale-150' : 'scale-100';
  const duracionTransicion = fase === 'Mantén' ? 'duration-1000' : 'duration-[4000ms]';

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-[#1a1c29] px-6 pt-10">
      
      {/* Botón Volver corregido: Área de clic ampliada */}
      <Link 
        href="/" 
        className="absolute top-10 left-6 flex items-start gap-3 z-50 group cursor-pointer"
      >
        <div className="w-12 h-12 bg-[#a799c7] rounded-xl shadow-md group-active:scale-90 transition-transform flex items-center justify-center">
          <span className="text-white text-2xl font-bold">←</span>
        </div>
        <div className="text-slate-300 text-sm font-serif leading-tight mt-1 group-hover:text-white transition-colors">
          Volver
        </div>
      </Link>

      <h2 className="text-3xl font-serif text-white tracking-wide mt-24 mb-20">
        {fase === 'Espera' && 'Respiración guiada'}
        {fase !== 'Espera' && fase !== 'Terminado' && fase}
        {fase === 'Terminado' && '¡Lo hiciste muy bien!'}
      </h2>

      <div className="relative flex items-center justify-center w-64 h-64 mb-16">
        <div 
          className={`absolute w-40 h-40 rounded-full bg-[#eca884] shadow-[0_0_60px_rgba(236,168,132,0.3)] transition-transform ease-in-out ${tamañoCirculo} ${duracionTransicion}`}
        />
        
        <div className="relative z-10 text-white text-5xl font-serif drop-shadow-md">
          {fase === 'Espera' ? (
            <button 
              onClick={iniciarEjercicio}
              className="text-2xl tracking-wider active:scale-95 transition-transform"
            >
              INICIAR
            </button>
          ) : fase === 'Terminado' ? (
            '🤍'
          ) : (
            contador
          )}
        </div>
      </div>

      <div className="w-full max-w-sm text-center font-serif space-y-2 mt-auto pb-12">
        {fase !== 'Espera' && fase !== 'Terminado' && (
          <p className="text-lg text-[#a799c7]">
            Ciclo {ciclo} de {totalCiclos}
          </p>
        )}
      </div>

    </main>
  );
}