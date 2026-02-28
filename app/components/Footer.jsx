import { RiTelegram2Fill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 max-w-5xl mx-auto px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-4 items-center md:justify-between">
        <div className="  flex items-center gap-4">
          <span className="font-semibold text-lg">Vonix</span>
          <div className=" h-4 border-l border-primary-border" />
          <span className=" text-[13px] font-medium text-text-gray">
            Digital branding & Automation.
          </span>
        </div>

        <div className=" flex items-center gap-4">
          <a
            href="https://t.me/onex_to"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className=" size-9 rounded-lg border border-primary-border bg-[#0a0a0a] hover:bg-[#111111] duration-200 flex items-center justify-center group cursor-pointer">
              <RiTelegram2Fill className="size-[19px] text-icon group-hover:text-white duration-200" />
            </div>
          </a>
          <a
            href="https://discord.gg/T9gDn3d5ZW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className=" size-9 rounded-lg border border-primary-border bg-[#0a0a0a] hover:bg-[#111111] duration-200 flex items-center justify-center group cursor-pointer">
              <FaDiscord className="size-[19px] text-icon group-hover:text-white duration-200" />
            </div>
          </a>
        </div>
      </div>

      <div className=" my-7 w-full border-t border-primary-border" />

      <h3 className="text-[13px] font-medium text-text-gray/70 text-center md:text-left">
        &copy; {new Date().getFullYear()} Vonix. All rights reserved.
      </h3>
    </footer>
  );
}
