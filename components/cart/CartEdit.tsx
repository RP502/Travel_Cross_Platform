import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import {
  Alert,
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
import { Tour } from "@/redux/tours/tourType";
import { AntDesign } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TourCart } from "@/redux/cart/cartsType";
import { auth } from "@/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { DateOfBooking, getNextSevenDays } from "@/utils/getDate";

let { width, height } = Dimensions.get("window");

interface Props {
  isDisPlay: boolean;
  setIsDisPlay: (value: boolean) => void;
  tour: TourCart;
  setTour: (value: TourCart) => void;
  saveEdit: any;
}

const CartEdit: React.FC<Props> = ({
  isDisPlay,
  setIsDisPlay,
  tour,
  saveEdit,
  setTour,
}) => {
  const listTour: Tour[] = useSelector((state: any) => state.tours.tours);
  const tourData: Tour = listTour.find(
    (item) => item.id === tour.tourId
  ) as Tour;

  const userId = auth.currentUser?.uid;
  const dispatch = useDispatch<AppDispatch>();

  const tourDatesInit: DateOfBooking[] = getNextSevenDays();
  const initDate: DateOfBooking = {
    date: tour.date,
    isSelected: true,
  };

  tourDatesInit.unshift(initDate);

  const [tourDates, setTourDates] = useState<DateOfBooking[]>(tourDatesInit);

  const [dateSelected, setDateSelected] = useState<DateOfBooking | null>(
    tourDates[0]
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const realPrice =
    tour.sale !== 0 ? tour.price - (tour.price * tour.sale) / 100 : tour.price;

  const handleAddAdult = async () => {
    setTour({
      ...tour,
      adult: tour.adult + 1,
      totalPrice: tour.totalPrice + realPrice,
    });
  };
  const handleSubAdult = () => {
    if (tour.adult > 0) {
      setTour({
        ...tour,
        adult: tour.adult - 1,
        totalPrice: tour.totalPrice - realPrice,
      });
    }
  };
  const handleAddChild = () => {
    setTour({
      ...tour,
      child: tour.child + 1,
      totalPrice: tour.totalPrice + tourData?.childrenPrice,
    });
  };
  const handleSubChild = () => {
    if (tour.child > 0) {
      setTour({
        ...tour,
        child: tour.child - 1,
        totalPrice: tour.totalPrice - tourData?.childrenPrice,
      });
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    setDatePickerVisibility(false);
  };

  const selectDate = (item: DateOfBooking) => {
    setDateSelected(item);
    setTourDates(
      tourDates.map((date) => {
        if (date.date === item.date) {
          return { ...date, isSelected: true };
        }
        return { ...date, isSelected: false };
      })
    );
    setTour({
      ...tour,
      date: item.date,
    })
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isDisPlay}
      onRequestClose={() => {
        setIsDisPlay(!isDisPlay);
      }}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <View style={styles.flexStyle}>
            <TouchableOpacity onPress={() => setIsDisPlay(!isDisPlay)}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Text style={styles.modalTitle}>Tùy chọn đơn hàng</Text>
            </View>
          </View>

          <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 10 }}>
            <ScrollView style={styles.scrollView}>
              <Text
                style={{ fontSize: 16, fontFamily: "Poppins-Bold" }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {tour.tourName}
              </Text>

              <View
                style={{
                  padding: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: Colors.light.neutral_04,
                  marginVertical: 16,
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    isDarkModeEnabled={false}
                    textColor={Colors.light.text}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Poppins-Medium",
                      color: Colors.light.text_secondary,
                    }}
                  >
                    Xin chọn ngày đi tour
                  </Text>
                  <TouchableOpacity
                    onPress={() => setDatePickerVisibility(true)}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Poppins-Medium",
                        color: Colors.light.text_secondary,
                        textDecorationLine: "underline",
                      }}
                    >
                      Chọn ngày
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* <View style={{width: '100%', height: 1, backgroundColor: Colors.light.neutral_04}}  /> */}
                <FlatList
                  data={tourDates}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        borderRadius: 10,
                        backgroundColor: item.isSelected
                          ? "#db7e48"
                          : Colors.light.background,
                        borderWidth: 1,
                        borderColor: item.isSelected
                          ? Colors.light.primary_01
                          : Colors.light.neutral_04,
                      }}
                      onPress={() => selectDate(item)}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: "Poppins-Regular",
                          color: item.isSelected
                            ? Colors.light.white
                            : Colors.light.text,
                        }}
                      >
                        {item.date}
                      </Text>
                    </TouchableOpacity>
                  )}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                />
              </View>

              <View
                style={{
                  padding: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: Colors.light.neutral_04,
                  marginVertical: 16,
                  flexDirection: "column",
                  gap: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins-Bold",
                        color: Colors.light.text_secondary,
                      }}
                    >
                      Người lớn
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Poppins-Regular",
                        color: Colors.light.primary_01,
                      }}
                    >
                      {tour.adult} x {realPrice.toLocaleString("vi-VN")} đ =
                      {(tour.adult * realPrice).toLocaleString("vi-VN")} đ
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 15,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 4,
                        backgroundColor: Colors.light.background,
                        borderRadius: 10,
                      }}
                      onPress={handleSubAdult}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "Poppins-Medium",
                          color: Colors.light.text_secondary,
                          textAlign: "center",
                        }}
                      >
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "Poppins-Regular",
                        color: Colors.light.text_secondary,
                      }}
                    >
                      {tour.adult}
                    </Text>
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 4,
                        backgroundColor: Colors.light.background,
                        borderRadius: 10,
                      }}
                      onPress={handleAddAdult}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "Poppins-Medium",
                          color: Colors.light.text_secondary,
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins-Bold",
                        color: Colors.light.text_secondary,
                      }}
                    >
                      Trẻ em (5-10)
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Poppins-Regular",
                        color: Colors.light.primary_01,
                      }}
                    >
                      {tour.child} x{" "}
                      {tourData?.childrenPrice.toLocaleString("vi-VN")} đ =
                      {(tour.child * tourData?.childrenPrice).toLocaleString(
                        "vi-VN"
                      )}{" "}
                      đ
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 15,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 4,
                        backgroundColor: Colors.light.background,
                        borderRadius: 10,
                      }}
                      onPress={handleSubChild}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "Poppins-Medium",
                          color: Colors.light.text_secondary,
                          textAlign: "center",
                        }}
                      >
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "Poppins-Regular",
                        color: Colors.light.text_secondary,
                      }}
                    >
                      {tour.child}
                    </Text>
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 4,
                        backgroundColor: Colors.light.background,
                        borderRadius: 10,
                      }}
                      onPress={handleAddChild}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "Poppins-Medium",
                          color: Colors.light.text_secondary,
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
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
                đ {tour.totalPrice.toLocaleString("vi-VN")}
              </Text>
            </View>

            
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    marginVertical: 10,
                    borderWidth: 1,
                    borderColor: Colors.light.neutral_04,
                  },
                ]}
                onPress={saveEdit}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins-Medium",
                    textAlign: "center",
                    color: Colors.light.white,
                  }}
                >
                  Thay đổi
                </Text>
              </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CartEdit;

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
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
