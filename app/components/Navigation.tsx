"use client"; // Obrigatório para usar hooks como usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Music, Video, User } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Gigs", href: "/", icon: Calendar },
    { name: "Music", href: "/music", icon: Music },
    { name: "Videos", href: "/videos", icon: Video },
    { name: "Bio", href: "/bio", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-white/10 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
                isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <Icon size={24} />
              <span className="text-[10px] mt-1 uppercase font-bold tracking-widest">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;