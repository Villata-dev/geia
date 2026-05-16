"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Loader2, CheckCircle2, MessageSquareText } from 'lucide-react'; // Añadimos ícono de nota
import Link from 'next/link';

export default function CheckinPage() {
  const [seleccion, setSeleccion] = useState<number | null>(null);
  const [nota, setNota] = useState(''); // Estado para la nota opcional
  const [guardando, setGuardando] = useState(false);
  const [guardadoExito, setGuardadoExito] = useState(false);
  const router = useRouter();

  const emociones = [
    { id: 1, emoji: '😄', label: 'Muy bien' },
    { id: 2, emoji: '🙂', label: 'Bien' },
    { id: 3, emoji: '😐', label: 'Neutral' },
    { id: 4, emoji: '😔', label: 'Mal' },
    { id: 5, emoji: '😠', label: 'Muy mal' },
  ];

  const handleGuardar = () => {
    if (seleccion === null) return;
    setGuardando(true);

    const historialGuardado = localStorage.getItem('geia_checkins');
    const historial = historialGuardado ? JSON.parse(historialGuardado) : [];

    const nuevoRegistro = {
      fecha: new Date().toISOString(),
      emocionId: seleccion,
      nota: nota.trim(), // Guardamos la nota (limpiando espacios)
    };
    historial.push(nuevoRegistro);
    localStorage.setItem('geia_checkins', JSON.stringify(historial));

    setTimeout(() => {
      setGuardando(false);
      setGuardadoExito(true);
      setTimeout(() => {
        router.push('/');
      }, 1200); // Un poco más de tiempo para disfrutar el éxito
    }, 1000);
  };

  return (
    <main className="relative flex min-h-[100dvh] w-full flex-col items-center justify-start bg-gradient-to-br from-[#f3bca0] via-[#eca884] to-[#df9a76] overflow-hidden px-6 pt-24 md:pt-32 pb-10 transition-all duration-500">
      
      {/* Luces de fondo sutiles */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-[120px] opacity-30 pointer-events-none"></div>

      {/* Botón Volver (Header fijo arriba) */}
      <div className="absolute top-8 md:top-12 left-6 md:left-12 z-20">
        <Link 
          href="/" 
          className="w-12 h-12 md:w-16 md:h-16 bg-white/20 border border-white/40 backdrop-blur-md rounded-2xl shadow-sm active:scale-90 transition-all duration-300 flex items-center justify-center group hover:bg-white/30 text-white"
        >
          <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Contenido Central con transiciones de opacidad y posición */}
      <div className="flex flex-col items-center z-10 w-full max-w-xl transition-all duration-700 ease-out">
        <h2 className="text-4xl md:text-5xl text-white font-medium mb-16 md:mb-20 text-center drop-shadow-md">
          ¿Cómo te sientes hoy?
        </h2>

        {/* Selector de Emociones */}
        <div className="flex items-center justify-center gap-3 md:gap-5 w-full mb-12 flex-wrap">
          {emociones.map((emocion) => {
            const isSelected = seleccion === emocion.id;
            return (
              <button
                key={emocion.id}
                onClick={() => !guardando && !guardadoExito && setSeleccion(emocion.id)}
                disabled={guardando || guardadoExito}
                className={`w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-4xl transition-all duration-500 ease-out outline-none
                  ${isSelected 
                    ? 'bg-white ring-4 ring-white/50 scale-110 shadow-2xl translate-y-[-10px]' 
                    : 'bg-white/30 backdrop-blur-sm hover:bg-white/50 hover:scale-105 shadow-sm text-white/90'
                  }
                  ${seleccion !== null && !isSelected ? 'opacity-50 scale-95' : ''} // Suavizamos los no seleccionados
                `}
                title={emocion.label}
              >
                {emocion.emoji}
              </button>
            );
          })}
        </div>

        {/* Sección de Nota Opcional - Aparece animada */}
        <div className={`w-full transition-all duration-700 ease-in-out ${seleccion !== null ? 'opacity-100 max-h-[300px] mb-12' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <div className="bg-[#1a1c29]/90 border border-white/10 p-5 rounded-2xl shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3 text-white/70">
                    <MessageSquareText className="w-5 h-5" />
                    <span className="text-sm font-medium tracking-wide uppercase">¿Por qué? (Opcional)</span>
                </div>
                <textarea 
                    value={nota}
                    onChange={(e) => setNota(e.target.value)}
                    placeholder="Escribe una frase corta aquí..."
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#eca884] focus:border-[#eca884] outline-none transition resize-none text-base"
                />
            </div>
        </div>


        {/* Botón Guardar - Siempre visible, pero con estilo dinámico */}
        <button
          onClick={handleGuardar}
          disabled={seleccion === null || guardando || guardadoExito}
          className={`px-8 py-4 md:px-12 md:py-5 rounded-full font-medium text-lg md:text-xl transition-all duration-500 flex items-center justify-center gap-2 min-w-[200px] md:min-w-[250px]
            ${seleccion !== null 
              ? 'bg-[#1a1c29] text-white shadow-[0_10px_30px_rgba(26,28,41,0.3)] hover:shadow-[0_10px_40px_rgba(26,28,41,0.5)] hover:-translate-y-1 active:translate-y-0 cursor-pointer' 
              : 'bg-white/40 text-white/90 border border-white/30 cursor-not-allowed shadow-sm opacity-60'
            }
            ${guardadoExito ? 'bg-[#a799c7] text-white shadow-none hover:translate-y-0' : ''}
          `}
        >
          {guardando ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" /> Guardando...
            </>
          ) : guardadoExito ? (
            <>
              <CheckCircle2 className="w-6 h-6" /> ¡Guardado!
            </>
          ) : (
            'Guardar registro'
          )}
        </button>
      </div>

    </main>
  );
}