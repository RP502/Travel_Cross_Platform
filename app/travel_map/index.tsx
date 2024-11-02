import React, { useLayoutEffect, useRef, useEffect } from "react";
import MapView, { Marker, MapMarker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "expo-router";
import { backNavigationOption } from "@/utils/BackNavigation";

export default function Map() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions(backNavigationOption("Bản đồ du lịch"));
  }, []);

  const initialLocation = {
    latitude: 17.3, 
    longitude: 106.5, // Trung tâm giữa Quảng Bình và Quảng Trị
    latitudeDelta: 2.0, // Đủ lớn để bao phủ toàn bộ hai tỉnh
    longitudeDelta: 1.5, // Đủ lớn để bao phủ toàn bộ hai tỉnh
  };

  const locations = [
    {
      latitude: 17.5373,
      longitude: 106.1455,
      title: "Phong Nha - Kẻ Bàng",
      description: "Di sản thiên nhiên thế giới, Quảng Bình",
    },
    {
      latitude: 17.5528,
      longitude: 106.6113,
      title: "Đồi Cát Quang Phú",
      description: "Khu du lịch nổi tiếng, Quảng Bình",
    },
    {
      latitude: 16.7355,
      longitude: 107.1855,
      title: "Thành cổ Quảng Trị",
      description: "Di tích lịch sử chiến tranh, Quảng Trị",
    },
    {
      latitude: 17.4711,
      longitude: 106.6244,
      title: "Biển Nhật Lệ",
      description: "Bãi biển nổi tiếng, Quảng Bình",
    },
    {
      latitude: 17.4511,
      longitude: 106.2044,
      title: "Hang Sơn Đoòng",
      description: "Hang động lớn nhất thế giới, Quảng Bình",
    },
    {
      latitude: 16.8163,
      longitude: 107.1003,
      title: "Nghĩa trang Liệt sĩ Trường Sơn",
      description: "Nghĩa trang liệt sĩ lớn nhất Việt Nam, Quảng Trị",
    },
    {
      latitude: 16.9073,
      longitude: 107.0023,
      title: "Cầu Hiền Lương",
      description: "Cây cầu lịch sử, Quảng Trị",
    },
    {
      latitude: 17.6673,
      longitude: 106.3456,
      title: "Suối nước Moọc",
      description: "Khu du lịch sinh thái, Quảng Bình",
    },
    {
      latitude: 16.8193,
      longitude: 107.1003,
      title: "Địa đạo Vịnh Mốc",
      description: "Di tích lịch sử chiến tranh, Quảng Trị",
    },
  ];

  const markerRefs = useRef<MapMarker[]>([]);

  useEffect(() => {
    // Show all callouts on mount
    markerRefs.current.forEach((marker) => marker?.showCallout());
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialLocation}
        aria-label="Quảng Bình - Quảng Trị"
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.title}
            description={location.description}
            ref={(ref) => {
              if (ref) markerRefs.current[index] = ref;
            }}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
