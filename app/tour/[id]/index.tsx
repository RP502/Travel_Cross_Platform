import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  LogBox,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import BackNavigation from "@/components/navigation/BackNavigation";
import SlideList from "@/components/slider";
import { SliderList } from "@/constants/Sider";
import { Colors } from "@/constants/Colors";
import IMAGES from "@/assets/images";
import { AntDesign } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ServicePackage from "@/components/tour/ServicePackage";
import EvaluationList from "@/components/tour/EvaluationList";
import BottomBooking from "@/components/tour/BottomBooking";
import DescriptionTour from "@/components/tour/DescriptionTour";
import TourNote from "@/components/tour/TourNote";
import TourListHorization from "@/components/tour/TourListHorization";
import { CardTourPropsListData } from "@/constants/Tour";
import { useSelector } from "react-redux";
import SlideImage from "@/components/tour/tour_detail/image_list";

let { width, height } = Dimensions.get("window");

const tourService = {
  delevery: "Ô tô",
  timeStart: "8:00",
  timeEnd: "17:00",
  servicePackage: [
    "Vé tham quan",
    "Hướng dẫn viên",
    "Bữa trưa",
    "Bảo hiểm an toàn khi tham gia tour",
    "Di chuyển bằng thuyền",
  ],
};

LogBox.ignoreAllLogs()

const DetailTour: React.FC = (a) => {

  const { id } = useLocalSearchParams();
  const tours = useSelector((state: any) => state.tours.tours);
  const tour = tours.find((tour: any) => tour.id === id);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <BackNavigation tourId={id.toString()} />
          <SlideImage isFullScreen={true} dataList={tour.image} />
        </View>

        <View style={styles.contentContaier}>
          <View>
            <Text
              style={{
                color: Colors.light.text,
                fontSize: 20,
                fontFamily: "Poppins-Bold",
                textAlign: "left",
              }}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {tour.name}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginVertical: 3,
              }}
            >
              <Image
                source={IMAGES.EVALUATION}
                style={{
                  width: 28,
                  height: 18,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              />
              <Text
                style={{
                  color: Colors.light.primary_01,
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
              >
                {tour.evaluation}
              </Text>
              <Text
                style={{
                  color: Colors.light.text_secondary,
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
              >
                ({tour.evaluationCount})
              </Text>
              <AntDesign
                name="caretright"
                size={10}
                color={Colors.light.text_secondary}
              />
              <Text
                style={{
                  color: Colors.light.text_secondary,
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
              >
                {tour.booking} Đã được đặt
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: 4,
                justifyContent: "flex-end",
              }}
            ></View>
          </View>

          {/* service */}

          <View style={styles.labelContainer}>
            <MaterialIcons
              name="brightness-7"
              size={24}
              color={Colors.light.primary_01}
            />
            <Text style={styles.labelText}>Các gói dịch vụ</Text>
          </View>
          <ServicePackage
            servicePackage={tourService.servicePackage}
            delevery={tourService.delevery}
            timeStart={tourService.timeStart}
            timeEnd={tourService.timeEnd}
          />

          {/* evaluation */}

          <View style={styles.labelContainer}>
            <MaterialIcons
              name="brightness-7"
              size={24}
              color={Colors.light.primary_01}
            />
            <Text style={styles.labelText}>Đánh giá</Text>
          </View>
          <EvaluationList />


          {/* note */}
          <View style={styles.labelContainer}>
            <MaterialIcons
              name="brightness-7"
              size={24}
              color={Colors.light.primary_01}
            />
            <Text style={styles.labelText}>Những điều cần lưu ý</Text>
          </View>
          <TourNote />

          {/* releated tour */}
          <View style={styles.labelContainer}>
            <MaterialIcons
              name="brightness-7"
              size={24}
              color={Colors.light.primary_01}
            />
            <Text style={styles.labelText}>Bạn có thẻ thích</Text>
          </View>
          <TourListHorization tourList={tours} />
        </View>
      </ScrollView>

      <BottomBooking  tour={tour}/>
    </View>
  );
};

export default DetailTour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: Math.floor(height / 2.5),
  },
  contentContaier: {
    flex: 1,
    backgroundColor: "white",
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  labelText: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    paddingLeft: 8,
  },
});
