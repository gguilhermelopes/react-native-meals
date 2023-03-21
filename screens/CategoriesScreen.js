import { StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/data";
import React from "react";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = () => {
  const renderCategoryItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
