"use client";
import { MapPin, Ticket, PlayCircle } from "lucide-react";

const GIGS = [
  { id: 1, date: "", club: "", city: "", type: "" },
  { id: 2, date: "", club: "", city: "", type: "" },
  { id: 3, date: "", club: "", city: "", type: "" },
];

const GALLERY = [
  { id: 1, url: "/gallery/img4.jpg", title: "Amendoeiras 2026" }, // Mudado de src para url e jpg para png
  { id: 2, url: "/gallery/img2.jpg", title: "Amendoeiras 2026" },
  { id: 3, url: "/gallery/img3.jpg", title: "Amendoeiras 2026" },
  { id: 4, url: "/gallery/img1.jpg", title: "Vila F´Liz 2025" },
  { id: 5, url: "/gallery/img5.jpg", title: "Amendoeiras 2026" },
];

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen pb-32">
      {/* 1. LOGOTIPO ANIMADO */}
      <section className="flex flex-col items-center justify-center py-16 overflow-hidden">
        <div className="relative group">
          {/* Efeito de brilho por trás do logo */}
          <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition-all duration-700 animate-pulse"></div>
          
          <img 
            src="/icons/icon-512x512.png" 
            alt="LUDKIN Logo" 
            className="w-80 h-80 relative animate-[float_6s_ease-in-out_infinite] hover:scale-110 transition-transform duration-500"
          />
        </div>
        <h1 className="mt-8 text-6xl font-black italic tracking-tighter uppercase italic">Soul Sounds</h1>
      </section>

      {/* 2. CARROSSEL DE FOTOS (GALERIA) */}
      <section className="mb-16">
        <h2 className="px-6 text-sm font-mono text-gray-500 tracking-[0.3em] uppercase mb-4">Gallery</h2>
        <div className="flex gap-4 overflow-x-auto px-6 scrollbar-hide snap-x">
          {GALLERY.map((img) => (
            <div key={img.id} className="min-w-[80%] md:min-w-[40%] h-64 rounded-2xl overflow-hidden snap-center relative group">
              <img src={img.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-bold uppercase tracking-widest">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VÍDEOS (ÚLTIMAS ATUAÇÕES) */}
      <section className="px-6 mb-16 flex flex-col items-center">
        <h2 className="w-full text-sm font-mono text-gray-500 tracking-[0.3em] uppercase mb-4">
          Latest Performance
        </h2>
        
        {/* Contentor 9:16 centrado */}
        <div className="w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl shadow-cyan-500/5">
          <iframe 
            className="w-full h-full"
            src="https://youtube.com/embed/vyfKCLlJK5c" 
            title="LUDKIN Vertical Set"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* 4. GIGS (O teu código original estilizado) */}
      <section className="px-6">
        <h2 className="text-sm font-mono text-gray-500 tracking-[0.3em] uppercase mb-4"> Upcoming Gigs</h2>
        <div className="space-y-4">
          {GIGS.map((gig) => (
            <div key={gig.id} className="group flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-all">
              <div className="flex items-center gap-6">
                <span className="text-lg font-bold font-mono text-cyan-500">{gig.date}</span>
                <div>
                  <h3 className="font-bold group-hover:text-cyan-400 transition-colors">{gig.club}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500 italic">
                    <MapPin size={10} />
                    <span>{gig.city}</span>
                  </div>
                </div>
              </div>
              <Ticket size={18} className="text-gray-700 group-hover:text-white transition-all" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}