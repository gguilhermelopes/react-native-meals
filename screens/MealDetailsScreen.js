import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { useContext, useLayoutEffect } from "react";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorite-context";

const MealDetailsScreen = ({ route, navigation }) => {
  const favoriteMealsContext = useContext(FavoritesContext);

  const {
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = route.params;

  const mealIsFavorite = favoriteMealsContext.ids.includes(id);

  const changeFavoriteStatus = () => {
    if (mealIsFavorite) {
      favoriteMealsContext.removeFavorite(id);
    } else {
      favoriteMealsContext.addFavorite(id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatus}
            icon={mealIsFavorite ? "favorite" : "favorite-outline"}
            color={mealIsFavorite ? "red" : "#f7ebe1"}
          />
        );
      },
      title,
    });
  }, [navigation, changeFavoriteStatus, mealIsFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={steps} />
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingBottom: 32,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontFamily: "dm-sans-bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
});
