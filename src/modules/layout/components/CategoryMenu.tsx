import { useCategoryStore } from "@/src/store/categoryStore";
import { Category } from "@/utils/posts";
import { categories } from "@/utils/postsConstants";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { startCase } from "lodash";

export function CategoryMenu(): JSX.Element {
  const categoryState = useCategoryStore();
  const renderCategories = (categories) => {
    return (
      <MenuList>
        {categories.map((category: Category) => (
          <MenuItem
            key={category}
            onClick={() => categoryState.setActiveCategory(category)}
          >
            {startCase(category.replace("-", " "))}
          </MenuItem>
        ))}
      </MenuList>
    );
  };

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            ml="auto"
            mr={4}
          >
            {startCase(categoryState.activeCategory.replace("-", " "))}
          </MenuButton>
          {renderCategories(categories)}
        </>
      )}
    </Menu>
  );
}
