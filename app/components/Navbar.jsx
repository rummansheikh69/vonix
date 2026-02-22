import Link from "next/link";
import { RiTelegram2Fill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="max-w-5xl mx-auto px-6 lg:px-0 h-14  flex items-center justify-between fixed top-0 inset-x-0 z-50 backdrop-blur-md">
      <Link href={"/"}>
        <span className="font-semibold text-lg">Onex</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 lg:ml-24">
        <Link
          href="/portfolio"
          className="relative text-sm text-zinc-400 hover:text-white duration-200 group"
        >
          <span>Portfolio</span>
          <div className=" group-hover:w-full duration-200 w-0 h-[1px] absolute -bottom-1 left-0 bg-gradient-to-r from-zinc-400 to-transparent"></div>
        </Link>
        <a
          href="#services"
          className="relative text-sm text-zinc-400 hover:text-white duration-200 group"
        >
          <span>Services</span>
          <div className=" group-hover:w-full duration-200 w-0 h-[1px] absolute -bottom-1 left-0 bg-gradient-to-r from-zinc-400 to-transparent"></div>
        </a>
        <a
          href="#process"
          className="relative text-sm text-zinc-400 hover:text-white duration-200 group"
        >
          <span>Process</span>
          <div className=" group-hover:w-full duration-200 w-0 h-[1px] absolute -bottom-1 left-0 bg-gradient-to-r from-zinc-400 to-transparent"></div>
        </a>
        <a
          href="#why"
          className="relative text-sm text-zinc-400 hover:text-white duration-200 group"
        >
          <span>Why Onex</span>
          <div className=" group-hover:w-full duration-200 w-0 h-[1px] absolute -bottom-1 left-0 bg-gradient-to-r from-zinc-400 to-transparent"></div>
        </a>
        <a
          href="#faq"
          className="relative text-sm text-zinc-400 hover:text-white duration-200 group"
        >
          <span>FAQ</span>
          <div className=" group-hover:w-full duration-200 w-0 h-[1px] absolute -bottom-1 left-0 bg-gradient-to-r from-zinc-400 to-transparent"></div>
        </a>
      </nav>
      <Link
        href={"https://t.me/onex_to"}
        target="_blank"
        className=" hidden md:block"
      >
        <button className="border border-zinc-800 px-4 py-2 text-sm rounded-lg text-black bg-white flex items-center gap-2 cursor-pointer">
          <RiTelegram2Fill size={16} /> Start on Telegram
        </button>
      </Link>
      <button className=" p-2 block md:hidden">
        <div>
          <FiMenu className=" text-white size-5" />
        </div>
      </button>
    </header>
  );
}
