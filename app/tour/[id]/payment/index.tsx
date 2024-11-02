import {
  FlatList,
  LogBox,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import PaymentMethodItem from "@/components/tour/PaymentMethodItem";
import { Href, router, useLocalSearchParams } from "expo-router";

interface PaymentMethod {
  title: string;
  image: string;
  isChecked: boolean;
}

const initialData: PaymentMethod[] = [
  { title: "Visa", image: "https://img.icons8.com/?size=512&id=13608&format=png", isChecked: false },
  { title: "MasterCard", image: "https://res.cloudinary.com/dcp33adrf/image/upload/v1730377992/travel-app/card/images_nae0xi.png", isChecked: false },
  { title: "PayPal", image: "https://res.cloudinary.com/dcp33adrf/image/upload/v1730378079/travel-app/card/images_ombzwm.jpg", isChecked: false },
];

LogBox.ignoreAllLogs();

const Payment = () => {
  const { id, totalPrice, participantList, tourBooker, date } = useLocalSearchParams<any>();
  const [paymentMethodList, setPaymentMethodList] = useState<PaymentMethod[]>(initialData);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

  const handleSelectPaymentMethod = (title: string) => {
    const updatedPaymentMethods = paymentMethodList.map((item) => ({
      ...item,
      isChecked: item.title === title,
    }));
    setPaymentMethodList(updatedPaymentMethods);
  };

  useEffect(() => {
    const selectedMethod = paymentMethodList.find((item) => item.isChecked);
    if (selectedMethod) {
      setSelectedPaymentMethod(selectedMethod.title);
    }
  }, [paymentMethodList]);

  const handlePaymentNow = () => {
    router.push({
      pathname: `/tour/${id}/credit_card`,
      params: { id, totalPrice, participantList, tourBooker, typeCard: selectedPaymentMethod, date },
    } as Href);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.orderSummary}>
          <Text style={styles.summaryText}>Đơn hàng của bạn đã sẵn sàng! Xin vui lòng thanh toán để hoàn tất.</Text>
          <Text style={styles.priceText}>{Number(totalPrice).toLocaleString("vi-VN")} vnđ</Text>
        </View>

        <FlatList
          data={paymentMethodList}
          renderItem={({ item }) => (
            <PaymentMethodItem
              {...item}
              hanhdleSelectPaymentMethod={handleSelectPaymentMethod}
            />
          )}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn} onPress={handlePaymentNow}>
          <Text style={styles.btnText}>Thanh toán ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 20, paddingHorizontal: 16 },
  orderSummary: {
    alignItems: "center",
    justifyContent: "center",
    height: 210,
    paddingHorizontal: 30,
    backgroundColor: Colors.light.primary_01,
    borderRadius: 20,
    marginBottom: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  summaryText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: Colors.light.white,
    textAlign: "center",
  },
  priceText: {
    fontSize: 26,
    fontFamily: "Poppins-Bold",
    color: Colors.light.white,
  },
  itemSeparator: { height: 10 },
  buttonContainer: { paddingHorizontal: 20, paddingVertical: 30 },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Colors.light.primary_01,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: Colors.light.white,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
});
