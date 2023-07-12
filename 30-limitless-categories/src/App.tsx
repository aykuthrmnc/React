import { useState } from "react";
import CategorySelect from "./CategorySelect";

const App = () => {
  const [parent, setParent] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories]: any = useState([
    {
      id: 1,
      name: "A",
      parent: 0,
    },
    {
      id: 2,
      name: "B",
      parent: 0,
    },
    {
      id: 3,
      name: "C",
      parent: 0,
    },
    {
      id: 4,
      name: "B-1",
      parent: 2,
    },
    {
      id: 5,
      name: "B-2",
      parent: 2,
    },
    {
      id: 6,
      name: "B-3",
      parent: 2,
    },
    {
      id: 7,
      name: "B-2-1",
      parent: 5,
    },
    {
      id: 8,
      name: "B-2-2",
      parent: 5,
    },
    {
      id: 9,
      name: "B-2-2 sub-1",
      parent: 8,
    },
    {
      id: 10,
      name: "B-2-2 sub-1 / 2",
      parent: 9,
    },
  ]);

  const filteredCategories = categories.filter((category: any) => category.parent === parent);

  const findCategories = (data: any, parent: any): any => {
    if (parent === 0) {
      return [];
    }
    const category = data.find((c: any) => c.id === parent);
    return [category, category.parent !== 0 && findCategories(data, category.parent)];
  };

  const getBreadcrumb = (data: any, parent: any) => {
    return findCategories(data, parent).flat(Infinity).filter(Boolean).reverse();
  };

  const breadcrumb = getBreadcrumb(categories, parent);

  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault();
    setCategories([
      ...categories,
      {
        id: categories.length + 1,
        name: categoryName,
        parent,
      },
    ]);
    setCategoryName("");
  };

  const deleteCategory = (id: number) => {
    setCategories(categories.filter((category: any) => category.id !== id));
  };

  const subCategoryHandle = (category: any) => {
    setParent(category.id);
  };

  const getSubCategoryCount = (id: number) => {
    return (categories && categories.filter((c: any) => c.parent === id).length) || 0;
  };

  return (
    <div className="container mx-auto lg:px-36 py-4">
      <form className="flex gap-x-4 mb-4" onSubmit={submitHandle}>
        <input
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          type="text"
          placeholder="Kategori Adı"
          className="flex-1 border border-gray-300 outline-none focus:border-indigo-600 h-10 px-4 rounded-md text-sm"
        />
        <button
          disabled={!categoryName}
          type="submit"
          className="h-10 bg-indigo-600 text-white text-sm px-4 rounded-md disabled:opacity-50 disabled:pointer-events-none"
        >
          Ekle
        </button>
      </form>
      {breadcrumb.length > 0 && (
        <nav className="bg-yellow-50 border border-yellow-600 flex items-center gap-x-4 text-sm">
          {breadcrumb.map((c: any, key: number) => (
            <button key={key} onClick={() => setParent(c.parent)}>
              {c.name}
            </button>
          ))}
        </nav>
      )}
      <div className="grid gap-y-4">
        {filteredCategories.map((category: any, key: number) => (
          <div key={key} className="bg-zinc-100 border-zinc-400 p-4 rounded-md text-sm flex items-center justify-between">
            {category.name}
            <nav className="flex items-center gap-x-2">
              <button onClick={() => subCategoryHandle(category)} className="h-7 px-4 rounded bg-indigo-600 text-white">
                Alt Kategoriler ({getSubCategoryCount(category.id)})
              </button>
              <button onClick={() => deleteCategory(category.id)} className="h-7 px-4 rounded bg-red-600 text-white">
                Sil
              </button>
            </nav>
          </div>
        ))}
      </div>

      <CategorySelect categories={categories} />
    </div>
  );
};
export default App;
