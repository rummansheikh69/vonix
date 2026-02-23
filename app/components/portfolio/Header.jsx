import React from "react";

function Header() {
  return (
    <div className=" relative bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:50px_50px] w-full  h-[40vh] sm:h-[60vh] 2xl:h-[50vh]">
      <div className=" relative pt-14 max-w-5xl mx-auto px-4 lg:px-0 z-20 flex flex-col items-center justify-center w-full h-full ">
        <h1 className=" text-5xl md:text-7xl font-bold mb-5  bg-gradient-to-r from-white  to-[#757575] bg-clip-text text-transparent">
          Our Work
        </h1>
        <h3 className=" text-center max-w-2xl text-lg font-semibold">
          We pride ourselves on delivering exceptional results{" "}
          <span className=" text-zinc-400">
            for our clients. Browse through our portfolio to see how we have
            helped business transform their ideas into reality.
          </span>
        </h3>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-0 h-56 pointer-events-none z-10 bg-gradient-to-b from-transparent to-[#050505]"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-56 pointer-events-none z-10  bg-gradient-to-t from-transparent to-[#0e0e0e]"
      />
    </div>
  );
}

export default Header;
