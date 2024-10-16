import { Colors } from "@/constants/Colors";

export const backNavigationOption = (title: string) => {
  return {
    headerTitle: title,
    headerStyle: {
      backgroundColor: Colors.light.primary_01,
    },
    headerTintColor: Colors.light.white,
    headerTitleStyle: {
      fontFamily: "Poppins-Bold",
    },
    headerBackTitleVisible: false,
  };
};
