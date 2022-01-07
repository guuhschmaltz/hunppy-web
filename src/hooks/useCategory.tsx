import { createContext, useState, ReactNode, useContext } from 'react';

interface Category {
  name: string;
}

interface CategoryContextData {
  category: Category | null;
  deleteCategory: (category: Category) => void;
  addCategory: (category: Category) => void;
}

interface CategoryProviderProps {
  children: ReactNode;
}

const CategoryContext = createContext<CategoryContextData>(
  {} as CategoryContextData
);

export function CategoryProvider({ children }: CategoryProviderProps ) {
  const [category, setCategory] = useState<Category | null>(null);

  function addCategory(newCategory: Category) {
    setCategory(newCategory);
  }

  function deleteCategory() {
    setCategory(null);
  }
  return (
    <CategoryContext.Provider value={{ category, deleteCategory, addCategory}}>
      { children }
    </CategoryContext.Provider>
  )
}

export function useCategory() {
  const context = useContext(CategoryContext);
  return context;
}