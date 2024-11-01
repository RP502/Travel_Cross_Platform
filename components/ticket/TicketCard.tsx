import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Colors } from "@/constants/Colors";
import IMAGES from "@/assets/images";
import { Ticket } from "@/redux/tickets/ticketType";

interface CardTicketProps {
  ticket: Ticket;
}

const TicketCard: React.FC<CardTicketProps> = ({ ticket }) => {
  let { width } = Dimensions.get("window");
  width = Math.floor((width - 20) / 2);
  return (
  
    <View style={[styles.container, { width }]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: ticket.image[0] }}
          style={{
            width,
            height: 140,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <TouchableOpacity style={styles.whislist}>
          <Fontisto name="heart-alt" size={20} color={Colors.light.text} />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: Colors.light.green,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Poppins-Medium",
              color: Colors.light.white,
              padding: 2,
            }}
          >
            {ticket.provine}
          </Text>
        </View>
        {ticket.sale !== 0  && (
          <View style={[styles.sale]}>
            <Text style={styles.textSale}>Tiết kiệm {ticket.sale}%</Text>
          </View>
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text
          style={{
            color: Colors.light.text,
            fontSize: 13,
            fontFamily: "Poppins-Bold",
            textAlign: "left",
          }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {ticket.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image
            source={IMAGES.EVALUATION}
            style={{
              width: 14,
              height: 9,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          />
          <Text
            style={{
              color: Colors.light.primary_01,
              fontSize: 10,
              fontFamily: "Poppins-Regular",
            }}
          >
            {ticket.evaluation}
          </Text>
          <Text
            style={{
              color: Colors.light.text_secondary,
              fontSize: 10,
              fontFamily: "Poppins-Regular",
            }}
          >
            {ticket.evaluationCount}
          </Text>
          <AntDesign
            name="caretright"
            size={10}
            color={Colors.light.text_secondary}
          />
          <Text
            style={{
              color: Colors.light.text_secondary,
              fontSize: 10,
              fontFamily: "Poppins-Regular",
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {ticket.booking} Đã được đặt
          </Text>
        </View>

        <View style={{ flexDirection: "row", gap: 4 }}>
          <Text
            style={{
              color: Colors.light.primary_01,
              fontSize: 10,
              fontFamily: "Poppins-Medium",
            }}
          >
            Từ đ {ticket.price}
          </Text>
          {ticket.sale !== 0 && (
            <Text
              style={{
                color: Colors.light.text_secondary,
                fontSize: 10,
                fontFamily: "Poppins-Medium",
                textDecorationLine: "line-through",
              }}
            >
              đ{(ticket.price * ticket.sale) / 100}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default TicketCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    // shadowColor: "#000", // Shadow color for iOS
    // shadowOffset: { width: 1, height: 2 }, // Shadow offset for iOS
    // shadowOpacity: 0.8, // Shadow opacity for iOS
    // shadowRadius: 3, // Shadow radius for iOS
    // elevation: 5, // Elevation for Android
    marginBottom: 10,
  },
  imageContainer: {},
  whislist: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  sale: {
    position: "absolute",
    bottom: 8,
    left: 2,
    backgroundColor: Colors.light.red,
    padding: 5,
    borderRadius: 5,
  },
  textSale: {
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    color: Colors.light.white,
  },
  contentContainer: {
    padding: 8,
    backgroundColor: Colors.light.white,
    flexDirection: "column",
    gap: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
