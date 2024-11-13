import { Tractor } from 'lucide-react';

export function Header() {
  return (
    <header className="relative h-[70vh]">
      <div className="absolute inset-0">
        <img
          src="/Public/hero-tractor.jpg"  // Update path to your local image
          alt="Modern John Deere Tractor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      </div>
      
      <nav className="relative z-10 flex items-center justify-between px-6 py-6">
        <div className="flex items-center space-x-3">
          <Tractor size={36} className="text-yellow-400" />
          <span className="text-3xl font-bold text-white tracking-tight">L3 Importations</span>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 -mt-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Premium Tractor Import
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
          Specialized in quality agricultural machinery from top European brands
        </p>
      </div>
    </header>
  );
}
