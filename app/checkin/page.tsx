"use client";

import { useState } from 'react';

export default function CheckinPage() {
  // Estado para guardar qué emoción se seleccionó (del 1 al 5)
  const [seleccion, setSeleccion] = useState<number | null>(null);

  // Lista de emociones temporales para el MVP
  const emociones = [
    { id: 1, emoji: '😄', label: 'Muy bien' },
    { id: 2, emoji: '🙂', label: 'Bien' },
    { id: 3, emoji: '😐', label: 'Neutral' },
    { id: 4, emoji: '😔', label: 'Mal' },
    { id: 5, emoji: '😠', label: 'Muy mal' },
  ];

  // Función para guardar en el celular y volver al inicio
  const handleGuardar = () => {
    if (seleccion === null) return;

    // Obtenemos el historial previo o creamos uno nuevo
    const historialGuardado = localStorage.getItem('geia_checkins');
    const historial = historialGuardado ? JSON.parse(historialGuardado) : [];

    // Agregamos el nuevo registro con la fecha actual
    const nuevoRegistro = {
      fecha: new Date().toISOString(),
      emocionId: seleccion,
    };
    historial.push(nuevoRegistro);

    // Guardamos en localStorage
    localStorage.setItem('geia_checkins', JSON.stringify(historial));

    // Forzamos la vuelta al home usando HTML puro
    window.location.href = '/';
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-[#eca884] px-6 pt-10 overflow-hidden">
      
      {/* Botón Volver con la flecha curva tipo ilustración */}
      <a 
        href="/" 
        className="absolute top-10 left-6 z-[999] flex items-center justify-center cursor-pointer no-underline opacity-80 hover:opacity-100 transition-opacity"
      >
        <span className="text-[#e2e8f0] text-4xl font-serif">↶</span>
      </a>

      {/* Título de la pantalla */}
      <h2 className="text-4xl font-serif text-[#e2e8f0] tracking-wide mt-24 mb-20 text-center drop-shadow-sm">
        ¿Cómo te sientes hoy?
      </h2>

      {/* Selector de Emociones */}
      <div className="flex items-center justify-center gap-3 w-full max-w-sm mb-24">
        {emociones.map((emocion) => {
          const isSelected = seleccion === emocion.id;
          return (
            <button
              key={emocion.id}
              onClick={() => setSeleccion(emocion.id)}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ease-in-out cursor-pointer outline-none
                ${isSelected 
                  ? 'bg-[#a799c7] ring-4 ring-[#e2e8f0] ring-offset-2 ring-offset-[#eca884] scale-110 shadow-lg' 
                  : 'bg-[#a799c7] hover:scale-105 shadow-md opacity-90'
                }
              `}
              aria-label={emocion.label}
            >
              {emocion.emoji}
            </button>
          );
        })}
      </div>

      {/* Botón Seleccionar con borde punteado */}
      <button
        onClick={handleGuardar}
        disabled={seleccion === null}
        className={`mt-auto mb-20 px-8 py-3 rounded-md border-4 border-dashed font-serif text-xl transition-all duration-300
          ${seleccion !== null 
            ? 'bg-[#a799c7] border-[#e2e8f0] text-[#e2e8f0] cursor-pointer shadow-lg active:scale-95' 
            : 'bg-[#b8adc9] border-[#d1c8de] text-[#d1c8de] opacity-60 cursor-not-allowed'
          }
        `}
      >
        Seleccionar
      </button>

    </main>
  );
}