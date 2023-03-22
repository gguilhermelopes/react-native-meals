import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/data";

const MealsListScreen = ({ route }) => {
  const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text>{categoryId}</Text>
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
