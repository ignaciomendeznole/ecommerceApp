import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Product } from "../../types";
import styles from "./styles";

type CategoryCardProps = {
  product: Product;
};

const CategoryCard = (props: CategoryCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://cdn.shopify.com/s/files/1/1952/1993/products/product-image-1689527558_5000x.jpg?v=1614240481",
          }}
          style={styles.image}
        />
        <Text style={{ ...styles.text, fontSize: 20 }}>
          {props.product.productName}
        </Text>
        <Text style={{ ...styles.text, fontSize: 17 }}>
          ${props.product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
