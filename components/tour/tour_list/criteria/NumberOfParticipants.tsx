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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SelectFillterItem, {
  SelectFillterItemProps,
} from "@/components/common/SelectFillterItem";

interface NumberOfParticipantsProps {
  numberOfParticipantsList: SelectFillterItemProps[];
}

const NumberOfParticipant: React.FC<NumberOfParticipantsProps> = ({
  numberOfParticipantsList,
}) => {
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
        paddingVertical: 30,

        borderBottomColor: Colors.light.neutral_04,
        borderBottomWidth: 1,
      }}
    >
      <LabelToggle
        title="Kiểu tour"
        isShow={isShow}
        handleToggle={handleToggle}
      />

      {/* satr list */}
      {isShow && (
        <Animated.View
          style={{
            flexDirection: "column",
            gap: 5,
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 10,
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          }}
        >
          {numberOfParticipantsList.map((item) => (
            <SelectFillterItem
              key={item.name}
              name={item.name}
              isSelected={item.isSelected}
            />
          ))}
        </Animated.View>
      )}
    </View>
  );
};

export default NumberOfParticipant;

const styles = StyleSheet.create({});
