import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./styles";

type CategoryCardProps = {
  id: string;
  imageUri: string;
  categoryName: string;
};

const CategoryCard = (props: CategoryCardProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/CategoryCardsImages/woman.jpeg")}
        style={{
          width: 150,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
        imageStyle={{ borderRadius: 15 }}
        blurRadius={5}
      >
        <Text style={styles.text}>{props.categoryName}</Text>
      </ImageBackground>
    </View>
  );
};

export default CategoryCard;
