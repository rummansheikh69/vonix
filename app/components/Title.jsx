function Title({ title, subTitle }) {
  return (
    <div className=" w-full flex items-center justify-center">
      <div className="">
        <h4 className=" uppercase text-text-gray font-medium tracking-[3px] text-center text-sm md:text-[15px]">
          {title}
        </h4>
        <h2 className=" text-3xl md:text-6xl font-semibold tracking-tight mt-3 md:mt-5 mb-20 text-center ">
          {subTitle}
        </h2>
      </div>
    </div>
  );
}

export default Title;
