import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ProfileOption from "@/components/profile/ProfileOption";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Sperater from "@/components/profile/Sperater";
import { router } from "expo-router";

const Profile: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={require("@/assets/images/profile.jpg")}
            style={{ width: 50, height: 50, borderRadius: 999 }}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Bold",
              color: Colors.light.white,
            }}
          >
            John Doe
          </Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="message1" size={24} color={Colors.light.white} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
        <View style={styles.contentContainer}>
          <ProfileOption
            icon="receipt"
            title="Đơn hàng"
            description="Xem lịch sử đơn hàng"
            onPress={() => {}}
          />
          <Sperater />

          <ProfileOption
            icon="person"
            title="Thông tin cá nhân"
            description="Cập nhật thông tin cá nhân"
            onPress={() => {
              router.navigate("/profile/user_information");
            }}
          />
        </View>

        <View style={styles.contentContainer}>
          <ProfileOption
            icon="phone-portrait-outline"
            title="Đánh giá"
            description="Liên hệ với chúng tôi"
            onPress={() => {}}
          />
          <Sperater />
          <ProfileOption
            icon="help"
            title="Trợ giúp"
            description="Câu hỏi thường gặp"
            onPress={() => {}}
          />
          <Sperater />
          <ProfileOption
            icon="settings"
            title="Cài đặt"
            description="Cài đặt ứng dụng"
            onPress={() => {}}
          />
          <Sperater />
          <ProfileOption
            icon="information-circle"
            title="Giới thiệu"
            description="Về chúng tôi"
            onPress={() => {}}
          />
        </View>
        <View style={styles.contentContainer}>
          <ProfileOption
            icon="log-out"
            title="Đăng xuất"
            description="Thoát tài khoản"
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary_01,
    paddingTop: Platform.OS === "android" ? 15: 0,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  contentContainer: {
    marginVertical: 26,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.light.white,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
  },
});
