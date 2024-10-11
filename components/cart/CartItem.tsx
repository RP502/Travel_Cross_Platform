import {
  Dimensions,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

export interface CartItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  date: string;
  shortDescription: string;
  adultQuantity: number;
  childQuantity: number;
}

let { width, height } = Dimensions.get("window");

const CartItem: React.FC<CartItemProps> = (cart: CartItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <AlertNotificationRoot theme="light">
      <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
          <MaterialCommunityIcons
            name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"}
            size={24}
            color={
              isChecked ? Colors.light.primary_01 : Colors.light.text_secondary
            }
          />
        </TouchableOpacity>
        <Image
          source={{ uri: cart.image }}
          style={{ width: 80, height: 80, borderRadius: 10 }}
        />
        <View style={{ flex: 1, flexDirection: "column", gap: 5 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins-Bold",
              color: Colors.light.text,
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {cart.name}
          </Text>
          <View>
            <Text
              style={styles.descText}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {cart.shortDescription}
            </Text>
            <Text style={styles.descText}>{cart.date}</Text>
            {cart.adultQuantity > 0 && (
              <Text style={styles.descText}>
                {cart.adultQuantity} x Người lơn
              </Text>
            )}
            {cart.childQuantity > 0 && (
              <Text style={styles.descText}>{cart.childQuantity} x Trẻ em</Text>
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Bold",
                color: Colors.light.red,
              }}
            >
              đ {cart.price}
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                onPress={() =>
                  Dialog.show({
                    type: ALERT_TYPE.WARNING,
                    title: "Xác nhận",
                    textBody: "Bạn có chắc chắn muốn xóa sản phẩm này?",
                    button: "Xác nhận",
                    autoClose: 300,
                  })
                }
              >
                <Feather name="trash" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsEdit(true)}>
                <Feather name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* edit form */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isEdit}
        onRequestClose={() => {
          setIsEdit((pre) => !pre);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <View
              style={[
                styles.flexStyle,
                {
                  borderBottomColor: Colors.light.neutral_04,
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                },
              ]}
            >
              <Text style={styles.modalTitle}>Tùy chỉnh sản phẩm</Text>
              <TouchableOpacity onPress={() => setIsEdit(!setIsEdit)}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.editContent}></ScrollView>

            <TouchableOpacity style={[styles.btn, { marginVertical: 10 }]}>
              <Text style={styles.btnText}>Hoàn tất</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </AlertNotificationRoot>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  descText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: Colors.light.text_secondary,
  },
  modalOverlay: {
    width: width,
    height: height,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu nền mờ
  },
  modalView: {
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: Platform.OS === "android" ? 40 : 10,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  scrollView: {
    marginVertical: 10,
    flex: 1,
  },
  card: {
    marginRight: 10,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
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
  editContent: {
    flex: 1,
  },
});
