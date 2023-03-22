import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#eee" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fcf4ed",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" && "hidden",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.75,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "dm-sans-bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 8,
  },
});
