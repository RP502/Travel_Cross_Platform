import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Ionicons } from "@expo/vector-icons"; // or any icon library
import { Colors } from "@/constants/Colors";

interface ProfileOptionProps {
  icon: string;
  title: string;
  description?: string;
  onPress: () => void;
}

const ProfileOption: React.FC<ProfileOptionProps> = ({
  icon,
  title,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.optionContainer]} onPress={onPress}>
      {title === "Đánh giá" ? (
        <AntDesign name="like1" size={24} color={Colors.light.text_secondary} />
      ) : title === "Trợ giúp" ? (
        <Entypo
          name="help-with-circle"
          size={24}
          color={Colors.light.text_secondary}
        />
      ) : (
        <Ionicons
          name={icon as any}
          size={24}
          color={
            title === "Đăng xuất"
              ? Colors.light.red
              : Colors.light.text_secondary
          }
        />
      )}
      <Text
        style={[
          styles.optionText,
          {
            color:
              title === "Đăng xuất"
                ? Colors.light.red
                : Colors.light.text_secondary,
                textAlign: "left",
                textAlignVertical: "center",
          },
        ]}
      >
        {title}
      </Text>
      <Ionicons
        name="chevron-forward-outline"
        size={24}
        color={
          title === "Đăng xuất" ? Colors.light.red : Colors.light.text_secondary
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    backgroundColor: Colors.light.white,
  },
  optionText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
});

export default ProfileOption;
