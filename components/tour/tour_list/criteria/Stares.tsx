import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import LabelToggle from "@/components/common/LabelToggle";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

export interface StarItemProps {
  value: number;
  isSelected: boolean;
}

const StarItem: React.FC<StarItemProps> = ({ value, isSelected }: any) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: isSelected ? Colors.light.green : Colors.light.neutral_04,
      }}
    >
      <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
        {value}
      </Text>
      <AntDesign name="star" size={20} color={Colors.light.primary_01} />
    </TouchableOpacity>
  );
};

interface StaresProps {
  listStart: StarItemProps[];
}

const Stares: React.FC<StaresProps> = ({ listStart }) => {
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

  // handle select star
  const handleSelectStar = (value: number) => {};

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingBottom: 30,
        paddingTop: 10,
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
            gap: 5,
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          }}
        >
          {listStart.map((item) => (
            <StarItem
              key={item.value}
              value={item.value}
              isSelected={item.isSelected}
            />
          ))}
        </Animated.View>
      )}
    </View>
  );
};

export default Stares;

const styles = StyleSheet.create({});
