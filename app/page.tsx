import Link from 'next/link';
import { Wind, PenLine } from 'lucide-react'; // Mantenemos los íconos profesionales

export default function Home() {
  return (
    // min-h-[100dvh] asegura la altura perfecta en móviles, w-full usa todo tu monitor
    <main className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center bg-[#1a1c29] overflow-hidden px-6 transition-all duration-500">
      
      {/* Luces de fondo: Pequeñas en móvil, Gigantes en PC (md:w-[600px]) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 md:w-[800px] md:h-[800px] bg-[#a799c7] rounded-full mix-blend-screen filter blur-[100px] md:blur-[180px] opacity-20 md:opacity-10 pointer-events-none transition-all duration-700"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 md:w-[800px] md:h-[800px] bg-[#eca884] rounded-full mix-blend-screen filter blur-[100px] md:blur-[180px] opacity-10 pointer-events-none transition-all duration-700"></div>

      {/* Header: Se adapta a los márgenes en pantallas grandes (md:px-16) */}
      <div className="absolute top-8 md:top-12 w-full px-8 md:px-16 lg:px-24 flex justify-between items-start z-20">
        
        {/* Botón izquierdo: Respiración */}
        <div className="flex flex-col items-start gap-2">
          <Link 
            href="/sos" 
            className="w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg active:scale-90 transition-all duration-300 flex items-center justify-center group hover:bg-white/10 text-white/80 hover:text-white"
          >
            <Wind className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
          </Link>
          <span className="text-slate-400 text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-60 ml-1">Respirar</span>
        </div>

        {/* Botón derecho: Check-in */}
        <div className="flex flex-col items-end gap-2">
          <Link 
            href="/checkin" 
            className="w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg active:scale-90 transition-all duration-300 flex items-center justify-center group hover:bg-white/10 text-[#eca884]/80 hover:text-[#eca884]"
          >
            <PenLine className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
          </Link>
          <span className="text-slate-400 text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-60 mr-1">Check-in</span>
        </div>
      </div>

      {/* Contenido Central: Crece y respira en pantallas grandes */}
      <div className="flex flex-col items-center gap-16 md:gap-24 w-full z-10 mt-8 md:mt-0">
        <div className="text-center space-y-3 md:space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] text-white tracking-wide drop-shadow-lg font-medium transition-all duration-500">Hola.</h1>
          <p className="text-xl md:text-3xl lg:text-4xl text-slate-300 italic opacity-80 drop-shadow-sm font-light transition-all duration-500">¿Necesitas ayuda?</p>
        </div>

        {/* Botón HELP: Pasa de 56x56 a 80x80 en PC */}
        <Link 
          href="/sos" 
          className="w-56 h-56 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-tr from-[#df9a76] to-[#f3bca0] shadow-[0_0_60px_rgba(236,168,132,0.25),inset_0_4px_20px_rgba(255,255,255,0.4),inset_0_-4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_120px_rgba(236,168,132,0.4)] active:scale-95 border border-[#f3bca0]/30 group"
        >
          <span className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.25em] ml-3 md:ml-4 drop-shadow-md font-medium group-hover:tracking-[0.3em] transition-all duration-500">HELP</span>
        </Link>
      </div>

    </main>
  );
}