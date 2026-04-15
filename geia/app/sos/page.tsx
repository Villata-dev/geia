"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SOSPage() {
  const [fase, setFase] = useState<'Espera' | 'Inhala' | 'Mantén' | 'Exhala' | 'Terminado'>('Espera');
  const [contador, setContador] = useState(4);
  const [ciclo, setCiclo] = useState(1);

  useEffect(() => {
    if (fase === 'Espera' || fase === 'Terminado') return;
    const timer = setInterval(() => {
      setContador((prev) => {
        if (prev > 1) return prev - 1;
        if (fase === 'Inhala') { setFase('Mantén'); return 4; }
        if (fase === 'Mantén') { setFase('Exhala'); return 4; }
        if (fase === 'Exhala') {
          if (ciclo < 3) { setCiclo(c => c + 1); setFase('Inhala'); return 4; }
          setFase('Terminado'); return 0;
        }
        return 0;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [fase, ciclo]);

  const tamaño = (fase === 'Inhala' || fase === 'Mantén') ? 'scale-150' : 'scale-100';

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-[#1a1c29] px-6 pt-10 overflow-hidden">
      
      {/* BOTÓN VOLVER: Siempre visible, área de clic optimizada */}
      <Link 
        href="/" 
        className="absolute top-10 left-6 flex items-center gap-3 z-[999] group no-underline"
      >
        <div className="w-12 h-12 bg-[#a799c7] rounded-xl shadow-lg flex items-center justify-center group-active:scale-90 transition-transform">
          <span className="text-white text-2xl font-bold">←</span>
        </div>
        <span className="text-slate-300 font-serif text-sm group-hover:text-white transition-colors">
          Volver
        </span>
      </Link>

      <h2 className="text-3xl font-serif text-white mt-24 mb-20 text-center">
        {fase === 'Espera' ? 'Respiración guiada' : fase === 'Terminado' ? 'Paz.' : fase}
      </h2>

      <div className="relative flex items-center justify-center w-64 h-64 mb-16">
        <div className={`absolute w-40 h-40 rounded-full bg-[#eca884] shadow-2xl transition-all duration-[4000ms] ease-in-out ${tamaño}`} />
        <div className="relative z-10 text-white text-5xl font-serif">
          {fase === 'Espera' ? (
            <button onClick={() => setFase('Inhala')} className="text-2xl tracking-widest outline-none">INICIAR</button>
          ) : fase === 'Terminado' ? '🤍' : contador}
        </div>
      </div>

      {fase !== 'Espera' && fase !== 'Terminado' && (
        <p className="mt-auto pb-12 text-[#a799c7] font-serif">Ciclo {ciclo} de 3</p>
      )}
    </main>
  );
}