import React from "react";
import { View, Text, FlatList } from "react-native";
import { Category, Product } from "../../types";
import CategoryCard from "../CategoryCard";

import styles from "./styles";

const CategoryComponent = ({ categoryName, product }: Category) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryCard product={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryComponent;
