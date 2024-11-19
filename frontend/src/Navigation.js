import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Homepage from "../src/page/Home";
import { OffersScreen } from "../src/page/Account";
import { VisitedPlacesScreen } from "../src/page/WishlistScreen";
import { PlanningScreen } from "../src/page/MessengerScreen";
// import Articles from './Articles'; // Import the Articles component
// import Chatbot from './Chatbot'; // Import the Chatbot component


const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "#9ca3af",
      }}
    >
      {/* Updated name from "Home" to "HomeTab" */}
      <Tab.Screen
        name="HomeTab"
        component={Homepage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Articles"
        component={Homepage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chatbot"
        component={Homepage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-circle" size={size} color={color} />
          ),
        }}
      />
      {/* Updated name from "login" to "Login" */}
      {/* <Tab.Screen
        name="Login"
        component={Login}
        options={{
          // tabBarIcon: () => null, 
        }}
      /> */}
      <Tab.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="tag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Visited"
        component={VisitedPlacesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="map-pin" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Planning"
        component={PlanningScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
