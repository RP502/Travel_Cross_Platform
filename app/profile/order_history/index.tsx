import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { backNavigationOption } from "@/utils/BackNavigation";
import FillterItem from "@/components/wishlist/FillterItem";
import { useSelector } from "react-redux";
import { InforBooking } from "@/model/infoBooking";
import OrderItem from "@/components/profile/OrderItem";

interface Fillter {
  name: string;
  isActive: boolean;
}

const initFilter: Fillter[] = [
  {
    name: "Tất cả",
    isActive: true,
  },
  {
    name: "Đã thanh toán",
    isActive: false,
  },
  {
    name: "Đang diễn ra",
    isActive: false,
  },
  {
    name: "Đã hoàn thành",
    isActive: false,
  },
  {
    name: "Đã hủy",
    isActive: false,
  },
];

const Order = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions(backNavigationOption("Đơn hàng của bạn"));
  }, []);

  const bookings = useSelector((state: any) => state.bookings.bookings);

  const [filterList, setFilterList] = useState<Fillter[]>(initFilter);
  const [filter, setFilter] = useState<string>("Tất cả");
  const [orderList, setOrderList] = useState<InforBooking[]>([]);

  useLayoutEffect(() => {
    setOrderList(bookings);
  }, []);

  useLayoutEffect(() => {
    if (filter === "Tất cả") {
      setOrderList(bookings);
    } else {
      setOrderList(
        bookings.filter((item: InforBooking) => item.status === filter)
      );
    }
  }, [filter]);

  const handleFilter = (name: string) => {
    setFilterList((pre) =>
      pre.map((item) => {
        return {
          ...item,
          isActive: item.name === name ? true : false,
        };
      })
    );
    setFilter(name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fillterContainer}>
        <FlatList
          data={filterList}
          renderItem={({ item }) => (
            <FillterItem {...item} handleFilter={handleFilter} />
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

          <FlatList 
            data={orderList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <OrderItem orderItem={item} />
            )}
          />

      </View>

      <View style={{ marginTop: 20 }}></View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  fillterContainer: {
    marginTop: 10,
  },
  labelText: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
});
