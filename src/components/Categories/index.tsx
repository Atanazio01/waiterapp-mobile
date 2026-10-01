import { FlatList } from "react-native";

import { useState } from "react";
import { Category } from "../../types/Category";
import { Text } from "../Text";
import { CategoryContainer, Icon } from "./styles";

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    onSelectCategory(category);
    setSelectedCategory(category);
  }

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <CategoryContainer
            key={category._id}
            onPress={() => handleSelectCategory(category._id)}
          >
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>
            <Text
              style={{ marginLeft: 24 }}
              size={14}
              weight="600"
              opacity={isSelected ? 1 : 0.5}
            >
              {category.name}
            </Text>
          </CategoryContainer>
        );
      }}
    />
  );
}
