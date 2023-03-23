import { StyleSheet, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  const navigation = useNavigation();

  const renderMeal = (itemData) => {
    const { item } = itemData;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      ingredients: item.ingredients,
      steps: item.steps,
      id: item.id,
    };
    const handleItemPress = () => {
      navigation.navigate("MealDetails", {
        ...mealItemProps,
      });
    };

    return <MealItem {...mealItemProps} onPress={handleItemPress} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
