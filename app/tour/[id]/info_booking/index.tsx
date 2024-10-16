import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors } from "@/constants/Colors";
import ParticipantInformation from "@/components/tour/ParticipantInformation";
import TourBooker from "@/components/tour/TourBooker";
import ApplyDiscount from "@/components/tour/ApplyDiscount";
import { router } from "expo-router";

const InfoBooking = () => {
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
                Tour name
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  color: Colors.light.text_secondary,
                }}
              >
                16/10/2024
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  color: Colors.light.text_secondary,
                }}
              >
                Người lớn x 1
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  color: Colors.light.text_secondary,
                }}
              >
                Trẻ em x 0
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins-Bold",
                  color: Colors.light.text,
                }}
              >
                650, 000 vnd
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
            <TourBooker />

            {/* ParticipantInformation */}
            <ParticipantInformation />

            {/* coupon */}

            <ApplyDiscount />

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
            1000 vnđ
          </Text>
        </View>
        <TouchableOpacity style={[styles.btn]} onPress={() => router.push('/tour/[id]/payment')}>
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
