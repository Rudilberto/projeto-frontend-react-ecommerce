const ProductFilters = () => {
  return (
    <section className="flex justify-center items-center py-8 ">
      <input type="radio" name="filter-selection" className="hidden" id="0" />
      <label
        htmlFor="0"
        className="rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
      >
        Todos
      </label>
      <input type="radio" name="filter-selection" className="hidden" id="1" />
      <label
        htmlFor="1"
        className=" bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
      >
        Masculino
      </label>
      <input type="radio" name="filter-selection" className="hidden" id="2" />
      <label
        htmlFor="2"
        dir="rtl"
        className="rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
      >
        Feminino
      </label>
    </section>
  );
};

export default ProductFilters;
