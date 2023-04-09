import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>(["Naruto"]);
  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories((prev) => {
      return [newCategory, ...prev];
    });
  };

  return (
    <>
      {/** titulo */}
      <h1>GifExpertApp</h1>
      {/** input */}
      <AddCategory
        onNewCategory={(category: string) => onAddCategory(category)}
      />
      <ol>
        {/** listado */}
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
