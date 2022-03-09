import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { colors, fontSizes, spacing } from "../utils";

interface P {
  history: string[];
}

interface PP {
  item: string;
}

export const FocusHistory = ({ history }: P) => {
  if (!history || !history.length)
    return <Text style={styles.title}>We haven't focused on anything</Text>;

  const renderItem = ({ item }: PP) => (
    <Text style={styles.item}>- {item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
  },
});
