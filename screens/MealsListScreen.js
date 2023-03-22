import { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/data";

const MealsListScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(categoryId);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const renderMeal = (itemData) => {
    const { item } = itemData;
    const handleItemPress = () => {
      navigation.navigate("MealDetails", {
        title: item.title,
      });
    };

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      onPress: handleItemPress,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
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
