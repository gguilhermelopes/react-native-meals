import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/data";

const MealsListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MealsListScreen</Text>
    </View>
  );
};

export default MealsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
