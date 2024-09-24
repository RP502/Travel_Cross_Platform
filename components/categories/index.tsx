import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CategoryList, CategoryProps } from "@/constants/Category";
import CatItem from "./CatItem";
import { Colors } from "@/constants/Colors";

const Categories: React.FC = () => {
  const renderItem = ({ item }: { item: CategoryProps }) => (
    <CatItem {...item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CategoryList}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
});
