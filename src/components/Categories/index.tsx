import { FlatList } from "react-native";

import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { Category, Icon } from "./styles";

export function Categories() {
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => (
        <Category key={category._id}>
          <Icon>
            <Text>{category.icon}</Text>
          </Icon>
          <Text size={14} weight="600">
            {category.name}
          </Text>
        </Category>
      )}
    />
  );
}
