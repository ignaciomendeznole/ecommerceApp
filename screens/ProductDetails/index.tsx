import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import ButtonComponent from "../../components/Button";
import ImageCarousel from "../../components/ImageCarousel";
import QuantitySelector from "../../components/QuantitySelector";
import { Product } from "../../types";
import styles from "./styles";

const ProductDetails = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  const navigation = useNavigation();
  navigation.setOptions({
    title: product?.productName || null,
  });

  return (
    <ScrollView>
      <Text>{product?.productName}</Text>
      <ImageCarousel images={product?.images} />
      <Text>{product?.price}</Text>
      <Text>{product?.productDescription}</Text>
      <QuantitySelector quantity={2} setQuantity={() => {}} />
      <ButtonComponent
        text={`Add To Cart`}
        onPress={() => {}}
        containerStyles={{ backgroundColor: "#e3c905" }}
      />
    </ScrollView>
  );
};

export default ProductDetails;
