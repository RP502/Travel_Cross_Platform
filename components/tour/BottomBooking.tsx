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
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Color } from "react-native-alert-notification/lib/typescript/service";
import { Href, router } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import { Tour } from "@/redux/tours/tourType";
import { DateOfBooking, getNextSevenDays } from "@/utils/getDate";

interface BottomBookingProps {
  tour: Tour;
}

let { width, height } = Dimensions.get("window");

const BottomBooking: React.FC<BottomBookingProps> = ({ tour }) => {
  const realPrice =
    tour.sale !== 0 ? tour.price - (tour.price * tour.sale) / 100 : tour.price;

  const tourDatesInit: DateOfBooking[] = getNextSevenDays();

  const [tourDates, setTourDates] = useState<DateOfBooking[]>(tourDatesInit);
  const [dateSelected, setDateSelected] = useState<DateOfBooking | null>(null);

  const [isDisPlayBooking, setIsDisPlayBooking] =
    React.useState<boolean>(false);

  const [numberAdult, setNumberAdult] = useState<number>(0);
  const [numberChild, setNumberChild] = useState<number>(0);

  const [priceSum, setPriceSum] = useState<number>(0);
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

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
    console.log("item", item);
    setDateSelected(item);
    setTourDates(
      tourDates.map((date) => {
        if (date.date === item.date) {
          return { ...date, isSelected: true };
        }
        return { ...date, isSelected: false };
      })
    );
  };

  useEffect(() => {
    setPriceSum(numberAdult * realPrice + numberChild * tour.childrenPrice);
  }, [numberAdult, numberChild]);

  const handleAddAdult = async () => {
    setNumberAdult((pre) => pre + 1);
  };
  const handleSubAdult = () => {
    if (numberAdult > 0) {
      setNumberAdult(numberAdult - 1);
    }
  };
  const handleAddChild = () => {
    setNumberChild(numberChild + 1);
  };
  const handleSubChild = () => {
    if (numberChild > 0) {
      setNumberChild(numberChild - 1);
    }
  };

  const handleBooking = () => {
    if (dateSelected === null) {
      Alert.alert('Cảnh báo', 'Vui lòng chọn ngày', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }

    if (priceSum === 0) {
      Alert.alert('Cảnh báo ', 'Vui lòng chọn số lượng người tham gia', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return 
    }

    setIsDisPlayBooking(false);
    router.push({
      pathname: `/tour/${tour.tourId}/info_booking`,
      params: {
        totalPrice: priceSum.toString(),
        date: dateSelected.date,
        adult: numberAdult.toString(),
        child: numberChild.toString(),
      }, // Convert to string if totalPrice is a number
    } as Href);
  };

  return (
    <>
      <View
        style={{
          height: 95,
          borderTopColor: Colors.light.neutral_04,
          borderTopWidth: 1,
          paddingBottom: 20,
          paddingTop: 10,
          backgroundColor: "white",
          paddingHorizontal: 16,

          shadowColor: "#000", // Shadow color for iOS
          shadowOffset: { width: 1, height: 2 }, // Shadow offset for iOS
          shadowOpacity: 0.8, // Shadow opacity for iOS
          shadowRadius: 3, // Shadow radius for iOS
          elevation: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text
            style={{
              color: Colors.light.primary_01,
              fontSize: 20,
              fontFamily: "Poppins-Medium",
            }}
          >
            đ {realPrice.toLocaleString("vi-VN")}
          </Text>
          {tour.sale !== 0 && (
            <Text
              style={{
                color: Colors.light.text_secondary,
                fontSize: 14,
                fontFamily: "Poppins-Medium",
                textDecorationLine: "line-through",
              }}
            >
              đ {tour.price.toLocaleString("vi-VN")}
            </Text>
          )}
        </View>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity
            style={{
              paddingVertical: 5,
              borderRadius: 10,
              backgroundColor: Colors.light.white,
              borderColor: Colors.light.neutral_04,
              borderWidth: 1,
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Medium",
                textAlign: "center",
                color: Colors.light.text,
              }}
            >
              Thêm vào giỏ hàng
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingVertical: 5,
              borderRadius: 10,
              shadowColor: "#000",
              backgroundColor: Colors.light.primary_01,
            }}
            onPress={() => setIsDisPlayBooking(true)}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Medium",
                textAlign: "center",
                color: Colors.light.white,
              }}
            >
              Đặt ngay
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* booking */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDisPlayBooking}
        onRequestClose={() => {
          setIsDisPlayBooking(!isDisPlayBooking);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <View style={styles.flexStyle}>
              <TouchableOpacity
                onPress={() => setIsDisPlayBooking(!isDisPlayBooking)}
              >
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
                  {tour.name}
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
                    ItemSeparatorComponent={() => (
                      <View style={{ width: 10 }} />
                    )}
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
                        {numberAdult} x {realPrice.toLocaleString("vi-VN")} đ =
                        {(numberAdult * realPrice).toLocaleString("vi-VN")} đ
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
                        {numberAdult}
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
                        {numberChild} x{" "}
                        {tour.childrenPrice.toLocaleString("vi-VN")} đ =
                        {(numberChild * tour.childrenPrice).toLocaleString(
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
                        {numberChild}
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
                  đ {priceSum.toLocaleString("vi-VN")}
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.btn, { marginVertical: 10 }]}
                onPress={handleBooking}
              >
                <Text style={styles.btnText}>Đặt ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default BottomBooking;

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
