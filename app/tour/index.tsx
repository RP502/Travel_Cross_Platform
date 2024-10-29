import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { backNavigationOption } from "@/utils/BackNavigation";
import { Colors } from "@/constants/Colors";
import Fillter from "@/components/tour/tour_list/Fillter";
import { MasonryFlashList } from "@shopify/flash-list";
import TourCard from "@/components/tour/TourCard";
import { CardTourPropsListData } from "@/constants/Tour";
import { useSelector } from "react-redux";
import { Tour } from "@/redux/tours/tourType";

const TourList = () => {
  const navigation = useNavigation();
  const tours = useSelector((state: any) => state.tours.tours); 

  useLayoutEffect(() => {
    navigation.setOptions(backNavigationOption("Danh sách tour"));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Fillter />

      {/* // list tour */}
      <View style={{ paddingHorizontal: 16, paddingTop: 10 }}>
        <ScrollView>
          <MasonryFlashList
            data={tours}
            numColumns={2}
            renderItem={({ item, index }) => <TourCard tour={item as Tour} />}
            keyExtractor={(item, index) => index.toString()}
            estimatedItemSize={100}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default TourList;

const styles = StyleSheet.create({
  fillterBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  fillterText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: Colors.light.text,
  },
});
