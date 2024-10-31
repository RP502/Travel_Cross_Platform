import { Image, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";
import IMAGES from "@/assets/images";

interface LoaderProps {
  isLoading?: boolean;
  setIsLoading?: any;
}

const Loader: React.FC<LoaderProps> = ({ isLoading, setIsLoading }) => {
  return (
    <Modal
      transparent={true}
      animationType={"none"}
      visible={isLoading}
      style={{ zIndex: 1100 }}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={isLoading} color="black" />
          {/* <Image
            source={IMAGES.LOADING}
            style={{ height: 80, width: 80 }}
            resizeMode="contain"
            resizeMethod="resize"
          /> */}
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    // backgroundColor: "#FFFFFF",
    // opacity: 0.5,
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
