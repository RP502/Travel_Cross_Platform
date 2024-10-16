import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";

export interface ScheduleLocatinItemProps {
  location: string;
  time: string;
  imageUrl?: string;
}

let { width } = Dimensions.get("window");

const ScheduleLocatinItem: React.FC<ScheduleLocatinItemProps> = ({
  location,
  time,
  imageUrl,
}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', gap: 3}}>
        <MaterialCommunityIcons
          name="pine-tree"
          size={20}
          color={Colors.light.green}
        />
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins-Bold",
            color: Colors.light.text_secondary,
            textDecorationLine: "underline",
          }}
        >
          {location}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Poppins-Medium",
          color: Colors.light.text_secondary,
          marginLeft: 23,
        }}
      >
        {time}
      </Text>
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={{ width: width - 72, height: 150, borderRadius: 10 }}
        />
      )}
    </View>
  );
};

export default ScheduleLocatinItem;

const styles = StyleSheet.create({});
