import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import IMAGES from "@/assets/images";

interface WishCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  evaluation: number;
  evaluationCount: number;
  booking: number;
  price: number;
  discount?: number;
  isWhislist?: boolean;
}

const WishCard: React.FC<WishCardProps> = (card: WishCardProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: card.image }} />
        <TouchableOpacity style={{}}>
          <Fontisto
            name="heart-alt"
            size={20}
            color={Colors.light.primary_01}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.contentContainer}>
        <Text
          style={{
            color: Colors.light.neutral_04,
            fontSize: 10,
            fontFamily: "Poppins-Regular",
          }}
        >
          {card.category}
        </Text>
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
          {card.name}
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
            {card.evaluation}
          </Text>
          <Text
            style={{
              color: Colors.light.text_secondary,
              fontSize: 10,
              fontFamily: "Poppins-Regular",
            }}
          >
            ({card.evaluationCount})
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
          >
            {card.booking} Đã được đặt
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
            Từ đ {card.price}
          </Text>
          {card.discount && (
            <Text
              style={{
                color: Colors.light.text_secondary,
                fontSize: 10,
                fontFamily: "Poppins-Medium",
                textDecorationLine: "line-through",
              }}
            >
              đ{(card.price * card.discount) / 100}
            </Text>
          )}
        </View>

        <View>
          <View
            style={{
              padding: 3,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: Colors.light.primary_01,
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                color: Colors.light.primary_01,
                fontSize: 8,
                fontFamily: "Poppins-Regular",
              }}
            >
              Chính sách đảm bảo giá tốt
            </Text>
          </View>
        </View>
      </View>

    </View>
  );
};

export default WishCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  contentContainer: {},
});
