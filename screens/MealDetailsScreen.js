import { StyleSheet, Text, View } from "react-native";

const MealDetailsScreen = ({ route }) => {
  const { title } = route.params;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({});
