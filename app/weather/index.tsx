import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function App() {
  const location = {
    latitude: 15.9755,
    longitude: 108.2511,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location}>
        <Marker
          coordinate={location}
          title="Ngũ Hành Sơn"
          description="Đà Nẵng, Việt Nam"
        />
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
