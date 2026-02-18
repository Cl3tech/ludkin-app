"use client";
import { Play } from "lucide-react";

const VIDEOS = [
  { id: "vyfKCLlJK5c", title: "Amendoeiras", date: "2026" },
  { id: "lHq4Is7riDE", title: "Vila F'Liz", date: "2025" },
  { id: "0rGIE_O-Ccc", title: "Amendoeiras", date: "2026" },
];

export default function VideosPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-12 pb-32">
      <header className="mb-10">
        <h1 className="text-5xl font-black tracking-tighter uppercase italic text-white">Videos</h1>
        <p className="text-gray-500 mt-2 font-mono tracking-widest">LIVE PERFORMANCES & SETS</p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {VIDEOS.map((video) => (
          <div key={video.id} className="group">
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 mb-3">
              <iframe 
                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-between items-center px-1">
              <h3 className="font-bold text-lg">{video.title}</h3>
              <span className="text-xs font-mono text-gray-600">{video.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}