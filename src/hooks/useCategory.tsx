import { createContext, useState, ReactNode, useContext, useEffect } from 'react';

interface Category {
  name: string;
}

interface CategoryContextData {
  category: Category | null;
  deleteCategory: () => void;
  addCategory: (category: Category) => void;
}

interface CategoryProviderProps {
  children: ReactNode;
}

const CategoryContext = createContext<CategoryContextData>(
  {} as CategoryContextData
);

export function CategoryProvider({ children }: CategoryProviderProps ) {
  const [category, setCategory] = useState<Category | null>(() => {
    const categoryExists = localStorage.getItem('@Hunppy:category');

    if (typeof categoryExists === 'string') {
      const parsedCategory = JSON.parse(categoryExists);
      return parsedCategory;
    }
    
    return null;
  });

  function addCategory(newCategory: Category) {
    setCategory(newCategory);
  }

  function deleteCategory() {
    localStorage.removeItem('@Hunppy:category');
    setCategory(null);
  }

  useEffect(() => {
    localStorage.setItem('@Hunppy:category', JSON.stringify(category))
  }, [category]);

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