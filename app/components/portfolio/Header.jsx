import React from "react";

function Header() {
  return (
    <div className=" relative bg-[linear-gradient(to_right,#161616_2px,transparent_2px),linear-gradient(to_bottom,#161616_2px,transparent_2px)] bg-[size:50px_50px] w-full flex items-center justify-center h-[40vh] sm:h-[60vh] 2xl:h-[50vh]">
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-0 h-56 pointer-events-none z-10 bg-gradient-to-b from-transparent to-[#050505]"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-56 pointer-events-none z-10 bg-gradient-to-t from-transparent to-[#0e0e0e]"
      />
      <div className=" pt-14 max-w-5xl mx-auto px-4 lg:px-0"></div>
    </div>
  );
}

export default Header;
