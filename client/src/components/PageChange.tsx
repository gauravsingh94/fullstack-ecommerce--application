const PageChange = () => {
  return (
    <div className="flex justify-center items-center gap-4 h-12">
      <button className="bg-black w-12 h-8 rounded-lg text-white hover:bg-white hover:text-black hover:font-bold border border-black transition duration-300 ease-in-out ">{"<"}</button>
      <h1>2 of 20</h1>
      <button className="bg-black w-12 h-8 rounded-lg text-white hover:bg-white hover:text-black hover:font-bold border border-black transition duration-300 ease-in-out ">{">"}</button>
    </div>
  );
};

export default PageChange;
