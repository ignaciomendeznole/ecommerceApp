import React from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryComponent from "../../components/CategoriesList";
import Category from "../../components/CategoriesList";
import CategoryScrollableCard from "../../components/MainCategories/CategoryScrollableCard";

import styles from "./styles";

const dummyCategories = [
  {
    title: "Latest Sale!",
    id: "1",
    product: [
      {
        id: "1",
        productName: "Basic Slim Fit T-Shirt",
        price: 27,
        imageUri: "../../assets/CategoryCardsImages/woman.jpeg",
      },
      {
        id: "2",
        productName: "Bomber Jacket",
        price: 270,
        imageUri: "../../assets/CategoryCardsImages/woman.jpeg",
      },
      {
        id: "3",
        productName: "Cargo Pants",
        price: 27,
        imageUri: "../../assets/CategoryCardsImages/woman.jpeg",
      },
    ],
  },
  {
    title: "Latest Sale!",
    id: "2",
    product: [
      {
        id: "1",
        productName: "Basic Slim Fit T-Shirt",
        price: 27,
        imageUri: "../../assets/CategoryCardsImages/woman.jpeg",
      },
      {
        id: "2",
        productName: "Bomber Jacket",
        price: 270,
        imageUri: "../../assets/CategoryCardsImages/woman.jpeg",
      },
      {
        id: "3",
        productName: "Cargo Pants",
        price: 27,
        imageUri: "../../assets/CategoryCardsImages/woman.jpeg",
      },
    ],
  },
  {
    title: "Latest Sale!",
    id: "3",
    product: [
      {
        id: "1",
        productName: "Basic Slim Fit T-Shirt",
        price: 27,
        imageUri: "../../assets/CategoryCardsImages/woman.jpeg",
      },
      {
        id: "2",
        productName: "Bomber Jacket",
        price: 270,
        imageUri: "../../assets/CategoryCardsImages/woman.jpeg",
      },
      {
        id: "3",
        productName: "Cargo Pants",
        price: 27,
        imageUri: "../../assets/CategoryCardsImages/woman.jpeg",
      },
    ],
  },
];

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CategoryScrollableCard />
      <FlatList
        data={dummyCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryComponent
            id={item.id}
            categoryName={item.title}
            product={item.product}
          />
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;
