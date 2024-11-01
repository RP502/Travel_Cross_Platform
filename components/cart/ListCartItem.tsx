import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import CartItem from "./CartItem";
import { Colors } from "@/constants/Colors";
import { Cart } from "@/redux/cart/cartsType";
import { deleteCartById } from "@/api/cart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchCartsAsync, selectCartItem } from "@/redux/cart/cartsSlice";
import { auth } from "@/firebaseConfig";

interface Props {
  cartList: Cart[];
}

const ListCartItem: React.FC<Props> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = auth.currentUser?.uid;
  const carts: Cart[] = useSelector((state: any) => state.carts.carts);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalPrice(
      carts.reduce(
        (total, item) => (item.isSelecting ? total + item.totalPrice : total),
        0
      )
    );
  }, [carts]);

  const handleSelect = (cartId: string) => {
    dispatch(selectCartItem({ cartId }));
  };

  const handleDelete = async (cartId: string) => {
    await deleteCartById(cartId);
    dispatch(fetchCartsAsync(userId as string));
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <FlashList
          data={carts}
          renderItem={({ item }) => {
            if (item.type === "tour") {
              return (
                <CartItem
                  cart={item}
                  handleSelect={handleSelect}
                  handleDelete={handleDelete}
                />
              );
            }
            return null;
          }}
          keyExtractor={(item) => item.cartId}
          ItemSeparatorComponent={() => (
            <View
              style={{ height: 1, backgroundColor: Colors.light.neutral_04 }}
            />
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={157}
        />
      </ScrollView>

      <View
        style={{
          marginVertical: 10,
          paddingHorizontal: 16,
          paddingBottom: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderTopWidth: 1,
          borderTopColor: Colors.light.neutral_04,
          paddingTop: 10,
          shadowColor: "#000",
          // shadowOffset: { width: 0, height: 2 },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.84,
          // elevation: 5,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins-Regular",
              color: Colors.light.text_secondary,
            }}
          >
            Tổng cộng: {carts.length} sản phẩm
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Bold",
              color: Colors.light.red,
            }}
          >
            Tổng tiền: {totalPrice.toLocaleString("vi-VN")} vnd
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.light.primary_01,
            borderRadius: 10,
            padding: 10,
            width: 120,
          }}
        >
          <Text
            style={{
              color: Colors.light.white,
              fontSize: 16,
              fontFamily: "Poppins-Medium",
              textAlign: "center",
            }}
          >
            Thanh toán
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListCartItem;

const styles = StyleSheet.create({});
