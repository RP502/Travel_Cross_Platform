import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import IMAGES from "@/assets/images/index";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from "@/constants/Colors";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          placeholder="Tìm kiếm..."
          style={styles.textInput}
          autoFocus={false}
          placeholderTextColor={Colors.light.neutral_04}
        />
      </View>
     <View style={styles.rightContainer}>
      <Feather name="shopping-cart" size={24} color="black" />
      <AntDesign name="message1" size={24} color="black" />
     </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 30,
    backgroundColor: Colors.light.white,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    borderColor: Colors.light.primary_01,
    borderWidth: 1,
    backgroundColor: Colors.light.white,
  },
  textInput: {
    fontSize: 14,
    fontFamily: "Poppins",
    borderWidth: 0, 
  },
  rightContainer: {
    flexDirection: "row",
    gap: 25,
  },
});
