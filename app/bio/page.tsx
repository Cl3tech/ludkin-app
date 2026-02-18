"use client";

export default function BioPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-12 pb-32">
      <div className="flex flex-col items-center text-center">
        {/* Foto de Perfil com brilho Neon */}
        <div className="relative w-40 h-40 mb-8">
          <div className="absolute -inset-1 bg-cyan-500 rounded-full blur opacity-25"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
            <img 
              src="/icons/icon-512x512.png" 
              className="w-full h-full object-cover" 
              alt="LUDKIN" 
            />
          </div>
        </div>
        
        <h1 className="text-4xl font-black tracking-tighter uppercase mb-2 text-white italic">
          LUDKIN
        </h1>
        <p className="text-cyan-500 font-mono text-xs tracking-[0.3em] mb-8 uppercase">
          From Vila Flor to the World
        </p>
        
        <div className="space-y-6 text-gray-300 leading-relaxed font-light text-justify">
          <p>
             De Vila Flor, no coração de Trás-os-Montes, LUDKIN é a prova de que a paixão pela música eletrónica não tem fronteiras geográficas. Inspirado pelo isolamento criativo e pelas paisagens profundas do norte de Portugal, desenvolveu uma sonoridade que equilibra o peso do techno industrial com melodias atmosféricas.
          </p>
          <p>
            Mais do que um DJ, LUDKIN é um entusiasta da produção musical. No seu estúdio, transforma texturas orgânicas e sons captados na natureza transmontana em batidas eletrónicas precisas, criando uma ponte única entre o tradicional e o futurista.
          </p>
          <p>
            A sua missão é clara: elevar a cultura clubbing e mostrar que a inovação sonora pode nascer em qualquer lugar, desde que haja dedicação ao sintetizador e amor à pista.
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="grid grid-cols-1 gap-4 w-full mt-12">
          <a href="mailto:djludkin@gmail.com" className="flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all group">
            <span className="font-bold text-sm uppercase tracking-widest">Bookings</span>
            <span className="text-xs text-gray-500 group-hover:text-cyan-400 font-mono">djludkin@gmail.com</span>
          </a>
          
          <div className="flex gap-4">
            <a href="#" className="flex-1 bg-white/5 border border-white/10 p-4 rounded-2xl text-center hover:bg-white/10 transition-all">
              <span className="text-sm font-bold font-mono">Instagram</span>
            </a>
            <a href="#" className="flex-1 bg-white/5 border border-white/10 p-4 rounded-2xl text-center hover:bg-white/10 transition-all">
              <span className="text-sm font-bold font-mono">Soundcloud</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}