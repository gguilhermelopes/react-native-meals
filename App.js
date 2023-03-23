import "react-native-gesture-handler";
import { useCallback, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsListScreen from "./screens/MealsListScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "dm-sans": require("./assets/fonts/DMSans-Regular.ttf"),
    "dm-sans-bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView onLayout={onLayoutRootView} style={styles.rootScreen}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#453020",
              },
              headerTitleStyle: {
                fontFamily: "dm-sans-bold",
              },
              headerTintColor: "#f7ebe1",
              contentStyle: {
                backgroundColor: "#f5e1d0",
              },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                title: "Meals around the World!",
              }}
            />
            <Stack.Screen name="MealsList" component={MealsListScreen} />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
