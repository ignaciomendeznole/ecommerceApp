import React from "react";
import { View, Text, FlatList } from "react-native";
import MainCategoryCard from "../CategoryCard/index";
import styles from "./styles";

const categoryCardInfo = [
  {
    id: "1",
    imageUri:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dman&psig=AOvVaw0zXgZWu1-nN8_iu7jVt1ar&ust=1621602086569000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOin69Wo2PACFQAAAAAdAAAAABAD",
    categoryName: "Men",
  },
  {
    id: "2",
    imageUri:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fblack-woman&psig=AOvVaw36CJmCqz9MQieWrMSNkuTn&ust=1621602059767000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCuucqo2PACFQAAAAAdAAAAABAD",
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
          <MainCategoryCard
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
