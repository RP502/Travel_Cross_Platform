import {
  Dimensions,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Stares, { StarItemProps } from "./criteria/Stares";
import { loremList, starList, TourStyleList, TourTypeList, vehicleList, SaleLisst, ServceList } from "@/constants/Criteria";
import Destiantions from "./criteria/Destination";
import TourTypes from "./criteria/TourType";
import NumberOfParticipant from "./criteria/NumberOfParticipants";
import Promotions from "./criteria/Promotions";
import AccompanyingServices from "./criteria/AccompanyingServices";
import Transportation from "./criteria/Transportation";
import { useSelector } from "react-redux";

let { width, height } = Dimensions.get("window");

export interface DestinatiItem {
  name: string;
  isSelected: boolean;
}

interface CriteriaProps {
  isShowCriteria: boolean;
  setIsShowCriteria: (value: boolean) => void;
}

const Criteria: React.FC<CriteriaProps> = ({
  isShowCriteria,
  setIsShowCriteria,
}) => {

  const locationList = useSelector((state: any) => state.locations.addressList);

  const [destinationList, setDestinationList] = useState<DestinatiItem[]>([])

  useEffect(() => {
    if (locationList) {
      const list = locationList.map((location: any) => {
        return {
          name: location.name,
          isSelected: false,
        };
      });
      setDestinationList(list);
    }
  }, [locationList]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isShowCriteria}
      onRequestClose={() => {
        setIsShowCriteria(!isShowCriteria);
      }}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <View style={styles.flexStyle}>
            <TouchableOpacity
              onPress={() => setIsShowCriteria(!isShowCriteria)}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.modalTitle}>Chọn lọc</Text>
            </View>
          </View>

          <View style={{ flex: 1, marginTop: 10 }}>
            <ScrollView style={styles.scrollView}>
              <Stares listStart={starList} />
              <Destiantions destinationesList={destinationList} />
              <TourTypes tourTypeList={TourTypeList} />
              <NumberOfParticipant numberOfParticipantsList={TourStyleList} />
              <Promotions promotionsList={SaleLisst} />
              <AccompanyingServices accompanyingServicesList={ServceList} />
              <Transportation transportationList={vehicleList} />
            </ScrollView>
          </View>

          <View
            style={{
              paddingHorizontal: 16,
              paddingTop: 10,
              borderTopWidth: 1,
              borderTopColor: Colors.light.neutral_04,
              flexDirection: "row",
              gap: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: Colors.light.white,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: Colors.light.neutral_04,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins-Bold",
                  textAlign: "center",
                }}
              >
                Xóa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, { marginVertical: 10 }]}
              onPress={() => {
                setIsShowCriteria(false);
                router.push("/tour/[id]/info_booking");
              }}
            >
              <Text style={styles.btnText}>Chọn lọc</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Criteria;

const styles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.neutral_04,
    padding: 16,
  },
  btn: {
    flex: 1,
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
  modalOverlay: {
    width: width,
    height: height,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu nền mờ
  },
  modalView: {
    width: "100%",
    height: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: Platform.OS === "android" ? 40 : 20,
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
});
