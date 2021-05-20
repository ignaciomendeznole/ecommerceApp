import React from "react";
import { View, Text, FlatList } from "react-native";
import CategoryCard from "../CategoryCard.tsx";
import styles from "./styles";

const categoryCardInfo = [
  {
    id: "1",
    imageUri: "../../assets/CategoryCardsImages/pexels-photo-845434.jpeg",
    categoryName: "Men",
  },
  {
    id: "2",
    imageUri: "../../assets/CategoryCardsImages/woman.jpeg",
    categoryName: "Woman",
  },

  {
    id: "3",
    imageUri:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F537335799296708767%2F&psig=AOvVaw2pA7uAsdPBrMHtnNGalYwF&ust=1621555722301000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjZz_j71vACFQAAAAAdAAAAABAD",
    categoryName: "Kids",
  },
];

const CategoryScrollableCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      <FlatList
        data={categoryCardInfo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            imageUri={item.imageUri}
            categoryName={item.categoryName}
            id={item.id}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryScrollableCard;
