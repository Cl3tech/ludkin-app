"use client";

import { useAudio } from "../context/AudioContext";
import { Play, Pause, Share2, Download, MoreHorizontal } from "lucide-react";

const TRACKS = [
  { id: 1, title: "A Saudade", album: "Original", duration: "3:51", cover: "./icons/saudade.jpg", url: "/audio/Saudade.mp3" },
  { id: 2, title: "Vila Flor de Ferro", album: "Original", duration: "2:30", cover: "./icons/vilaflor.png", url: "/audio/VilaFlorFerro.mp3" },
  { id: 3, title: "Carmen", album: "Original", duration: "3:09", cover: "./icons/carmen.jpg", url: "/audio/Carmen.mp3" },
  { id: 4, title: "Vejam Bem", album: "Original", duration: "3:37", cover: "./icons/vejamBem.jpg", url: "/audio/Vejambem.mp3" },
  { id: 5, title: "Maria", album: "Original", duration: "2:29", cover: "./icons/maria.jpg", url: "/audio/Maria.mp3" },
  { id: 6, title: "Malhão", album: "Original", duration: "2:45", cover: "./icons/malhao.jpg", url: "/audio/Malhão.mp3" },
];

export default function MusicPage() {
  const { playTrack, currentTrack, isPlaying } = useAudio();

  // FUNÇÃO PARA DESCARREGAR
 
  const handleDownload = (url: string, fileName: string): void => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // FUNÇÃO PARA PARTILHAR (Tipada para TS)
  // Definimos a interface rápida para o track ou usamos 'any' se não quiseres definir o modelo todo
  const handleShare = async (track: { title: string; album: string }): Promise<void> => {
    const shareData = {
      title: `Ludkin - ${track.title}`,
      text: `Ouve esta malha: ${track.title} (${track.album})`,
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copiado para a área de transferência!");
      }
    } catch (err) {
      console.error("Erro ao partilhar:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 pt-12 pb-32">
      <header className="mb-10">
        <h1 className="text-5xl font-black tracking-tighter uppercase italic text-white">Musica</h1>
        <p className="text-gray-500 mt-2 font-mono tracking-widest">ORIGINAIS LUDKIN</p>
      </header>

      <div className="space-y-6">
        {TRACKS.map((track) => {
          const isThisTrackPlaying = isPlaying && currentTrack?.id === track.id;

          return (
            <div key={track.id} className="flex items-center justify-between group bg-neutral-900/40 p-3 rounded-xl hover:bg-neutral-800/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 bg-neutral-800 rounded-lg overflow-hidden shrink-0">
                  <img src={track.cover} alt={track.title} className="w-full h-full object-cover opacity-80" />
                  
                  <button 
                    onClick={() => playTrack(track)} 
                    className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity ${isThisTrackPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    {isThisTrackPlaying ? <Pause size={24} className="text-white fill-white" /> : <Play size={24} className="text-white fill-white" />}
                  </button>
                </div>

                <div>
                  <h3 className="font-bold text-cyan-500 leading-tight">{track.title}</h3>
                  <p className="text-sm text-gray-500">{track.album}</p>
                  <p className="text-[10px] text-gray-600 font-mono mt-1">{track.duration}</p>
                </div>
              </div>

              <div className="flex gap-4 text-gray-500">
                {/* BOTÃO DESCARREGAR */}
                <button 
                  onClick={() => handleDownload(track.url, `${track.title}.wav`)}
                  className="hover:text-cyan-400 transition-colors"
                  title="Descarregar"
                >
                  <Download size={20} />
                </button>

                {/* BOTÃO PARTILHAR */}
                <button 
                  onClick={() => handleShare(track)}
                  className="hover:text-white transition-colors"
                  title="Partilhar"
                >
                  <Share2 size={20} />
                </button>
                
                <MoreHorizontal size={20} className="hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}