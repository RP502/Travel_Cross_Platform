import {
  Dimensions,
  FlatList,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

let { width, height } = Dimensions.get("window");

interface ArrangeProps {
  isShowArrange: boolean;
  setIsShowArrange: (value: boolean) => void;
}

interface ArrageItemProps {
  title: string;
  isActive: boolean;
  index?: number;
}

const arrageList: ArrageItemProps[] = [
  {
    title: "Giá thấp đến cao",
    isActive: true,
  },
  {
    title: "Giá cao đến thấp",
    isActive: false,
  },
  {
    title: "Tour mới nhất",
    isActive: false,
  },
  {
    title: "Tour cũ nhất",
    isActive: false,
  },
];

const ArrangeItem: React.FC<ArrageItemProps> = ({ title, isActive, index }) => {
  const handelOnPress = () => {
    // handel when click item
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: index === arrageList.length - 1 ? 0 : 1,
        borderColor: Colors.light.neutral_04,
        paddingVertical: 30,
      }}
      onPress={handelOnPress}
    >
      <Text
        style={{
          color: isActive ? Colors.light.primary_01 : Colors.light.text,
          fontSize: 18,
        }}
      >
        {title}
      </Text>
      {isActive && (
        <MaterialIcons name="done" size={24} color={Colors.light.primary_01} />
      )}
    </TouchableOpacity>
  );
};



const MoneyFillter: React.FC<ArrangeProps> = ({
  isShowArrange,
  setIsShowArrange,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isShowArrange}
      onRequestClose={() => {
        setIsShowArrange(!isShowArrange);
      }}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <View style={styles.flexStyle}>
            <TouchableOpacity onPress={() => setIsShowArrange(!isShowArrange)}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Text style={styles.modalTitle}>Sắp xếp theo:</Text>
            </View>
          </View>

          <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 10 }}>
            <FlatList
              data={arrageList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <ArrangeItem
                  title={item.title}
                  isActive={item.isActive}
                  index={index}
                />
              )}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MoneyFillter;

const styles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.neutral_04,
    padding: 16,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Colors.light.primary_01,
  },
  btnText: {
    color: Colors.light.white,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  modalOverlay: {
    width: width,
    height: height,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu nền mờ
  },
  modalView: {
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: Platform.OS === "android" ? 40 : 20,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  scrollView: {
    marginVertical: 10,
    flex: 1,
  },
});
