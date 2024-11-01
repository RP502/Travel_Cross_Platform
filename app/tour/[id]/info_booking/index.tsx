import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors } from "@/constants/Colors";
import ParticipantInformation from "@/components/tour/ParticipantInformation";
import TourBookerInfo from "@/components/tour/TourBooker";
import ApplyDiscount from "@/components/tour/ApplyDiscount";
import { Href, router, useLocalSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import { TourBooker } from "@/model/tourBooker";
import { Participant } from "@/model/participant";

const InfoBooking = () => {
  let { id, totalPrice, adult, child, date } = useLocalSearchParams();
  const tours = useSelector((state: any) => state.tours.tours);
  const tour = tours.find((tour: any) => tour.id === id);

  const [tourBooker, setTourBooker] = useState<TourBooker>({
    fullName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
  });

  const [participantList, setParticipantList] = useState<Participant[]>([]);
  const [discount, setDiscount] = useState(0);

  const handlePayment = () => {
    if (
      tourBooker.fullName === "" ||
      tourBooker.dateOfBirth === "" ||
      tourBooker.email === "" ||
      tourBooker.phoneNumber === ""
    ) {
      alert("Vui lòng nhập tên người đặt tour");
      return;
    }
    if (participantList.length === 0) {
      alert("Vui lòng nhập thông tin người tham gia");
      return;
    }
    if (participantList.length !== Number(adult) + Number(child)) {
      alert("Số lượng người tham gia không đúng");
      return;
    }

    router.push({
      pathname: `/tour/${id}/payment`,
      params: {
        id: id,
        totalPrice: (Number(totalPrice) - discount).toString(),
        participantList: JSON.stringify(participantList),
        tourBooker: JSON.stringify(tourBooker),
      },
    } as Href);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView>
          <View style={{ flexDirection: "column", gap: 10 }}>
            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 5,
                backgroundColor: Colors.light.white,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins-Bold",
                  color: Colors.light.text,
                }}
              >
                {tour.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  color: Colors.light.text_secondary,
                }}
              >
                {date}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  color: Colors.light.text_secondary,
                }}
              >
                Người lớn x {adult}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  color: Colors.light.text_secondary,
                }}
              >
                Trẻ em x {child}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins-Bold",
                  color: Colors.light.text,
                }}
              >
                đ {Number(totalPrice).toLocaleString("vi-VN")}
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: Colors.light.green,
                }}
              >
                Hoàn hủy miễn phí trong 24h
              </Text>
            </View>
            {/* TourBooker */}
            <TourBookerInfo
              tourBooker={tourBooker}
              setTourBooker={setTourBooker}
            />

            {/* ParticipantInformation */}
            <ParticipantInformation
              participantList={participantList}
              setParticipantList={setParticipantList}
            />

            {/* coupon */}

            <ApplyDiscount
              totalPrice={Number(totalPrice)}
              discount={discount}
              setDiscount={setDiscount}
            />

            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.light.green,
                  width: "100%",
                  borderRadius: 10,
                  opacity: 0.8,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Poppins-Medium",
                    color: Colors.light.white,
                  }}
                >
                  Hoàn hủy miễn phí trong 24h
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: Colors.light.neutral_04,
          paddingHorizontal: 16,
          paddingTop: 10,
          paddingBottom: Platform.OS === "ios" ? 40 : 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
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
            đ {(Number(totalPrice) - discount).toLocaleString("vi-VN")}
          </Text>
        </View>
        <TouchableOpacity style={[styles.btn]} onPress={handlePayment}>
          <Text style={styles.btnText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoBooking;

const styles = StyleSheet.create({
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
});
