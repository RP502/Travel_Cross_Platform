import {
  Dimensions,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

let { width, height } = Dimensions.get("window");

interface Participant {
  firstName: string;
  lastName: string;
  fullName: string;
  dateOfBirth: string;
  phoneNumber: string;
}

const ParticipantInformation = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const inputDateRef = React.useRef<TextInput | null>(null);

  const [participant, setParticipant] = useState<Participant>({
    firstName: "",
    lastName: "",
    fullName: "",
    dateOfBirth: "",
    phoneNumber: "",
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setParticipant({ ...participant, dateOfBirth: formattedDate });
    setDatePickerVisibility(false);
  };


  return (
    <>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: Colors.light.white,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 3,
              height: "90%",
              borderRadius: 10,
              backgroundColor: Colors.light.primary_01,
              marginRight: 10,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Bold",
              color: Colors.light.text,
            }}
          >
            Thônng tin người tham gia
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: 100,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            paddingVertical: 6,
            paddingHorizontal: 6,
            marginVertical: 15,
            borderRadius: 10,
            borderColor: Colors.light.primary_01,
            borderWidth: 1,
            backgroundColor: Colors.light.white,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins-Bold",
              color: Colors.light.primary_01,
            }}
          >
            +
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Bold",
              color: Colors.light.primary_01,
            }}
          >
            Thêm
          </Text>
        </TouchableOpacity>

        {/* Thông tin người tham gia */}
        <View
          style={{
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors.light.neutral_04,
            flexDirection: "column",
            gap: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: Colors.light.text_secondary,
                width: 100,
              }}
            >
              Tên đầy đủ
            </Text>
            <TouchableOpacity onPress={() => setIsDisplay(true)}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  color: Colors.light.red,
                }}
              >
                Vui lòng nhập
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", gap: 20 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: Colors.light.text_secondary,
                width: 100,
              }}
            >
              Ngày sinh
            </Text>
            <TouchableOpacity onPress={() => setIsDisplay(true)}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  color: Colors.light.red,
                }}
              >
                Vui lòng chọn
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", gap: 20 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: Colors.light.text_secondary,
                width: 100,
              }}
            >
              Số điện thoại
            </Text>
            <TouchableOpacity onPress={() => setIsDisplay(true)}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  color: Colors.light.red,
                }}
              >
                Vui lòng nhập
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => setIsDisplay(true)}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Bold",
                textDecorationLine: "underline",
              }}
            >
              Chỉnh sửa
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isDisplay}
        onRequestClose={() => {
          setIsDisplay(!isDisplay);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <View style={styles.flexStyle}>
              <TouchableOpacity onPress={() => setIsDisplay(!isDisplay)}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <Text style={styles.modalTitle}>Thông tin người tham gia</Text>
              </View>
            </View>

            {/* information filed */}
            <KeyboardAwareScrollView style={{ flex: 1, paddingHorizontal: 16, marginTop: 10 }}>
              <View style={styles.inputContainer}>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={styles.labelText}>Họ</Text>
                  {participant.lastName === "" && (
                    <Text
                      style={[styles.labelText, { color: Colors.light.red }]}
                    >
                      *
                    </Text>
                  )}
                </View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Xin vui lòng nhập Họ"
                     placeholderTextColor={Colors.light.neutral_04}
                  value={participant.lastName}
                  onChangeText={(text) =>
                    setParticipant({ ...participant, lastName: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={styles.labelText}>Tên</Text>
                  {participant.firstName === "" && (
                    <Text
                      style={[styles.labelText, { color: Colors.light.red }]}
                    >
                      *
                    </Text>
                  )}
                </View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Xin vui lòng nhập Tên"
                     placeholderTextColor={Colors.light.neutral_04}
                  value={participant.firstName}
                  onChangeText={(text) =>
                    setParticipant({ ...participant, firstName: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={styles.labelText}>Tên đầy đủ</Text>
                  {participant.fullName === "" && (
                    <Text
                      style={[styles.labelText, { color: Colors.light.red }]}
                    >
                      *
                    </Text>
                  )}
                </View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Xin vui lòng nhập tên đầy đủ"
                     placeholderTextColor={Colors.light.neutral_04}
                  value={participant.fullName}
                  onChangeText={(text) =>
                    setParticipant({ ...participant, fullName: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
              <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  isDarkModeEnabled={false}
                  textColor={Colors.light.text}
                />
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={styles.labelText}>Ngày sinh</Text>
                  {participant.dateOfBirth === "" && (
                    <Text
                      style={[styles.labelText, { color: Colors.light.red }]}
                    >
                      *
                    </Text>
                  )}
                </View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Xin vui lòng chọn ngày sinh"
                     placeholderTextColor={Colors.light.neutral_04}
                  value={participant.dateOfBirth}
                  onFocus={showDatePicker}
                  ref={inputDateRef}
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={styles.labelText}>Số điện thoại</Text>
                  {participant.phoneNumber === "" && (
                    <Text
                      style={[styles.labelText, { color: Colors.light.red }]}
                    >
                      *
                    </Text>
                  )}
                </View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Xin vui lòng nhập số điện thoại"
                     placeholderTextColor={Colors.light.neutral_04}
                  value={participant.phoneNumber}
                  onChangeText={(text) =>
                    setParticipant({ ...participant, phoneNumber: text })
                  }
                />
              </View>
            </KeyboardAwareScrollView>

            <View
              style={{
                paddingHorizontal: 16,
                paddingTop: 10,
                borderTopWidth: 1,
                borderTopColor: Colors.light.neutral_04,
              }}
            >
              <TouchableOpacity style={[styles.btn, { marginVertical: 10 }]}>
                <Text style={styles.btnText}>Lưu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ParticipantInformation;

const styles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.neutral_04,
    padding: 16,
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
    height: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: Platform.OS === "android" ? 40 : 20,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  labelText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: Colors.light.text_secondary,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.neutral_04,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginTop: 5,
    color: Colors.light.text,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
});
