import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#1a1c29] px-6">
      
      {/* Botón superior izquierdo: Acceso directo a respiración */}
      <div className="absolute top-8 left-6 flex items-start gap-3">
        <Link 
          href="/sos" 
          className="w-10 h-10 bg-[#a799c7] rounded-xl shadow-md active:scale-95 transition-transform flex items-center justify-center"
        >
          <span className="text-white text-xl">🫁</span>
        </Link>
        <div className="text-slate-300 text-sm font-serif leading-tight mt-1">
          Respiración<br />guiada
        </div>
      </div>

      {/* Botón superior derecho: Acceso directo a Check-in */}
      <div className="absolute top-8 right-6 flex items-start gap-3 text-right">
        <div className="text-slate-300 text-sm font-serif leading-tight mt-1">
          Check-in<br />diario
        </div>
        <Link 
          href="/checkin" 
          className="w-10 h-10 bg-[#eca884] rounded-xl shadow-md active:scale-95 transition-transform flex items-center justify-center"
        >
          <span className="text-white text-xl">📝</span>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-16 w-full max-w-md">
        <div className="text-center space-y-2">
          <h1 className="text-6xl font-serif text-white tracking-wide">Hola.</h1>
          <p className="text-xl text-slate-400 font-serif">¿Necesitas ayuda?</p>
        </div>

        {/* Botón HELP: Nos lleva a la ruta /sos */}
        <Link 
          href="/sos" 
          className="w-64 h-64 rounded-full bg-[#eca884] shadow-[0_0_50px_rgba(236,168,132,0.2)] flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        >
          <span className="text-white text-4xl font-serif tracking-widest">HELP</span>
        </Link>
      </div>
    </main>
  );
}