"use client"; // Obrigatório para usar Hooks

import { useAudio } from "../context/AudioContext";
import { Play,Pause, Share2, MoreHorizontal } from "lucide-react";

const TRACKS = [
  {
    id: 1,
    title: "Vila Flor de Ferro",
    album: "Original Mix",
    duration: "2:30", // Ajusta a duração real
    cover: "./icons/icon-512x512.png",
    url: "/audio/vila_flor_de_ferro.wav", // <--- O nome tem de ser igual ao do ficheiro
  },
  {
    id: 2,
    title: "Carmen",
    album: "Original Mix",
    duration: "3:09",
    cover: "./icons/icon-512x512.png",
    url: "/audio/carmen.wav",
  },
  {
    id: 3,
    title: "Vejam Bem",
    album: "Original Mix",
    duration: "3:37",
    cover: "./icons/icon-512x512.png",
    url: "/audio/vejam_bem.wav",
  },
  {
    id: 4,
    title: "Maria",
    album: "Original Mix",
    duration: "2:29",
    cover: "./icons/icon-512x512.png",
    url: "/audio/maria.wav",
  },
  {
    id: 5,
    title: "Malhão",
    album: "Original Mix",
    duration: "2:45",
    cover: "./icons/icon-512x512.png",
    url: "/audio/malhao.wav",
  },
  {
    id: 6,
    title: "Reis de Vila Flor",
    album: "Original Mix",
    duration: "3:51",
    cover: "./icons/icon-512x512.png",
    url: "/audio/reis_de_vila_flor.wav",
  }
];

export default function MusicPage() {
  // 2. FUNÇÃO QUE FALTA EXTRAIR DO CONTEXTO
  const { playTrack, currentTrack, isPlaying } = useAudio();

  return (
    <div className="max-w-2xl mx-auto px-6 pt-12 pb-32">
      <header className="mb-10">
        <h1 className="text-5xl font-black tracking-tighter uppercase italic">Musica</h1>
        <p className="text-gray-500 mt-2 font-mono tracking-widest">ORIGINAIS LUDKIN</p>
      </header>

      <div className="space-y-6">
        {TRACKS.map((track) => {
          // Verifica se esta música é a que está a tocar agora
          const isThisTrackPlaying = isPlaying && currentTrack?.id === track.id;

          return (
            <div key={track.id} className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 bg-neutral-800 rounded-lg overflow-hidden shrink-0">
                  <img src={track.cover} alt={track.title} className="w-full h-full object-cover opacity-80" />
                  
                  {/* 3. O EVENTO DE CLIQUE NO BOTÃO */}
                  <button 
                    onClick={() => playTrack(track)} 
                    className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity ${isThisTrackPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    {isThisTrackPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" />}
                  </button>
                </div>

                <div>
                  <h3 className="font-bold text-cyan-500 leading-tight">{track.title}</h3>
                  <p className="text-sm text-gray-500">{track.album}</p>
                  <p className="text-[10px] text-gray-600 font-mono mt-1">{track.duration}</p>
                </div>
              </div>

              <div className="flex gap-4 text-gray-500">
                <Share2 size={18} className="hover:text-white cursor-pointer transition-colors" />
                <MoreHorizontal size={18} className="hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}