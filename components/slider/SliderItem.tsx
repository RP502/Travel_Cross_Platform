import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderPorps } from "@/constants/Sider";
import { Slider } from "@/redux/sliders/sliderType";

const SliderItem: React.FC<Slider> = (slider: Slider) => {
  let { width, height } = Dimensions.get("window");
  width = width - 32;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: slider.url_image,
        }}
        style={[
          {
            width,
            height: 160,
            borderRadius: 15,
          },
        ]}
      />
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {},
});
