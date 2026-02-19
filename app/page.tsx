"use client";
import { useState, useEffect } from "react";
import { MapPin, Ticket, Download, Share } from "lucide-react";

const GIGS = [
  { id: 1, date: "22/02", club: "Amendoeiras", city: "Loulé", type: "Main Set" },
  { id: 2, date: "07/03", club: "Vila F'Liz", city: "Lisboa", type: "Deep House" },
  { id: 3, date: "15/03", club: "TBA", city: "Porto", type: "Event" },
];

const GALLERY = [
  { id: 1, url: "/gallery/img4.jpg", title: "Amendoeiras 2026" },
  { id: 2, url: "/gallery/img2.jpg", title: "Amendoeiras 2026" },
  { id: 3, url: "/gallery/img3.jpg", title: "Amendoeiras 2026" },
  { id: 4, url: "/gallery/img1.jpg", title: "Vila F´Liz 2025" },
  { id: 5, url: "/gallery/img5.jpg", title: "Amendoeiras 2026" },
];

export default function HomePage() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  useEffect(() => {
    // Verificar se é iOS
    const isIPhone = /iPhone|iPad|iPod/.test(navigator.userAgent);
    setIsIOS(isIPhone);

    // Lógica para Android/PC
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setShowInstallBtn(false);
  };

  return (
    <div className="bg-black text-white min-h-screen pb-32 font-sans">
      
      {/* 1. BOTÃO INSTALAR (ANDROID/PC) */}
      {showInstallBtn && !isIOS && (
        <div className="fixed top-6 right-6 z-50 animate-bounce">
          <button 
            onClick={handleInstallClick}
            className="bg-linear-to-r from-cyan-500 to-purple-600 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 shadow-lg shadow-cyan-500/50 transition-all text-xs uppercase tracking-widest"
          >
            <Download size={16} /> Instalar App
          </button>
        </div>
      )}

      {/* 2. BANNER DICA iOS (IPHONE) */}
      {isIOS && (
        <div className="fixed bottom-4 left-4 right-4 z-50 bg-neutral-900/95 backdrop-blur-md border border-cyan-500/30 p-4 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-4">
            <img src="/icons/icon-192x192.png" className="w-12 h-12 rounded-xl" alt="App Icon" />
            <div className="flex-1">
              <p className="text-sm font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Instala a App DJ LUDKIN</p>
              <p className="text-[10px] text-gray-400 flex items-center gap-1">
                Clica em <Share size={12} className="text-cyan-500" /> e depois "Ecrã Principal"
              </p>
            </div>
            <button onClick={() => setIsIOS(false)} className="text-gray-500 text-xs px-2">X</button>
          </div>
        </div>
      )}

      {/* 3. LOGOTIPO ANIMADO */}
      <section className="flex flex-col items-center justify-center py-16 overflow-hidden">
        <div className="relative group">
          <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition-all duration-700 animate-pulse"></div>
          <img 
            src="/icons/icon-512x512.png" 
            alt="LUDKIN Logo" 
            className="w-80 h-80 relative animate-[float_6s_ease-in-out_infinite] hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h1 className="mt-8 text-6xl font-black italic tracking-tighter uppercase bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent">Soul Sounds</h1>
      </section>

      {/* 4. GALERIA */}
      <section className="mb-16">
        <h2 className="px-6 text-sm font-mono text-gray-500 tracking-[0.3em] uppercase mb-4">Gallery</h2>
        <div className="flex gap-4 overflow-x-auto px-6 scrollbar-hide snap-x">
          {GALLERY.map((img) => (
            <div key={img.id} className="min-w-[80%] md:min-w-[40%] h-64 rounded-2xl overflow-hidden snap-center relative group border border-white/5">
              <img src={img.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">{img.title}</span>
            </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VÍDEO SET VERTICAL */}
      <section className="px-6 mb-16 flex flex-col items-center text-center">
        <h2 className="w-full text-left text-sm font-mono text-gray-500 tracking-[0.3em] uppercase mb-4">Latest Performance</h2>
        <div className="w-full max-w-[320px] aspect-9/16 rounded-3xl overflow-hidden border border-cyan-500/20 bg-neutral-900 shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)]">
          <iframe 
            className="w-full h-full"
            src="https://youtube.com/embed/vyfKCLlJK5c" 
            title="LUDKIN Vertical Set"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* 6. GIGS */}
      <section className="px-6 pb-20">
        <h2 className="text-sm font-mono text-gray-500 tracking-[0.3em] uppercase mb-4">Upcoming Gigs</h2>
        <div className="space-y-4">
          {GIGS.map((gig) => (
            <div key={gig.id} className="group flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-all rounded-xl">
              <div className="flex items-center gap-6">
                <span className="text-lg font-bold font-mono text-cyan-500">{gig.date}</span>
                <div>
                  <h3 className="font-bold group-hover:text-purple-400 transition-colors uppercase tracking-tight">{gig.club}</h3>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-widest">
                    <MapPin size={10} className="text-purple-500" />
                    <span>{gig.city}</span>
                  </div>
                </div>
              </div>
              <Ticket size={18} className="text-gray-700 group-hover:text-cyan-500 transition-all" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}