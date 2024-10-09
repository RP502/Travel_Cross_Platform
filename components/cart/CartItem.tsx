import {
  Image,
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

const CartItem: React.FC<CartItemProps> = (cart: CartItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <AlertNotificationRoot>
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
            <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold" }}>
              đ {cart.price}
            </Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <TouchableOpacity
                onPress={() =>
                  Dialog.show({
                    type: ALERT_TYPE.WARNING,
                    title: "Xác nhận",
                    textBody: "Bạn có chắc chắn muốn xóa sản phẩm này?",
                  })
                }
              >
                <Feather name="trash" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </AlertNotificationRoot>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  descText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: Colors.light.text_secondary,
  },
});
