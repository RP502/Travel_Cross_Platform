import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Criteria from "./Criteria";
import MoneyFillter from "./MoneyFillter";
import Arrange from "./Arrange";
const Fillter = () => {
  const [isShowCriteria, setIsShowCriteria] = useState<boolean>(false);
  const [isShowMoneyFillter, setIsShowMoneyFillter] = useState<boolean>(false);
  const [isShowArrange, setIsShowArrange] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fillterBox}
          onPress={() => setIsShowCriteria(true)}
        >
          <Text style={styles.fillterText}>Bộ lọc</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.fillterBox, styles.borderLeftRight]}
          onPress={() => setIsShowMoneyFillter(true)}
        >
          <Text style={styles.fillterText}>Giá tiền</Text>
          <AntDesign name="down" size={14} color={Colors.light.text} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fillterBox}
          onPress={() => setIsShowArrange(true)}
        >
          <Text style={styles.fillterText}>Sắp xếp</Text>
          <AntDesign name="down" size={14} color={Colors.light.text} />
        </TouchableOpacity>
      </View>

      <Criteria
        isShowCriteria={isShowCriteria}
        setIsShowCriteria={setIsShowCriteria}
      />
      <MoneyFillter
        isShowMoneyFillter={isShowMoneyFillter}
        setIsShowMoneyFillter={setIsShowMoneyFillter}
      />
      <Arrange
        isShowArrange={isShowArrange}
        setIsShowArrange={setIsShowArrange}
      />
    </>
  );
};

export default Fillter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.white,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fillterBox: {
    flex: 1,
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  fillterText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: Colors.light.text,
  },
  borderLeftRight: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.light.neutral_04,
  },
});
