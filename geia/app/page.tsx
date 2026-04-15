import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-900 px-6">
      
      {/* Botón superior izquierdo: Respiración guiada */}
      <div className="absolute top-8 left-6 flex items-start gap-3">
        <Link 
          href="/sos" 
          className="w-8 h-8 bg-indigo-400 rounded shadow-md active:scale-95 transition-transform"
        />
        <div className="text-slate-300 text-sm font-serif leading-tight mt-1">
          Respiración<br />guiada
        </div>
      </div>

      {/* Centro de la pantalla */}
      <div className="flex flex-col items-center gap-16 w-full max-w-md mt-10">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-serif text-white tracking-wide">Hola.</h1>
          <p className="text-xl text-slate-300 font-serif">¿Necesitas ayuda?</p>
        </div>

        {/* Botón HELP gigante */}
        <Link 
          href="/sos" 
          className="w-64 h-64 rounded-full bg-[#eca884] hover:bg-[#df9a76] shadow-[0_0_50px_rgba(236,168,132,0.15)] flex items-center justify-center transition-transform active:scale-95"
        >
          <span className="text-white text-4xl font-serif tracking-widest">HELP</span>
        </Link>
      </div>

    </main>
  );
}