import { useState } from 'react';
import { FlatList } from "react-native";
import { products } from "../../mocks/products";
import { Product } from '../../types/Product';
import { API_URL } from '../../utils/apiUrl';
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from '../ProductModal';
import { Text } from "../Text";
import {
  AddToCartButton,
  ProductCard,
  ProductDetails,
  ProductImage,
  Separator,
} from "./styles";


export function Menu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item: product }) => (
          <ProductCard onPress={() => handleOpenModal(product)}>
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
      <ProductModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} product={selectedProduct}/>
    </>
  );
}
