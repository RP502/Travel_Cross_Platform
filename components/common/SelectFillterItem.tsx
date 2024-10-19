import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

export interface SelectFillterItemProps {
  name: string;
  isSelected: boolean;
  handleSelect?: (name: string) => void;
}

const SelectFillterItem: React.FC<SelectFillterItemProps> = ({
  name,
  isSelected,
  handleSelect,
}: any) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
      }}
    >
      <Text style={{ fontSize: 16, fontFamily: "Poppins-Regular" }}>
        {name}
      </Text>

      <MaterialCommunityIcons
        name={isSelected ? "checkbox-marked" : "checkbox-blank-outline"}
        size={24}
        color={
          isSelected ? Colors.light.primary_01 : Colors.light.text_secondary
        }
      />
    </TouchableOpacity>
  );
};

export default SelectFillterItem;
