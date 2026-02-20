import { Send } from "lucide-react";

export default function Navbar() {
  return (
    <header className="max-w-5xl mx-auto px-6 lg:px-0 h-14  flex items-center justify-between">
      <span className="font-semibold text-lg">Vonix</span>

      <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 lg:ml-24">
        <a href="#">Services</a>
        <a href="#">Process</a>
        <a href="#">Why Zylo</a>
        <a href="#">FAQ</a>
      </nav>
      <button className="border border-zinc-800 px-4 py-2 rounded-lg text-white flex items-center gap-2">
        <Send size={16} /> Start on Telegram
      </button>
    </header>
  );
}
