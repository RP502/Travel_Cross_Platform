import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { InforBooking } from "@/model/infoBooking";
import { useSelector } from "react-redux";
import { Tour } from "@/redux/tours/tourType";
import { Colors } from "@/constants/Colors";

interface OrderItemProps {
  orderItem: InforBooking;
}

const OrderItem: React.FC<OrderItemProps> = ({ orderItem }) => {
  const tours = useSelector((state: any) => state.tours.tours);

  const [tour, setTour] = useState<Tour>();

  useEffect(() => {
    const tour = tours.find(
      (item: any) => item.id === orderItem.tourId
    ) as Tour;
    setTour(tour);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: tour?.image[0] }} />
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.textTitle} numberOfLines={1} ellipsizeMode="tail">
          {tour?.name}
        </Text>
        <Text style={styles.textNormal}>
          Ngày đặt tour:{" "}
          {new Date(orderItem.createdAt as string).toLocaleDateString("vi-VN")}
        </Text>
        <Text style={styles.textNormal}>
          Ngày khởi hành: {orderItem?.dateStart}
        </Text>
        <Text style={styles.textNormal}>
          Số người tham gia: {orderItem.participants.length}
        </Text>
        <Text style={styles.textPrice}>
          đ{orderItem.totalPrice.toLocaleString("vi-VN")}
        </Text>
        <Text style={styles.textStatus}>{orderItem.status}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  leftContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  rightContainer: {
    flex: 2,
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  textPrice: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: Colors.light.primary_01,
    alignSelf: "flex-end",
  },
  textStatus: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: Colors.light.neutral_04,
  },
  textNormal: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: Colors.light.text,
  },
});
