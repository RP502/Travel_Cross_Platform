import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AddressProps } from "@/constants/Address";
import AddressBtn from "./AddressBtn";

interface AddressListProps {
  addresList: AddressProps[];
}

const AddressList: React.FC<AddressListProps> = ({ addresList }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={addresList}
        renderItem={({ item, index }) => <AddressBtn {...item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ItemSeparatorComponent={() => <View style={{ width: 6 }} />}
      />
    </View>
  );
};

export default AddressList;

const styles = StyleSheet.create({
  container: {},
});
