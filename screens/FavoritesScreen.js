import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { FavoritesContext } from "../store/context/favorite-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/data";

const FavoritesScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) => {
    return favoriteMealsContext.ids.includes(meal.id);
  });

  if (!favoriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet!</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "dm-sans-bold",
    fontSize: 22,
    color: "#453020",
  },
});
