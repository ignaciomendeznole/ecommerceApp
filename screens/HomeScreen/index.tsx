import API, { graphqlOperation } from "@aws-amplify/api";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryComponent from "../../components/CategoriesList";
import CategoryScrollableCard from "../../components/MainCategories/CategoryScrollableCard";
import { listCategorys } from "../../src/graphql/queries";
import { Category } from "../../types";

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
  const [categories, setCategories] = useState<Category[] | null>([]);
  const fetchCategories = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listCategorys));
      setCategories(response.data.listCategorys.items);
      console.log(categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  });

  if (!categories) {
    return <ActivityIndicator />;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CategoryScrollableCard />
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryComponent
            id={item.id}
            categoryName={item.categoryName}
            product={item.product.items}
          />
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;
