import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Search from "@/components/Search";
import Categories from "@/components/categories";
import { Colors } from "@/constants/Colors";
import Slider from "@/components/slider";
import SlideList from "@/components/slider";
import Label from "@/components/Label";
import { AddressListData } from "@/constants/Address";
import AddressList from "@/components/address/AddressList";



const Home = () => {
  return (
    <>
    <StatusBar backgroundColor={Colors.light.white} barStyle="dark-content" />
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <Search />
          <Categories />
          <SlideList />
        </View>
        <View style={styles.contenContainer}>
            <View style={styles.tourContainer}>
              <Label 
                title="Tour trải nghiệm"
                icon="flag"
                iconColor={Colors.light.primary_01}
                textColor={Colors.light.text}
              />
              <AddressList addresList={AddressListData} />
            </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
  },
  topContainer: {
    backgroundColor: Colors.light.white,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  contenContainer: {
    paddingHorizontal: 16,
    backgroundColor: Colors.light.background,
    paddingTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tourContainer: {

  }
});
