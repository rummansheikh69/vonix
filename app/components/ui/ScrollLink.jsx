"use client";
import { usePathname, useRouter } from "next/navigation";

export default function ScrollLink({ hash, children, className, onClick }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();

    if (pathname === "/") {
      // Already on home → smooth scroll
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home with hash
      router.push(`/${hash}`);
    }

    // Call optional onClick (like closing mobile menu)
    if (onClick) onClick();
  };

  return (
    <a href={hash} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
