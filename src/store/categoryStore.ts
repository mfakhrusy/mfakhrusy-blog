import { Category } from "@/utils/posts";
import createStore from "zustand";

type ActiveCategory = Category;

type CategoryStore = {
  activeCategory: ActiveCategory;
  isCategoryMenuShown: boolean;
  setActiveCategory: (category: Category) => void;
  toggleCategoryMenu: () => void;
};

export const useCategoryStore = createStore<CategoryStore>((set) => ({
  activeCategory: "all",
  isCategoryMenuShown: false,
  setActiveCategory: (category) => set(() => ({ activeCategory: category })),
  toggleCategoryMenu: () =>
    set((state) => ({ isCategoryMenuShown: state.isCategoryMenuShown })),
}));
