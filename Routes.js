import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Camera from "./src/pages/camera";
import Relatorios from "./src/pages/relatorios";
import Configuracoes from "./src/pages/configuracoes";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="relatorios"
      activeColor={"#fff"}
      shifting={false}
      barStyle={{ backgroundColor: "#141414" }}
    >
      <Tab.Screen
        name="relatorios"
        component={Relatorios}
        options={{
          tabBarLabel: "relatorios",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color="#fff" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: "QR Code",
        }}
      />
      <Tab.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{
          tabBarLabel: "Configurações",
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Relatorios">
        <Stack.Screen
          name="Relatorios"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Configuracoes"
          component={Configuracoes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
