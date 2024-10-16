import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { backNavigationOption } from "@/utils/BackNavigation";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import ScheduleLocationList from "@/components/tour/ScheduleLocationList";

const TourSchedule = () => {
  return (
    <View style={{ paddingTop: 10, paddingHorizontal: 16 }}>
      <ScrollView>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={styles.leftContainer}>
            <View>
              <EvilIcons name="location" size={30} color="blue" />
            </View>

            <View
              style={{
                width: 2,
                height: 50,
                backgroundColor: Colors.light.neutral_04,
              }}
            />
            <View>
              <MaterialCommunityIcons name="bus" size={30} color="#5305a1" />
            </View>

            <View
              style={{
                width: 2,
                height: 50,
                backgroundColor: Colors.light.neutral_04,
              }}
            />
            <View>
              <MaterialCommunityIcons
                name="forest"
                size={30}
                color={Colors.light.green}
              />
            </View>
            <View
              style={{
                flex: 1,
                width: 2,
                backgroundColor: Colors.light.neutral_04,
              }}
            />
          </View>

          <View style={styles.rightContainer}>
            <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold" }}>
              14:15 - Khởi hành
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Bold",
                marginVertical: 55,
              }}
            >
              Xe khách 16 chỗ
            </Text>
            <View>
              <View style={{ flexDirection: "row", gap: 10, marginBottom: 10, marginTop: 5, }}>
                <Feather
                  name="flag"
                  size={20}
                  color={Colors.light.text_secondary}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins-Medium" }}>
                  Tour có hướng dẫn viên
                </Text>
              </View>

              {/* list location in tour */}
              <ScheduleLocationList />
             
             
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TourSchedule;

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {},
});
