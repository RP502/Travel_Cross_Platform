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
import { AntDesign } from "@expo/vector-icons";
import { Color } from "react-native-alert-notification/lib/typescript/service";
import { router } from "expo-router";

interface BottomBookingProps {
  price: number;
  sale?: number;
}

interface dateOfTour {
  date: string;
  price: number;
  sale: number;
}
const tourDates: dateOfTour[] = [
  { date: "10/01", price: 1000, sale: 10 },
  { date: "10/02", price: 1100, sale: 15 },
  { date: "10/03", price: 1200, sale: 20 },
  { date: "10/04", price: 1300, sale: 25 },
  { date: "10/05", price: 1400, sale: 30 },
];

let { width, height } = Dimensions.get("window");

const BottomBooking: React.FC<BottomBookingProps> = ({ price, sale }) => {
  const [isDisPlayBooking, setIsDisPlayBooking] =
    React.useState<boolean>(false);

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
            {price} vnđ
          </Text>
          {sale && (
            <Text
              style={{
                color: Colors.light.text_secondary,
                fontSize: 14,
                fontFamily: "Poppins-Medium",
                textDecorationLine: "line-through",
              }}
            >
              {(price * sale) / 100}vnđ
            </Text>
          )}
        </View>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity
            style={{
              paddingVertical: 5,
              borderRadius: 10,
              backgroundColor: Colors.light.white,
              borderColor: "black",
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
                  Tour nameF
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
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Poppins-Medium",
                      color: Colors.light.text_secondary,
                    }}
                  >
                    Xin chọn ngày đi tour
                  </Text>
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
                          backgroundColor: Colors.light.background,
                        }}
                      >
                        <Text>{item.date}</Text>
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins-Bold",
                        color: Colors.light.text_secondary,
                      }}
                    >
                      Người lớn
                    </Text>
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
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Poppins-Medium",
                            color: Colors.light.text_secondary,
                            textAlign: "center",
                          }}
                        >
                          +
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "Poppins-Regular",
                          color: Colors.light.text_secondary,
                        }}
                      >
                        0
                      </Text>
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: 12,
                          paddingVertical: 4,
                          backgroundColor: Colors.light.background,
                          borderRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Poppins-Medium",
                            color: Colors.light.text_secondary,
                          }}
                        >
                          -
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins-Bold",
                        color: Colors.light.text_secondary,
                      }}
                    >
                      Trẻ em (5-10)
                    </Text>
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
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Poppins-Medium",
                            color: Colors.light.text_secondary,
                            textAlign: "center",
                          }}
                        >
                          +
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "Poppins-Regular",
                          color: Colors.light.text_secondary,
                        }}
                      >
                        0
                      </Text>
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: 12,
                          paddingVertical: 4,
                          backgroundColor: Colors.light.background,
                          borderRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Poppins-Medium",
                            color: Colors.light.text_secondary,
                          }}
                        >
                          -
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
                  1000 vnđ
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.btn, { marginVertical: 10 }]}
                onPress={() => {
                  setIsDisPlayBooking(false);
                  router.push("/tour/[id]/info_booking");
                }}
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
