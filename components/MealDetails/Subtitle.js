import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleWrapper}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: "dm-sans-bold",
    fontSize: 18,
  },
  subtitleWrapper: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "#c7966d",
    borderBottomWidth: 0.5,
  },
});
