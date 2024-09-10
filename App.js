import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//import StackNavigator from './src/navigation/StackNavigator';
//import MyTabs from "./src/navigation/manipulador_button";
//import MyMaterialtopTabs from "./src/navigation/manipulador_MaterialTopTabs";
import DrawerNavigation from "./src/navigation/drawerNavigation";



const queryclient = new QueryClient()

export default function App() {
  return (
      <QueryClientProvider client={queryclient}>
        < DrawerNavigation />
      </QueryClientProvider>)

}