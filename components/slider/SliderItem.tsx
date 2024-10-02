import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderPorps } from "@/constants/Sider";

const SliderItem: React.FC<SliderPorps> = (slider: SliderPorps) => {
  let { width, height } = Dimensions.get("window");
  width = slider.isFullScreen == true ? width : width - 32;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: slider.image,
        }}
        style={[
          {
            width,
            height:
              slider.isFullScreen === true ? Math.floor(height / 2.5) : 160,
            borderRadius: slider.isFullScreen === true ? 0 : 15,
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
