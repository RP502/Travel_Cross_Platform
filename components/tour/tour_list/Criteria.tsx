import {
  Dimensions,
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

let { width, height } = Dimensions.get("window");

interface CriteriaProps {
    isShowCriteria: boolean;
    setIsShowCriteria: (value: boolean) => void;
}

const Criteria: React.FC<CriteriaProps> = ({ isShowCriteria, setIsShowCriteria }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isShowCriteria}
      onRequestClose={() => {
        setIsShowCriteria(!isShowCriteria);
      }}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <View style={styles.flexStyle}>
            <TouchableOpacity onPress={() => setIsShowCriteria(!isShowCriteria)}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.modalTitle}>Chọn lọc</Text>
            </View>
          </View>

          <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 10 }}>
            <ScrollView style={styles.scrollView}></ScrollView>
          </View>

          <View
            style={{
              paddingHorizontal: 16,
              paddingTop: 10,
              borderTopWidth: 1,
              borderTopColor: Colors.light.neutral_04,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins-Medium",
                  color: Colors.light.text_secondary,
                }}
              >
                Tổng tiền:
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins-Bold",
                  color: Colors.light.red,
                }}
              >
                1000 vnđ
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.btn, { marginVertical: 10 }]}
              onPress={() => {
                setIsShowCriteria(false);
                router.push("/tour/[id]/info_booking");
              }}
            >
              <Text style={styles.btnText}>Đặt ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Criteria;

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
    height: "90%",
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
