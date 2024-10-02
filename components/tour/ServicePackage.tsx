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

import { Colors } from "@/constants/Colors";
import IMAGES from "@/assets/images";

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
  return (
    <View style={styles.container}>
      <View style={styles.flexStyle}>
        <Text>Phương tiện: </Text>
        <Text>{delevery}</Text>
      </View>

      <View style={styles.flexStyle}>
        <Entypo name="time-slot" size={24} color={Colors.light.primary_01} />
        <Text>
          {timeStart} - {timeEnd}
        </Text>
      </View>

      <TouchableOpacity style={styles.detailBtn}>
        <Image source={IMAGES.MAP} />
        <Text style={styles.btnText}>Xem lịch trình chi tiết</Text>
      </TouchableOpacity>

      <Text>Bao gồm</Text>

      <View>
        <FlatList
          data={servicePackage}
          renderItem={({ item }) => (
            <View style={styles.flexStyle}>
              <AntDesign
                name="checkcircle"
                size={24}
                color={Colors.light.primary_01}
              />
              <Text numberOfLines={1} ellipsizeMode="tail">
                {item}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default ServicePackage;

const styles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    backgroundColor: Colors.light.background,
    padding: 16,
  },
  detailBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.primary_01,
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    color: Colors.light.text,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
});
