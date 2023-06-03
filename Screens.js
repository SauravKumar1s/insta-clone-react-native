import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";

import HomeScreen from "./screens/Home";
import SearchScreen from "./screens/Search";
import ReelScreen from "./screens/Reel";
import ShopScreen from "./screens/Shop";
import ProfileScreen from "./screens/Profile";
import {
  HomeFilled,
  Home,
  Search,
  SearchFilled,
  Reel,
  ReelFilled,
  Shop,
  ShopFilled,
} from "./icons";

const Tab = createBottomTabNavigator();

function Screens() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#DBDBDB",
          height: 50,
          paddingTop: 15,
          paddingBottom: 15,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#333",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <HomeFilled fill={color} />;
            return <Home fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <SearchFilled fill={color} />;
            return <Search fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="reel"
        component={ReelScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <ReelFilled fill={color} />;
            return <Reel fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <ShopFilled fill={color} />;
            return <Shop fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Image
                style={{
                  ...styles.avatar,
                  borderWidth: focused ? 1 : 0,
                }}
                source={{
                  uri: "https://scontent.fblr4-1.fna.fbcdn.net/v/t39.30808-6/337893074_917582939451281_8817675646406244129_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=J6QLB2IVuWwAX9rKwjD&_nc_ht=scontent.fblr4-1.fna&oh=00_AfCNi1f9wjjBR518dfFhINm6CA5DdI64BkbJHYTD0Bx9Fw&oe=647EDDC7",
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderColor: "#000",
  },
});

export default Screens;
