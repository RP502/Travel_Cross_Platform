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
import React, { useCallback, useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import InputRange from "@/components/common/InputRange";
import { Tour } from "@/redux/tours/tourType";
import { useSelector } from "react-redux";
import Slider from "@react-native-community/slider";
let { width, height } = Dimensions.get("window");

interface MoneyFillterProps {
  isShowMoneyFillter: boolean;
  setIsShowMoneyFillter: (value: boolean) => void;
  toursList: Tour[];
  setToursList: (value: Tour[]) => void;
  handleFilterPrice: (value: number) => void;
}

const MoneyFillter: React.FC<MoneyFillterProps> = ({
  isShowMoneyFillter,
  setIsShowMoneyFillter,
  toursList,
  setToursList,
  handleFilterPrice,
}) => {
  const tours: Tour[] = useSelector((state: any) => state.tours.tours);

  const filterList = useState<any>(null);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (tours) {
      const maxPrice = Math.max(...tours.map((tour) => tour.price));
      setMaxPrice(maxPrice);
    }
  }, [tours]);

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
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={maxPrice}
              minimumTrackTintColor={Colors.light.primary_01}
              maximumTrackTintColor={Colors.light.neutral_04}
              thumbTintColor={Colors.light.green}
              onValueChange={(value) => setPrice(value)}
            />
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.textPrice}>{minPrice}</Text>
              <Text style={styles.textPrice}>-</Text>
              <Text style={styles.textPrice}>
                {price.toLocaleString("vi-VN")} đ
              </Text>
            </View>
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
                handleFilterPrice(price);
                setPrice(0);
              }}
             
            >
              <Text
                style={styles.btnText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Xem kết quả
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
  textPrice: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: Colors.light.text,
  },
});
