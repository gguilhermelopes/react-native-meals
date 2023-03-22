import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.informationsWrapper}>
      <View style={styles.durationWrapper}>
        <Text style={styles.informationsText}>{duration}m</Text>
        <MaterialCommunityIcons name="clock-outline" size={16} color="black" />
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
  );
};

export default MealDetails;

const styles = StyleSheet.create({
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
