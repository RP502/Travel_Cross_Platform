import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
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
  useLayoutEffect(() => {
    navigation.setOptions(backNavigationOption("Danh sách tour"));
  }, []);

  const tours: Tour[] = useSelector((state: any) => state.tours.tours);

  const [tourList, setTourList] = useState<Tour[]>(tours);
  const filterList = useState<any>(null);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(() => {
    if (tours) {
      const maxPrice = Math.max(...tours.map((tour) => tour.price));
      setMaxPrice(maxPrice);
    }
  }, [tours]);

  useEffect(() => {}, [tours, filterList]);

  return (
    <View style={{ flex: 1 }}>
      <Fillter toursList={tourList} setToursList={setTourList} />

      {/* // list tour */}
      <View style={{ paddingHorizontal: 16, paddingTop: 10 }}>
        <ScrollView>
          <MasonryFlashList
            data={tourList}
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
