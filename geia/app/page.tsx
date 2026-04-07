export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6">
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-slate-800 text-center tracking-wide">
          Geia
        </h1>
        <p className="text-slate-500 mb-8">¿Cómo te sientes hoy?</p>

        {/* Botón SOS principal */}
        <button className="w-64 h-64 rounded-full bg-rose-500 hover:bg-rose-600 shadow-2xl flex items-center justify-center transition-transform active:scale-95">
          <span className="text-white text-3xl font-bold tracking-wide text-center leading-tight">
            NECESITO<br/>AYUDA
          </span>
        </button>

        {/* Acceso a Check-in */}
        <button className="mt-12 px-8 py-4 rounded-2xl bg-white shadow-sm border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 active:scale-95 transition-all w-full">
          Hacer un check-in rápido
        </button>
      </div>
    </main>
  );
}