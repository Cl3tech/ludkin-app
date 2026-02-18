"use client";
import React, { createContext, useContext, useState, useRef } from "react";

const AudioContext = createContext<any>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = (track: any) => {
    if (!audioRef.current) return;

    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(e => console.error("Erro ao dar play:", e));
        setIsPlaying(true);
      }
    } else {
      // Nova track detetada
      setCurrentTrack(track);
      setIsPlaying(true);
      
      audioRef.current.src = track.url;
      audioRef.current.load(); // FORÇA o browser a carregar o ficheiro .wav [cite: 2026-01-27]
      
      // O play() deve ser chamado após o load ou quando o browser estiver pronto
      audioRef.current.play()
        .then(() => console.log("A tocar:", track.title))
        .catch(err => {
          console.error("Erro ao tocar áudio:", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <AudioContext.Provider value={{ currentTrack, isPlaying, playTrack, setIsPlaying }}>
      {children}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);