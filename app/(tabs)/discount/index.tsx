import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import VourcherCard, {
  VourcherCardProps,
} from "@/components/discount/VourcherCard";
import SlideList from "@/components/slider";
import { MasonryFlashList } from "@shopify/flash-list";
import TourCard from "@/components/tour/TourCard";
import { useSelector } from "react-redux";
import { Tour } from "@/redux/tours/tourType";

const loremData: VourcherCardProps[] = [
  {
    discoutnCode: "SAVE10",
    discountValue: 10,
    discountType: "percentage",
    isSave: true,
    condition: "Áp dụng cho đơn hàng từ 100k",
  },
  {
    discoutnCode: "SAVE20",
    discountValue: 20,
    discountType: "percentage",
    isSave: false,
    condition: "Áp dụng cho đơn hàng từ 200k",
  },
  {
    discoutnCode: "SAVE30",
    discountValue: 30,
    discountType: "percentage",
    isSave: true,
    condition: "Áp dụng cho đơn hàng từ 300k",
  },
];

const Discount = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Ưu đãi",
    });
  }, []);

  const { sliders, status, error } = useSelector((state: any) => state.sliders);
  const tours: Tour[] = useSelector((state: any) => state.tours.tours);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Mã ưu đãi</Text>
      </View>
      <View style={styles.vourcherContainer}>
        <FlatList
          data={loremData}
          renderItem={({ item }) => <VourcherCard {...item} />}
          keyExtractor={(item) => item.discoutnCode}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
      </View>

      <View style={styles.bannerContainer}>
        <SlideList dataList={sliders} />
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Ưu đãi đang diễn ra</Text>
      </View>
      <View style={styles.vourcherContainer}>
        <MasonryFlashList
          data={tours}
          numColumns={2}
          renderItem={({ item, index }) => <TourCard tour={item} isMinWidth={true} />}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={100}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
      </View>
    </ScrollView>
  );
};

export default Discount;

const styles = StyleSheet.create({
  labelContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: "#6827C4",
    borderRadius: 10,
    zIndex: 1,
  },
  labelText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  vourcherContainer: {
    borderColor: Colors.light.neutral_04,
    borderWidth: 1,
    width: "100%",
    marginTop: -20,
    marginBottom: 10,
    paddingTop: 40,
    paddingBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  bannerContainer: {},
  promotionContainer: {},
});
