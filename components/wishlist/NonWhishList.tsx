import {
  Dimensions,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import IMAGES from "@/assets/images";
import { Colors } from "@/constants/Colors";
import { MasonryFlashList } from "@shopify/flash-list";
import SuggetWishCard from "./SuggetWishCard";
import {SuggetWishCardPropsListData} from '@/constants/SuggetWishList'

let { width, height } = Dimensions.get("window");
const NonWhishList = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={[styles.container,]}>
      <Image source={IMAGES.EMPTY_WISHLIST} style={styles.image} />
      <Text style={styles.labelText}>
        Chưa có hoạt động nào trong danh sách của bạn
      </Text>
      <Text style={styles.descText}>Có hoạt động bạn muốn lưu để xem sau?</Text>
      <Text style={styles.descText}>
        Hãy nhấn vào biểu tượng trái tim và hoạt động sẽ được lưu tại đây.
      </Text>
      <TouchableOpacity
        style={[styles.btn, { marginTop: 20 }]}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.btnText}>Khám phá</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <View style={styles.flexStyle}>
              <Text style={styles.modalTitle}>
                Gợi ý cho danh sách yêu thích
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
              <Text style={styles.descText}>
                Hãy nhấn vào biểu tượng trái tim và hoạt động sẽ được lưu tại
                đây.
              </Text>
              <MasonryFlashList
                data={SuggetWishCardPropsListData}
                numColumns={2}
                renderItem={({ item, index }) => <SuggetWishCard {...item}  />}
                keyExtractor={(item, index) => index.toString()}
                estimatedItemSize={100}
        
                />
              
            </ScrollView>

            <TouchableOpacity style={[styles.btn, { marginVertical: 10 }]}>
              <Text style={styles.btnText}>Hoàn tất</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NonWhishList;

const styles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageS: {
    width: width - 50,
    height: width - 50,
  },
  labelText: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    marginTop: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  descText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: Colors.light.text_secondary,
    textAlign: "center",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Colors.light.primary_01,
  },
  btnText: {
    color: Colors.light.white,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  modalOverlay: {
    width: width,
    height: height,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu nền mờ
  },
  modalView: {
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: Platform.OS === "android" ? 40 : 10,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  scrollView: {
    marginVertical: 10,
    flex: 1,
  },
  card: {
    marginRight: 10,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
});
