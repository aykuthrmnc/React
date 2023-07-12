import { useEffect, useRef, useState } from "react";

const CategorySelect = ({ categories }: any) => {
  const [selected, setSelected]: any = useState([]);
  const [parents, setParents]: any = useState([]);
  const [parent, setParent] = useState(0);

  const filteredCategories = (parent: any) => categories.filter((c: any) => c.parent === parent);

  const getFilteredCategories = filteredCategories(parent);

  const ref: any = useRef();

  useEffect(() => {
    ref.current.scrollTo({
      left: ref.current.scrollLeft + 450,
      behavior: "smooth",
    });
  }, [selected]);

  return (
    <div className="flex gap-x-4 overflow-x-auto mt-4" ref={ref}>
      {parents.length > 0 &&
        parents.map((parent: any, key: number) => {
          const categories = filteredCategories(parent);
          return (
            <div key={key} className="w-[400px] flex flex-col border border-gray-300 rounded p-4 flex-shrink-0">
              {categories.map((c: any, key2: number) => (
                <button
                  key={key2}
                  onClick={() => {
                    setParent(c.id);
                    setSelected([...selected.slice(0, key2), c.id]);
                    setParents([...parents.slice(0, key2), c.parent]);
                  }}
                  className={`h-7 px-3 rounded text-left text-sm ${selected.includes(c.id) ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          );
        })}
      {(getFilteredCategories.length > 0 && (
        <div className="w-[400px] flex flex-col border border-gray-300 rounded p-4 flex-shrink-0">
          {getFilteredCategories.map((c: any, key: number) => (
            <button
              key={key}
              onClick={() => {
                setParent(c.id);
                setSelected([...selected, c.id]);
                setParents([...parents, c.parent]);
              }}
              className="h-7 px-3 rounded text-left hover:bg-gray-100 text-sm"
            >
              {c.name}
            </button>
          ))}
        </div>
      )) || (
        <div className="bg-green-500 text-white text-sm p-5">
          Kategori seçimi tamamlandı!
          <button className="h-7 bg-white text-green-700 px-4 rounded-md whitespace-nowrap mt-4">Devam Et</button>
        </div>
      )}
    </div>
  );
};
export default CategorySelect;
