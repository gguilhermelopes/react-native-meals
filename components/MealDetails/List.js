import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
  return data.map((dataItem) => (
    <View style={styles.listItem} key={dataItem}>
      <Text style={styles.itemText}>{dataItem}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    backgroundColor: "#8c735e",
    marginHorizontal: 24,
    marginVertical: 6,
    borderRadius: 8,
  },
  itemText: {
    color: "#f7ebe1",
  },
});
