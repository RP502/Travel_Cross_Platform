import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderPorps } from "@/constants/Sider";

const SliderItem: React.FC<SliderPorps> = (slider: SliderPorps) => {
    let { width } = Dimensions.get("window");
    width = width - 32;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: slider.image,
        }}
        style={[styles.image, { width }]}
      />
      
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({ 
    container: {
    },
    image: { 
        width: 350, 
        height: 160, 
        borderRadius: 15
    } 
});
