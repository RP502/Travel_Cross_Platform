import React from "react";
import { createBooking } from "@/api/booking";
import Loader from "@/components/common/Loader";
import { Colors } from "@/constants/Colors";
import { auth } from "@/firebaseConfig";
import { CreditCardInfo, InforBooking } from "@/model/infoBooking";
import { Participant } from "@/model/participant";
import { TourBooker } from "@/model/tourBooker";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, LogBox, TouchableOpacity } from "react-native";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import {
  CreditCardView,
  CreditCardInput,
  LiteCreditCardInput,
  CreditCardFormData,
  CreditCardFormField,
  ValidationState,
} from "react-native-credit-card-input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { generateRandomId } from "@/utils/generateRamdomId";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchBookingsAsync } from "@/redux/bookings/bookingsSlice";

LogBox.ignoreAllLogs();

const CreditCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = auth.currentUser?.uid;
  const toStatusIcon = (status?: ValidationState) =>
    status === "valid" ? "✅" : status === "invalid" ? "❌" : "❓";

  const { id, totalPrice, participantList, tourBooker, typeCard, date } =
    useLocalSearchParams();

  const [useLiteInput, setUseLiteInput] = useState(false);

  const [focusedField, setFocusedField] = useState<CreditCardFormField>();

  const [formData, setFormData] = useState<CreditCardFormData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const booker: TourBooker = JSON.parse(
    Array.isArray(tourBooker) ? tourBooker[0] : tourBooker || "{}"
  );
  const participants: Participant[] = JSON.parse(
    Array.isArray(participantList)
      ? participantList[0]
      : participantList || "[]"
  );

  const handelOrder = async () => {
    if (!formData?.valid) {
      alert("Vui lòng nhập thông tin thẻ hợp lệ");
      return;
    }
    setIsLoading(true);
    const creditCard: CreditCardInfo = {
      type: typeCard.toString(),
      number: formData?.values.number || "",
      expiry: formData?.values.expiry || "",
      cvc: formData?.values.cvc || "",
    };
    const inforBooking: InforBooking = {
      bookingId: generateRandomId(10).toString(),
      userId: auth.currentUser?.uid || "",
      tourId: id.toString(),
      totalPrice: Number(totalPrice),
      booker: booker,
      participants: participants,
      creditCard: creditCard,
      status: "Đã thanh toán",
      dateStart: date.toString(),
    };

    const response = await createBooking(inforBooking);
    setIsLoading(false);
    dispatch(fetchBookingsAsync(userId as string));
    router.replace("/success");
  };

  return (
    <>
      <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView contentContainerStyle={s.container}>
          <Switch
            style={s.switch}
            onValueChange={(v) => {
              setUseLiteInput(v);
              setFormData(undefined);
            }}
            value={useLiteInput}
          />

          <CreditCardView
            focusedField={focusedField}
            type={formData?.values.type}
            number={formData?.values.number}
            expiry={formData?.values.expiry}
            cvc={formData?.values.cvc}
            style={s.cardView}
          />

          {useLiteInput ? (
            <LiteCreditCardInput
              autoFocus
              style={s.cardInput}
              onChange={setFormData}
              onFocusField={setFocusedField}
            />
          ) : (
            <CreditCardInput
              autoFocus
              style={s.cardInput}
              onChange={setFormData}
              onFocusField={setFocusedField}
            />
          )}

          <View style={s.infoContainer}>
            <Text style={s.info}>
              {formData?.valid
                ? "✅ Possibly valid card"
                : "❌ Invalid/Incomplete card"}
            </Text>

            <Text style={s.info}>
              {toStatusIcon(formData?.status.number)}
              {" Number\t: "}
              {formData?.values.number}
            </Text>

            <Text style={s.info}>
              {toStatusIcon(formData?.status.expiry)}
              {" Expiry\t: "}
              {formData?.values.expiry}
            </Text>

            <Text style={s.info}>
              {toStatusIcon(formData?.status.cvc)}
              {" Cvc   \t: "}
              {formData?.values.cvc}
            </Text>

            <Text style={s.info}>
              {"ℹ️ Type  \t: "}
              {typeCard}
            </Text>
          </View>
        </KeyboardAwareScrollView>
        <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
          <TouchableOpacity style={s.btn} onPress={handelOrder}>
            <Text style={s.btnText}>Thanh toán ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CreditCard;

const s = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 600,
    marginHorizontal: "auto",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginTop: 60,
  },
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  cardView: {
    alignSelf: "center",
    marginTop: 15,
  },
  cardInput: {
    marginTop: 15,
    borderColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  infoContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: "#dfdfdf",
    borderRadius: 5,
  },
  info: {
    fontFamily: Platform.select({
      ios: "Courier",
      android: "monospace",
      web: "monospace",
    }),
  },

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
