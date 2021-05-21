import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../screens/HomeScreen";
import ProductDetails from "../screens/ProductDetails";
import { HomeStackParamList } from "../types";

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackHeader = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#1b1b1b",
      }}
    >
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 40,
          padding: 5,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          shadowOffset: { width: 10, height: 10 },
          shadowColor: "black",
          shadowOpacity: 0.2,
        }}
      >
        <Feather name='search' size={20} />
        <TextInput
          style={{
            height: 40,
            marginLeft: 10,
          }}
          placeholder='Search...'
          placeholderTextColor='lightgrey'
        />
      </View>
    </SafeAreaView>
  );
};

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{ header: () => <HomeStackHeader /> }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
    </Stack.Navigator>
  );
};
