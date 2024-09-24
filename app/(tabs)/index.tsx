import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Search from "@/components/Search";
import Categories from "@/components/categories";
import { Colors } from "@/constants/Colors";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.light.white, flex: 1 }}>
      <ScrollView>
        <Search />
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
