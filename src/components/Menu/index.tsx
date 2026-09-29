import { FlatList, Platform } from "react-native";
import { products } from "../../mocks/products";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";
import {
  AddToCartButton,
  ProductCard,
  ProductDetails,
  ProductImage,
  Separator,
} from "./styles";

const API_URL =
  Platform.OS === "android"
    ? process.env.EXPO_PUBLIC_API_URL_ANDROID
    : process.env.EXPO_PUBLIC_API_URL;
console.log("API_URL", API_URL);

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item: product }) => (
        <ProductCard>
          <ProductImage
            source={{ uri: `${API_URL}/uploads/${product.imagePath}` }}
          />
          <ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text size={14} style={{ marginVertical: 8 }}>
              {product.description}
            </Text>
            <Text weight="600" size={14}>
              {formatCurrency(product.price)}
            </Text>
          </ProductDetails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </ProductCard>
      )}
    />
  );
}
