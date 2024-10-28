import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { app, auth } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import Spinner from "react-native-loading-spinner-overlay";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import AsyncStorage from '@react-native-async-storage/async-storage';
interface User {
  username: string;
  firstName: string;
  lastName: string;
  gender: any;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  password: string;
  address: string;
}
interface UserInfo {
  user_id: string;
  username: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  phone_number: string;
  address: string;
}

const db = getFirestore();
const Register: React.FC = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [isShowSpinner, setIsShowSpinner] = useState<boolean>(false);

  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const inputDateRef = React.useRef<TextInput | null>(null);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    username: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
  });

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
    setUser({ ...user, dateOfBirth: formattedDate });
    setDatePickerVisibility(false);
  };

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Nam",
        value: "male",
      },
      {
        id: "2",
        label: "Nữ",
        value: "female",
      },
    ],
    []
  );

  const [genderId, setGenderId] = useState<string | undefined>("");

  const handleRegister = async () => {
    try {
      setIsShowSpinner(true);
      user.gender = genderId;
      const newUser = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      const currentUser = auth.currentUser;
      if (currentUser) {
        await updateProfile(currentUser, {
          displayName: `${user.firstName} ${user.lastName}`,
          photoURL:
            "https://res.cloudinary.com/dcp33adrf/image/upload/v1730010893/travel-app/pngegg_t0kqht.png",
        });

        const userInfo: UserInfo = {
          user_id: newUser.user.uid,
          username: user.username,
          first_name: user.firstName,
          last_name: user.lastName,
          date_of_birth: user.dateOfBirth,
          phone_number: user.phoneNumber,
          address: user.address,
        };

        await saveUserInfor(newUser.user.uid, userInfo);
        setIsShowSpinner(false);
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Xác nhận",
          textBody: "Đăng ký thành công",
          button: "Xác nhận",
          autoClose: 300,
        });
        await AsyncStorage.setItem('email', user.email);
        await AsyncStorage.setItem('password', user.password);
        router.navigate("/(tabs)");
      } else {
        console.error("No current user found");
      }
    } catch (error: any) {
      setIsShowSpinner(false);
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "Lỗi",
        textBody: error.message,
        button: "Xác nhận",
        autoClose: 300,
      });
    }
  };

  const saveUserInfor = async (uid: string, userInfo: UserInfo) => {
    try {
      const userRef = doc(db, "userInfo", uid);
      await setDoc(userRef, userInfo);
    } catch (error) {
      console.error("Error saving user information:", error);
    }
  };

  return (
    <AlertNotificationRoot theme="light">
      <Spinner
        visible={isShowSpinner}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.textHeader}>ĐĂNG KÝ</Text>
          <KeyboardAwareScrollView style={styles.inputContainer}>
            {/* username */}
            <View style={[styles.inputItem, styles.inputEmail]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 3,
                }}
              >
                <Text style={styles.labelInput}>Tên Tài khoản</Text>
                {user.username === "" && <Text style={styles.star}>*</Text>}
              </View>
              <View style={styles.input}>
                <TextInput
                  value={user.username}
                  style={styles.textInput}
                  onChangeText={(text) => setUser({ ...user, username: text })}
                  autoCapitalize="none"
                />
              </View>
            </View>
            {/* First Name */}
            <View style={[styles.inputItem, styles.inputEmail]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 3,
                }}
              >
                <Text style={styles.labelInput}>Tên</Text>
                {user.firstName === "" && <Text style={styles.star}>*</Text>}
              </View>
              <View style={styles.input}>
                <TextInput
                  value={user.firstName}
                  style={styles.textInput}
                  onChangeText={(text) => setUser({ ...user, firstName: text })}
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Last Name */}
            <View style={[styles.inputItem, styles.inputEmail]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 3,
                }}
              >
                <Text style={styles.labelInput}>Họ</Text>
                {user.lastName === "" && <Text style={styles.star}>*</Text>}
              </View>
              <View style={styles.input}>
                <TextInput
                  value={user.lastName}
                  style={styles.textInput}
                  onChangeText={(text) => setUser({ ...user, lastName: text })}
                />
              </View>
            </View>

            {/* Date of birth*/}
            <View style={[styles.inputItem, styles.inputEmail]}>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                isDarkModeEnabled={false}
                textColor={Colors.light.text}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 3,
                }}
              >
                <Text style={styles.labelInput}>Ngày sinh</Text>
                {user.dateOfBirth === "" && <Text style={styles.star}>*</Text>}
              </View>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  value={user.dateOfBirth}
                  onFocus={showDatePicker}
                  ref={inputDateRef}
                />
              </View>
            </View>

            {/* Gender */}
            <View style={[styles.inputItem]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 3,
                }}
              >
                <Text style={styles.labelInput}>Giới tính</Text>
                {genderId === "" && <Text style={styles.star}>*</Text>}
              </View>

              <RadioGroup
                radioButtons={radioButtons}
                onPress={setGenderId}
                selectedId={genderId}
                containerStyle={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
                labelStyle={{ fontSize: 14, fontFamily: "Poppins-Regular" }}
              />
            </View>

            {/* Address */}
            <View style={[styles.inputItem, styles.inputEmail]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 3,
                }}
              >
                <Text style={styles.labelInput}>Địa chỉ</Text>
                {user.address === "" && <Text style={styles.star}>*</Text>}
              </View>
              <View style={styles.input}>
                <TextInput
                  value={user.address}
                  style={styles.textInput}
                  onChangeText={(text) => setUser({ ...user, address: text })}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Phone Number */}
            <View style={[styles.inputItem, styles.inputEmail]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 3,
                }}
              >
                <Text style={styles.labelInput}>Số điện thoại</Text>
                {user.phoneNumber === "" && <Text style={styles.star}>*</Text>}
              </View>
              <View style={styles.input}>
                <TextInput
                  value={user.phoneNumber}
                  style={styles.textInput}
                  onChangeText={(text) =>
                    setUser({ ...user, phoneNumber: text })
                  }
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Email Input */}
            <View style={[styles.inputItem, styles.inputEmail]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 3,
                }}
              >
                <Text style={styles.labelInput}>Email</Text>
                {user.email === "" && <Text style={styles.star}>*</Text>}
              </View>
              <View style={styles.input}>
                <TextInput
                  value={user.email}
                  style={styles.textInput}
                  onChangeText={(text) => setUser({ ...user, email: text })}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>
            {/* Password Input */}
            <View style={styles.inputItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 3,
                }}
              >
                <Text style={styles.labelInput}>Password</Text>
                {user.password === "" && <Text style={styles.star}>*</Text>}
              </View>
              <View style={[styles.input, styles.inputPassword]}>
                <TextInput
                  value={user.password}
                  onChangeText={(text) => setUser({ ...user, password: text })}
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
          </KeyboardAwareScrollView>

          <View>
            <TouchableOpacity style={styles.btnSigin} onPress={handleRegister}>
              <Text style={styles.btnText}>Đăng ký</Text>
            </TouchableOpacity>
          </View>

          {/* Or separator */}
          <View style={styles.orContainer}>
            <View style={styles.orView} />
            <Text style={styles.orText}>Hoặc</Text>
            <View style={styles.orView} />
          </View>
          {/* Google Sign In Button */}

          {/* Register Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Bạn đã có tài khoản? </Text>
            <Link to="/login" style={styles.registerLink}>
              Đăng nhập
            </Link>
          </View>
        </View>
      </View>
    </AlertNotificationRoot>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: Colors.light.background,
  },
  textHeader: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  star: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: Colors.light.red,
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
  spinnerTextStyle: {
    color: "#FFF",
  },
});
