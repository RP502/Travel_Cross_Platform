import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Colors } from "@/constants/Colors";
import IMAGES from "@/assets/images";
import { router } from "expo-router";

interface ServicePackageProps {
  delevery: string;
  timeStart: string;
  timeEnd: string;
  servicePackage: string[];
}

const ServicePackage: React.FC<ServicePackageProps> = ({
  delevery,
  timeStart,
  timeEnd,
  servicePackage,
}) => {


  console.log('service ',servicePackage)

  return (
    <View style={styles.container}>
      <View style={styles.flexStyle}>
        <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold" }}>
          Phương tiện:
        </Text>
        <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular" }}>
          {delevery}
        </Text>
      </View>

      <View style={styles.flexStyle}>
        <Entypo name="time-slot" size={20} color={Colors.light.primary_01} />
        <Text style={{ fontFamily: "Poppins-Regular", fontSize: 14 }}>
          {timeStart} - {timeEnd}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.detailBtn}
        onPress={() => router.push("/tour/[id]/tour_schedule")}
      >
        <FontAwesome5 name="map-marked-alt" size={20} color="white" />
        <Text style={styles.btnText}>Xem lịch trình chi tiết</Text>
      </TouchableOpacity>

      <Text
        style={{ fontSize: 16, fontFamily: "Poppins-Bold", marginBottom: 3 }}
      >
        Bao gồm:
      </Text>

      <FlatList
        data={servicePackage}
        renderItem={({ item }) => (
          <View style={[styles.flexStyle]}>
            <AntDesign
              name="checkcircle"
              size={20}
              color={Colors.light.primary_01}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ fontSize: 14, fontFamily: "Poppins-Regular" }}
            >
              {item}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
      />
    </View>
  );
};

export default ServicePackage;

const styles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    marginBottom: 5,
  },
  container: {
    backgroundColor: Colors.light.background,
    paddingHorizontal: 26,
  },
  detailBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.light.primary_01,
    padding: 5,
    borderRadius: 5,
    marginVertical: 20,
  },
  btnText: {
    color: Colors.light.white,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
});
