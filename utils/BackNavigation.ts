import { Colors } from "@/constants/Colors";

export const backNavigationOption = (title: string) => {
  return {
    headerTitle: title,
    headerStyle: {
      backgroundColor:
        title === "Danh sách tour" ? "white" : Colors.light.primary_01,
    },
    headerTintColor: title === "Danh sách tour" ? "black" : Colors.light.white,
    headerTitleStyle: {
      fontFamily: "Poppins-Bold",
    },
    headerBackTitleVisible: false,
  };
};
