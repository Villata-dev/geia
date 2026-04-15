import Link from 'next/link';

export default function SOSPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-slate-900 px-6 pt-10">
      
      {/* Botón superior izquierdo: Volver */}
      <div className="absolute top-10 left-6 flex items-start gap-3">
        <Link 
          href="/" 
          className="w-10 h-10 bg-sky-300 rounded shadow-md active:scale-95 transition-transform flex items-center justify-center"
        >
          <span className="text-white text-3xl font-light font-serif">X</span>
        </Link>
        <div className="text-slate-300 text-sm font-serif leading-tight mt-1">
          Volver
        </div>
      </div>

      {/* Título de la sección */}
      <h2 className="text-4xl font-serif text-white tracking-wide mt-24 mb-16">
        Respiración guiada
      </h2>

      {/* Círculo de Respiración (Estático para layout) */}
      {/* Usamos el mismo color `#eca884` de la Home */}
      <div className="flex items-center justify-center w-64 h-64 rounded-full bg-[#eca884] shadow-[0_0_60px_rgba(236,168,132,0.25)] relative mb-16">
        {/* Círculo central más oscuro */}
        <div className="w-32 h-32 rounded-full bg-slate-800 flex items-center justify-center">
        </div>
        
        {/* Indicadores de respiración (Flechas estáticas de layout) */}
        <span className="absolute left-6 text-white text-4xl rotate-180">➜</span>
        <span className="absolute right-6 text-white text-4xl">➜</span>
      </div>

      {/* Bloques de Texto de Instrucción */}
      <div className="flex flex-col items-center gap-6 text-center w-full max-w-sm font-serif mb-12">
        <div className="space-y-1">
          <p className="text-3xl font-semibold text-white">Inhala</p>
          <p className="text-3xl font-semibold text-white">Retén</p>
          <p className="text-3xl font-semibold text-white">Exhala</p>
        </div>
      </div>

      {/* Contadores inferiores */}
      <div className="w-full max-w-sm text-center font-serif space-y-2 mt-auto pb-10">
        <p className="text-sm text-slate-300">14 seg. restantes</p>
        <p className="text-sm text-slate-300">1 de 3 ciclos</p>
      </div>

    </main>
  );
}