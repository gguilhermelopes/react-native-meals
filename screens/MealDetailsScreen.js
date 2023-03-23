import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { useLayoutEffect, useState } from "react";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";

const MealDetailsScreen = ({ route, navigation }) => {
  const [icon, setIcon] = useState(false);
  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = route.params;

  const handleIconButtonPress = () => {
    setIcon(!icon);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={handleIconButtonPress}
            icon={icon ? "favorite" : "favorite-outline"}
            color={icon ? "red" : "#f7ebe1"}
          />
        );
      },
    });
  }, [navigation, handleIconButtonPress, icon]);

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
