import { StyleSheet, Text, View } from "react-native";
import { Platform } from "react-native";
import { OtpInput } from "react-native-otp-entry";

import React, { useRef } from "react";
import { Colors } from "@/constants/Colors";

const OTP = () => {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingTop: 50,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins-Bold",
            color: Colors.light.text,
          }}
        >
          Nhập mã OTP
        </Text>
        <Text style={styles.text}>Hãy nhập mã xác minh</Text>
        <Text style={styles.text}>Đã gửi mã OTP đến email</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>lehanh29@gmail.com</Text>
          <Text style={[styles.text, { textDecorationLine: "underline" }]}>
            Thay đổi
          </Text>
        </View>
      </View>

      <View style={{ marginVertical: 20 }}>
        <OtpInput
          numberOfDigits={6}
          focusColor={Colors.light.primary_01}
          focusStickBlinkingDuration={500}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          textInputProps={{
            accessibilityLabel: "One-Time Password",
          }}
          theme={{
            containerStyle: styles.container,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusStickStyle: styles.focusStick,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.text}>Không nhận được mã?</Text>
        <Text style={[styles.text, { textDecorationLine: "underline" }]}>
          Gửi lại
        </Text>
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: Colors.light.text_secondary,
  },
});
