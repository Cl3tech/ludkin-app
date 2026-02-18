"use client";
import { useAudio } from "../context/AudioContext";
import { Play, Pause, X } from "lucide-react";

export default function GlobalPlayer() {
  const { currentTrack, isPlaying, playTrack } = useAudio();

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-40 animate-in slide-in-from-bottom-10">
      <div className="bg-neutral-900 border border-white/10 p-3 rounded-xl flex items-center justify-between shadow-2xl backdrop-blur-lg">
        <div className="flex items-center gap-3">
          <img src={currentTrack.cover} className="w-10 h-10 rounded-md object-cover" alt="" />
          <div>
            <p className="text-xs font-bold text-white truncate w-32">{currentTrack.title}</p>
            <p className="text-[10px] text-gray-400">LUDKIN</p>
          </div>
        </div>
        <button 
          onClick={() => playTrack(currentTrack)}
          className="bg-white text-black p-2 rounded-full hover:scale-105 transition-transform"
        >
          {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" />}
        </button>
      </div>
    </div>
  );
}