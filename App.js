import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import CategoriesScreen from "./screens/CategoriesScreen";
import { useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import MealsListScreen from "./screens/MealsListScreen";

const Stack = createNativeStackNavigator();

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
