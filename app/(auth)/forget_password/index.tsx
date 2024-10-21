import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Hideo } from "react-native-textinput-effects";
import IMAGES from "@/assets/images";
import { TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { router } from "expo-router";

const ForgetPassword = () => {
  const [email, setEmail] = React.useState<string>("");
  const handleSendEmail = () => {
    // Add your authentication logic here (e.g. API call)
    // If successful, navigate to HomeScreen
    // const navigation = useNavigation();
    console.log(email);
    router.navigate("/otp");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.light.white,
        paddingHorizontal: 16,
      }}
    >
      <KeyboardAwareScrollView>
        <View>
          <Image
            source={IMAGES.FORGET_PASSWORD}
            style={{ width: 350, height: 350 }}
          />
          <Text
            style={{
              fontSize: 26,
              fontFamily: "Poppins-Bold",
              color: Colors.light.text,
              textAlign: "center",
            }}
          >
            Quên mật khẩu
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins-Regular",
              color: Colors.light.text_secondary,
              textAlign: "center",
            }}
          >
            Quên mật khẩu, đừng lo lắng điều đó sẽ xảy ra nhập Email của bạn.
            chúng tôi sẽ gửi cho bạn mã xác minh.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Nhập email..."
            placeholderTextColor={Colors.light.text_secondary}
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Regular",
              color: Colors.light.text,
              width: "100%",
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: Colors.light.neutral_04,
              backgroundColor: Colors.light.white,
            }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              borderRadius: 10,
              width: "100%",
              backgroundColor: Colors.light.primary_01,
            }}
            onPress={handleSendEmail}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Bold",
                color: Colors.light.white,
                textAlign: "center",
              }}
            >
              Gửi
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
