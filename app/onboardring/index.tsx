import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { router } from 'expo-router';
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { OnboardingItem, onboardingData } from "@/constants/Onboarding"

const Onboarding: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null); 
  const navigation = useNavigation();
  let { width } = Dimensions.get("window");
  width = width - 32;

  const renderItem = ({ item }: { item: OnboardingItem }) => (
    <View
      style={{
        width,
        justifyContent: "center",
        alignItems: "center",
        marginRight: currentIndex === 0 ? 16 : 0,
      }}
    >
      <Image source={item.image} style={{ width: 350, height: 350 }} />
      <Text
        style={{ fontSize: 20, fontFamily: "Poppins-Bold", marginBottom: 2 }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Poppins",
          color: Colors.light.text_secondary,
        }}
      >
        {item.description}
      </Text>
    </View>
  );

  const handleScroll = (event: any) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={flatListRef}
      />

      <View style={styles.pointContainer}>
        <View
          style={[
            styles.point,
            {
              backgroundColor:
                currentIndex === 0
                  ? Colors.light.button_background
                  : Colors.light.text_secondary,
            },
          ]}
        />
        <View
          style={[
            styles.point,
            {
              backgroundColor:
                currentIndex === 1
                  ? Colors.light.button_background
                  : Colors.light.text_secondary,
            },
          ]}
        />
        <View
          style={[
            styles.point,
            {
              backgroundColor:
                currentIndex === 2
                  ? Colors.light.button_background
                  : Colors.light.text_secondary,
            },
          ]}
        />
      </View>

      {currentIndex === 2 ? (
        <View style={[styles.btnContainer]}>
          <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={() => router.push('/login')}>
            <Text style={styles.btnText}>Bắt đầu</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.btnContainer]}>
          {/* <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={() => handleNext()}>
            <Text style={styles.btnText}>Tiếp theo</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={[styles.btn, styles.btnSecondary]} onPress={() => router.push('/login')}>
            <Text style={styles.btnText}>Bỏ qua</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 16,
    backgroundColor: Colors.light.white,
  },
  pointContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  point: {
    width: 10,
    height: 10,
    backgroundColor: "black",
    borderRadius: 999,
  },
  btnContainer: {
    display: "flex",
    gap: 10,
    marginTop: 30,
  },
  btn: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  btnPrimary: {
    backgroundColor: Colors.light.button_background,
  },
  btnSecondary: {
    backgroundColor: Colors.light.white,
    borderWidth: 0.5,
    borderColor: Colors.light.text_secondary,
  },
  btnText: {
    color: Colors.light.text,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
});
