import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import ParticipantInformation from "@/components/tour/ParticipantInformation";

const InfoBooking = () => {
  return (
    <View
      style={{
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: Colors.light.neutral_04,
      }}
    >
      <View style={{ flex: 1 }}>
        <ScrollView>
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

            {/* ParticipantInformation */}
            <ParticipantInformation />
          </View>
        </ScrollView>
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
        <TouchableOpacity style={[styles.btn]}>
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
