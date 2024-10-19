import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LabelToggle from "@/components/common/LabelToggle";
import { Colors } from "@/constants/Colors";

const Stares = () => {
  const [isShow, setIsShow] = React.useState<boolean>(true);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity is 1
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initial scale is 1

  const handleToggle = () => {
    Animated.timing(fadeAnim, {
      toValue: isShow ? 0 : 1, // Animate to opacity 0 or 1
      duration: 300, // Duration of the animation
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start(() => setIsShow(!isShow));
  };
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingBottom: 20,
        borderBottomColor: Colors.light.neutral_04,
        borderBottomWidth: 1,
      }}
    >
      <LabelToggle
        title="Xếp hạng sao"
        isShow={isShow}
        handleToggle={handleToggle}
      />

      {/* satr list */}
      {isShow && (
        <Animated.View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
            5 sao
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
            4 sao
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
            3 sao
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
            2 sao
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
            1 sao
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

export default Stares;

const styles = StyleSheet.create({});
