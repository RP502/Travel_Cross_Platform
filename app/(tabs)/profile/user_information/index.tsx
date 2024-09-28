import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { useLayoutEffect } from "react";
import { Colors } from "@/constants/Colors";
import {  useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";

const UserInformation = () => {

  const navigation = useNavigation();

  // Ẩn TabBar khi vào màn hình chi tiết
  useFocusEffect(() => {
    navigation.setOptions({ tabBarStyle: { display: 'none' } });
    
    // Hiện lại TabBar khi thoát khỏi màn hình
    return () => navigation.setOptions({ tabBarStyle: undefined });
  });


  const user = {
    name: "John Doe",
    avatar:
      "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/457634662_1057983889159851_8138661231479699601_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gyU4FgbDhjsQ7kNvgGGacJ6&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AW8Ibyf2MBoTGq46mCT9B_j&oh=00_AYBcWBGSFbulSxGjkfp65gGsK9f24JqSYuS_452sI6kFxw&oe=66FD8898",
    dateOfBirth: "01/01/1990",
    email: "levana@gmail.com",
    phone: "0123456789",
    address: "123, ABC, XYZ",
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxItem}>
        <View style={styles.topBox}>
          <Text style={styles.labelText}>Ảnh của tôi</Text>
          <TouchableOpacity>
            <Text style={[styles.updateText]}>Chỉnh sửa</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: user.avatar }}
          style={{ width: 60, height: 60, marginLeft: 15, borderRadius: 999 }}
        />
      </View>

      <View style={styles.boxItem}>
        <View style={styles.topBox}>
          <Text style={styles.labelText}>Tên</Text>
          <TouchableOpacity>
            <Text style={[styles.updateText]}>Chỉnh sửa</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.boldText}>{user.name}</Text>
      </View>

      <View style={styles.boxItem}>
        <View style={styles.topBox}>
          <Text style={styles.labelText}>Ngày sinh</Text>
          <TouchableOpacity>
            <Text style={[styles.updateText]}>Chỉnh sửa</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.boldText}>{user.dateOfBirth}</Text>
      </View>

      <View style={styles.boxItem}>
        <View style={styles.topBox}>
          <Text style={styles.labelText}>Email</Text>
          <TouchableOpacity>
            <Text style={[styles.updateText]}>Chỉnh sửa</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.boldText}>{user.email}</Text>
      </View>

      <View style={styles.boxItem}>
        <View style={styles.topBox}>
          <Text style={styles.labelText}>Số điện thoại</Text>
          <TouchableOpacity>
            <Text style={[styles.updateText]}>Chỉnh sửa</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.boldText}>{user.phone}</Text>
      </View>

      <View style={styles.boxItem}>
        <View style={styles.topBox}>
          <Text style={styles.labelText}>Địa chỉ</Text>
          <TouchableOpacity>
            <Text style={[styles.updateText]}>Chỉnh sửa</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.boldText}>{user.address}</Text>
      </View>

      <TouchableOpacity
        style={{
          paddingVertical: 10,
          marginTop: 10,
          borderRadius: 999,
          backgroundColor: Colors.light.primary_01,
        }}
      >
        <Text
          style={[
            {
              textAlign: "center",
              color: Colors.light.white,
              fontSize: 16,
              fontFamily: "Poppins-Bold",
            },
          ]}
        >
          Lưu thông tin
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UserInformation;

export const options = {
  tabBarStyle: { display: "none" }, // Ẩn TabBar ở màn hình này
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  contentContainer: {},
  boxItem: {
    marginBottom: 15,
  },
  topBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  labelText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  updateText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: Colors.light.primary_01,
  },
  boldText: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    marginLeft: 15,
  },
});
