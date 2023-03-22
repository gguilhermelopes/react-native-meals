import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import MealDetails from "../components/MealDetails";

const MealDetailsScreen = ({ route }) => {
  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = route.params;
  return (
    <View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <ScrollView>
        <Text>{title}</Text>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
        <Text>Ingredients</Text>
        {ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text>Steps</Text>
        {steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});
