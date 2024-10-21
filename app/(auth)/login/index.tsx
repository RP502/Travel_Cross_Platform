import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { Link } from "@react-navigation/native";
import { router } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";

const Login: React.FC = (props: any) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // Add your authentication logic here (e.g. API call)
    // If successful, navigate to HomeScreen
    // const navigation = useNavigation();
    router.navigate("/(tabs)");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.textHeader}>ĐĂNG NHẬP</Text>
        <View style={styles.inputContainer}>
          {/* Email Input */}
          <View style={[styles.inputItem, styles.inputEmail]}>
            <Text style={styles.labelInput}>Email</Text>
            <View style={styles.input}>
              <TextInput
                value={email}
                style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>
          {/* Password Input */}
          <View style={styles.inputItem}>
            <Text style={styles.labelInput}>Password</Text>
            <View style={[styles.input, styles.inputPassword]}>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.textInput}
                secureTextEntry={!isShowPassword}
              />
              <TouchableOpacity
                onPress={() => setIsShowPassword((prev) => !prev)}
              >
                <MaterialCommunityIcons
                  name={isShowPassword ? "eye" : "eye-off"}
                  size={20}
                  color={Colors.light.neutral_04}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Forgot Password */}
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => router.navigate("/forget_password")}
          >
            <Text style={styles.textForgotPassword}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.btnSigin} onPress={handleLogin}>
            <Text style={styles.btnText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>

        {/* Or separator */}
        <View style={styles.orContainer}>
          <View style={styles.orView} />
          <Text style={styles.orText}>Hoặc</Text>
          <View style={styles.orView} />
        </View>
        {/* Google Sign In Button */}
        <TouchableOpacity style={styles.btnGoogle}>
          <Image
            source={require("@/assets/images/google_icon.jpg")}
            style={{ width: 28, height: 28 }}
          />
          <Text style={styles.textGoogle}>Google</Text>
        </TouchableOpacity>
        {/* Register Link */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Bạn không có tài khoản? </Text>
          <Link to="/register" style={styles.registerLink}>
            Đăng ký
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: -45,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: Colors.light.background,
  },
  textHeader: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  inputContainer: {},
  inputItem: {},
  inputEmail: {
    marginBottom: 20,
  },
  labelInput: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: Colors.light.text_secondary,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.light.neutral_04,
    borderRadius: 999,
    padding: 10,
    paddingLeft: 15,
    marginTop: 8,
  },
  inputPassword: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    fontSize: 14,
    fontFamily: "Poppins",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  textForgotPassword: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: Colors.light.primary_01,
  },
  btnSigin: {
    backgroundColor: Colors.light.primary_01,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  orView: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.light.neutral_04,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: "Poppins",
  },
  btnGoogle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 999,
    marginTop: 30,
  },
  textGoogle: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: Colors.light.text,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  registerText: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: Colors.light.text_secondary,
  },
  registerLink: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: Colors.light.primary_01,
  },
});
