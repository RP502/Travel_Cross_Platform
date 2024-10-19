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
import React, { useEffect, useState } from "react";
import Slider from "react-native-a11y-slider";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import InputRange from "@/components/common/InputRange";

let { width, height } = Dimensions.get("window");

interface MoneyFillterProps {
  isShowMoneyFillter: boolean;
  setIsShowMoneyFillter: (value: boolean) => void;
}

const MoneyFillter: React.FC<MoneyFillterProps> = ({
  isShowMoneyFillter,
  setIsShowMoneyFillter,
}) => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(100000);
  const [numberOfTour, setNumberOfTour] = useState<number>(0);

  // get value from api
  useEffect(() => {
    // fetch data
    const fetchData = async () => {
      setMin(0);
      setMax(100000);
      setNumberOfTour(10);
    };
    fetchData();
  }, []);

  const handelWhenChangeValue = async (values: any) => {
    //  handel when change value
    const numericValues = values.map((value: any) => Number(value));
    console.log(numericValues[0]);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isShowMoneyFillter}
      onRequestClose={() => {
        setIsShowMoneyFillter(!isShowMoneyFillter);
      }}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <View style={styles.flexStyle}>
            <TouchableOpacity
              onPress={() => setIsShowMoneyFillter(!isShowMoneyFillter)}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Text style={styles.modalTitle}>Giá tiền</Text>
            </View>
          </View>

          <View style={{ flex: 1, paddingHorizontal: 30, marginTop: 10 }}>
            <Slider
              min={min}
              max={max}
              values={[min, max]}
              increment={1}
              markerColor={Colors.light.green}
              style={{
                backgroundColor: Colors.light.white,
              }}
              labelStyle={{
                backgroundColor: "#1d5bbf",
                borderRadius: 10,
              }}
              labelTextStyle={{
                color: Colors.light.white,
                fontFamily: "Poppins-Bold",
              }}
              onChange={handelWhenChangeValue}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 10,
              flexDirection: "row",
              gap: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: Colors.light.white,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: Colors.light.neutral_04,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins-Bold",
                  textAlign: "center",
                }}
              >
                Xóa
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { marginVertical: 10 }]}
              onPress={() => {
                setIsShowMoneyFillter(false);
                router.push("/tour/[id]/info_booking");
              }}
            >
              <Text
                style={styles.btnText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Xem {numberOfTour} kết quả
              </Text>
            </TouchableOpacity>
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
    flex: 1,
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
    height: "30%",
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
