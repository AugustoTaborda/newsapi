import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          options={{
            title: "New News",
            drawerLabel: "Home",
            headerStyle: {
              backgroundColor: "#6f6f6f",
              headerTitleAlign: "center",
            },
          }}
          component={HomeScreen}
        />

        <Drawer.Screen
          name="Categories"
          options={{
            title: "New News",
            drawerLabel: "Categories",
            headerStyle: {
              backgroundColor: "#6f6f6f",
              headerTitleAlign: "center",
            },
          }}
          component={CategoriesScreen}
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
