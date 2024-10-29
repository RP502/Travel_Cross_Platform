import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderPorps } from "@/constants/Sider";
import { Slider } from "@/redux/sliders/sliderType";

interface SliderItemPorps {
  slider: string;
}

const SliderItem: React.FC<SliderItemPorps> = ({slider}) => {
  let { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: slider,
        }}
        style={[
          {
            width,
            height: height / 2.5,
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
