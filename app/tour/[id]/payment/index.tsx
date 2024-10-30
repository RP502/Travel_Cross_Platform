import { FlatList, LogBox, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import PaymentMethodItem, { PaymentMethodItemProps } from "@/components/tour/PaymentMethodItem";
import { useLocalSearchParams } from "expo-router";
import { TourBooker } from "@/model/tourBooker";
import { Participant } from "@/model/participant";

const loremData: PaymentMethodItemProps[] = [
    {
        title: "Visa",
        image: "https://img.icons8.com/?size=512&id=13608&format=png",
        isChecked: true,
    },
    {
        title: "MasterCard",
        image: "https://img.icons8.com/?size=512&id=13608&format=png",
        isChecked: false,
    },
    {
        title: "PayPal",
        image: "https://img.icons8.com/?size=512&id=13608&format=png",
        isChecked: false,
    },
];

LogBox.ignoreAllLogs();

const Payment = () => {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
  const { id, totalPrice, participantList, tourBooker } = useLocalSearchParams();

  // Parse JSON strings to retrieve objects

  const participants: Participant[] = JSON.parse(Array.isArray(participantList) ? participantList[0] : participantList || '[]');
  const booker: TourBooker = JSON.parse(Array.isArray(tourBooker) ? tourBooker[0] : tourBooker || '{}');

  console.log(typeof participants);
  participants.forEach(person => {
    console.log(person.fullName); // "Fhhj"
  });
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 16 }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: 210,
            paddingHorizontal: 30,
            backgroundColor: Colors.light.primary_01,
            borderRadius: 20,
            marginBottom: 50,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins-Regular",
              color: Colors.light.white,
              textAlign: "center",
            }}
          >
            Đơn hàng của bạn đã sẵn sàng! Xin vui lòng thang tóan để hoàn tất.
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontFamily: "Poppins-Bold",
              color: Colors.light.white,
            }}
          >
            5000 vnđ
          </Text>
        </View>
        

        <FlatList 
            data={loremData}
            renderItem={({ item }) => <PaymentMethodItem {...item} />}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />

      </View>

      <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Thanh toán ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Colors.light.primary_01,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
