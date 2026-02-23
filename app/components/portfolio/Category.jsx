function Category() {
  const categories = ["All", "Logo", "Web", "Mobile", "Designs", "Software"];
  return (
    <div className=" max-w-5xl mx-auto py-20 px-4 md:px-0">
      <div className=" mx-auto  md:w-max">
        <div className=" px-2 py-1.5 border border-primary-border rounded-full bg-[#080808">
          <div className=" flex items-center gap-2 overflow-x-scroll rounded-full no-scrollbar ">
            {categories?.map((category, i) => (
              <button
                className=" cursor-pointer px-5 py-1.5 border border-primary-border bg-[#111] rounded-full capitalize"
                key={i}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
