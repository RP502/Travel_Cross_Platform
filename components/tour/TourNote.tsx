import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const notes: string[] = [
  "Kem chống nắng",
  "Mũ (nón)",
  "Kính râm",
  "Đồ bơi",
  "Quần áo để thay",
  "Khăn tắm",
];

const TourNote = () => {
  return (
    <View style={{ marginLeft: 32 }}>
      <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
        Nên mang theo những gì:{" "}
      </Text>
      <View style={{ marginLeft: 5 }}>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text>-</Text>
              <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular" }}>
                {item}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default TourNote;

const styles = StyleSheet.create({});
