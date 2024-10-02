import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";

interface EvaluationItemProps {
  id: number;
  userName: string;
  date: string;
  content: string;
  image?: string;
  evaluate: number;
}

const EvaluationItem: React.FC<EvaluationItemProps> = ({
  id,
  userName,
  date,
  content,
  image,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.topContaier, styles.flexStyle]}>
        <View style={styles.flexStyle}>
          <View style={[styles.flexStyle, {marginRight: 5,}]}>
            <AntDesign name="star" size={18} color="black" />
            <AntDesign name="star" size={18} color="black" />
            <AntDesign name="star" size={18} color="black" />
            <AntDesign name="star" size={18} color="black" />
            <AntDesign name="star" size={18} color="black" />
          </View>
          <Text
            style={{
              color: Colors.light.text,
              fontSize: 14,
              fontFamily: "Poppins-Medium",
            }}
          >
            {userName}
          </Text>
        </View>
        <Text
          style={{
            color: Colors.light.text,
            fontSize: 14,
            fontFamily: "Poppins-Regular",
          }}
        >
          {date}
        </Text>
      </View>
      <View style={[styles.bottomContainer, styles.flexStyle]}>
        <Text
          style={{
            color: Colors.light.text_secondary,
            fontSize: 14,
            fontFamily: "Poppins-Regular",
            flex: 1,
          }}
          numberOfLines={4}
          ellipsizeMode="tail"
        >
          {content}
        </Text>
        <Image
          source={{ uri: image }}
          style={{ width: 55, height: 55, borderRadius: 10 }}
        />
      </View>
    </View>
  );
};

export default EvaluationItem;

const styles = StyleSheet.create({
    flexStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
  container: {
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
  },
  topContaier: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  bottomContainer: {},
});
