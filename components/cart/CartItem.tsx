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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Cart, TourCart } from "@/redux/cart/cartsType";
import { Alert } from "react-native";
import Loader from "../common/Loader";
import CartEdit from "./CartEdit";
import { updateCart } from "@/api/cart";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchCartsAsync } from "@/redux/cart/cartsSlice";
import { auth } from "@/firebaseConfig";

export interface Props {
  cart: Cart;
  handleSelect: (cartId: string) => void;
  handleDelete: (cartId: string) => void;
}

let { width, height } = Dimensions.get("window");

const CartItem: React.FC<Props> = ({ cart, handleSelect, handleDelete }) => {

  const dispatch = useDispatch<AppDispatch>();
  const userId = auth.currentUser?.uid;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [tour, setTour] = useState<TourCart>(cart.tour as TourCart);

  const deleteCart = async () => {
    Alert.alert("Xác nhận", "Bạn có chắc chắn muốn xóa sản phẩm này?", [
      {
        text: "Hủy",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Xác nhận",
        onPress: async () => {
          setIsLoading(true);
          await handleDelete(cart.cartId);
          setIsLoading(false);
        },
      },
    ]);
  };

  const handleUpdateCart = async () => {

    setIsLoading(true);
    const newCart = { ...cart, tour: tour, totalPrice: tour.totalPrice };
    await updateCart(newCart);
    setIsLoading(false);
    setIsEdit(false);
    dispatch(fetchCartsAsync(userId as string));
    alert("Cập nhật thành công");
  };

  return (
    <>
      <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
      <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
        <TouchableOpacity onPress={() => handleSelect(cart.cartId)}>
          <MaterialCommunityIcons
            name={
              cart.isSelecting ? "checkbox-marked" : "checkbox-blank-outline"
            }
            size={24}
            color={
              cart.isSelecting
                ? Colors.light.primary_01
                : Colors.light.text_secondary
            }
          />
        </TouchableOpacity>
        <Image
          source={{ uri: cart.tour?.tourImage }}
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
            {cart.tour?.tourName}
          </Text>
          <View>
            <Text
              style={styles.descText}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {cart.tour?.tourShortDesc}
            </Text>
            <Text style={styles.descText}>{cart.tour?.date}</Text>

            <Text style={styles.descText}>
              {(cart.tour?.adult as number) > 0 ? cart.tour?.adult : 0} x Người
              lơn
            </Text>

            <Text style={styles.descText}>
              {(cart.tour?.child as number) > 0 ? cart.tour?.child : 0} x Trẻ em
            </Text>
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
              đ {cart.totalPrice.toLocaleString("vi-VN")}
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                onPress={deleteCart}
                // Dialog.show({
                //   type: ALERT_TYPE.WARNING,
                //   title: "Xác nhận",
                //   textBody: "Bạn có chắc chắn muốn xóa sản phẩm này?",
                //   button: "Xác nhận",
                //   autoClose: 300,
                //   onPressButton: () => handleDelete(cart.cartId),
                // })
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
      <CartEdit
        isDisPlay={isEdit}
        setIsDisPlay={setIsEdit}
        tour={tour as TourCart}
        setTour={setTour}
        saveEdit={handleUpdateCart}
      />
    </>
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
