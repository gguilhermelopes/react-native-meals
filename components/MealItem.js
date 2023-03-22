import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
          <View style={styles.informationsWrapper}>
            <View style={styles.durationWrapper}>
              <Text style={styles.informationsText}>{duration}m</Text>
              <MaterialCommunityIcons
                name="clock-outline"
                size={16}
                color="black"
              />
            </View>
            <View style={styles.informationsTextWrapper}>
              <Entypo name="dot-single" size={20} color="black" />
              <Text style={styles.informationsText}>{complexity}</Text>
            </View>
            <View style={styles.informationsTextWrapper}>
              <Entypo name="dot-single" size={20} color="black" />
              <Text style={styles.informationsText}>{affordability}</Text>
            </View>
          </View>
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
    backgroundColor: "#fff",
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
  informationsWrapper: {
    paddingTop: 8,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  informationsTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  durationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  informationsText: {
    fontFamily: "dm-sans",
  },
});
