import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Touchable,
} from "react-native";

import { Link } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";

const Login: React.FC = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.textHeader}>Login Account</Text>
        <View style={styles.inputContainer}>
          {/* email */}
          <View style={[styles.inputItem, styles.inputEmail]}>
            <Text style={styles.labelInput}>Email</Text>
            <View style={styles.input}>
              <TextInput
                value={email}
                style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          {/* password */}
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
                onPressIn={() => setIsShowPassword((pre) => !pre)}
              >
                <MaterialCommunityIcons
                  name="eye-off"
                  size={20}
                  color={Colors.light.neutral_04}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.textForgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnSigin}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.orView} />
          <Text style={styles.orText}>Or Sigin With</Text>
          <View style={styles.orView} />
        </View>
        <TouchableOpacity style={styles.btnGoogle}>
          <Image
            source={require("@/assets/images/logo_google.jpg")}
            style={styles.image}
          />
          <Text style={styles.textGoogle}>Google</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins",
              color: Colors.light.neutral_04,
            }}
          >
            Don't have an account?{" "}
          </Text>
          <Link
            href="/register"
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Bold",
              color: Colors.light.primary_01,
            }}
          >
            Register
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
    display: "flex",
    flexDirection: "row",
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
    width: "100%",
    backgroundColor: Colors.light.primary_01,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  btnGoogle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderRadius: 999,
    padding: 10,
    marginTop: 30,
    backgroundColor: Colors.light.neutral_04,
  },
  textGoogle: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "white",
  },
  orContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  orView: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.light.text_secondary,
  },
  orText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
  },
});
