import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AddressBtn from "./AddressBtn";
import { Address } from "@/redux/locations/locationType";

interface AddressListProps {
  addresList: Address[];
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
  container: {
    paddingLeft: 16,
  },
});
