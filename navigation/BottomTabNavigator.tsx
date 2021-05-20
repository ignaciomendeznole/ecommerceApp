/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";

import { BottomTabParamList } from "../types";
import { HomeStackNavigator } from "./HomeStackNavigator";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
        inactiveTintColor: "#929292",
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
        }}
      />

      <BottomTab.Screen
        name='Cart'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='basket' color={color} />,
        }}
      />

      <BottomTab.Screen
        name='Profile'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='person-circle-outline' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
