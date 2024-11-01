import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import FillterItem from "./FillterItem";
import { WishItem } from "@/redux/wishlist/wishItemType";
import { MasonryFlashList } from "@shopify/flash-list";
import TourCard from "../tour/TourCard";
import { Tour } from "@/redux/tours/tourType";
import HotelCard from "../hotel/HotelCard";
import { useSelector } from "react-redux";
import { Hotel } from "@/redux/hotels/hotelType";
import { Ticket } from "@/redux/tickets/ticketType";
import TicketCard from "../ticket/TicketCard";

interface Fillter {
  name: string;
  isActive: boolean;
}

const initFilter: Fillter[] = [
  {
    name: "Tất cả",
    isActive: true,
  },
  {
    name: "Vé tham quan",
    isActive: false,
  },
  {
    name: "Tour du lịch",
    isActive: false,
  },
  {
    name: "Khách sạn",
    isActive: false,
  },
];

interface Props {
  wishlist: WishItem[];
}

const WhishList: React.FC<Props> = ({ wishlist }) => {
  const hotels: Hotel[] = useSelector((state: any) => state.hotels.hotels);
  const tours: Tour[] = useSelector((state: any) => state.tours.tours);
  const tickets: Ticket[] = useSelector((state: any) => state.tickets.tickets);

  const [filterList, setFilterList] = useState<Fillter[]>(initFilter);
  const [filter, setFilter] = useState<string>("Tất cả");

  const tourIdList: string[] = [];
  const ticketIdList: string[] = [];
  const hotelIdList: string[] = [];

  wishlist.forEach((item) => {
    if (item.type === "tour") {
      tourIdList.push(item.tourId as string);
    } else if (item.type === "ticket") {
      ticketIdList.push(item.ticketId as string);
    } else {
      hotelIdList.push(item.hotelId as string);
    }
  });

  const handleFilter = (name: string) => {
    setFilterList((pre) =>
      pre.map((item) => {
        return {
          ...item,
          isActive: item.name === name ? true : false,
        };
      })
    );
    setFilter(name);
  };

  const isNull = true;
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.flexStyle}>
          <Text style={styles.labelText}>Danh sách của tôi</Text>
          <Link href="/wishlist" style={styles.linkText}>
            Tạo danh sách
          </Link>
        </View>
        {isNull && (
          <Text style={{}}>Hãy tạo danh sách để lưu các mục bạn muốn mua</Text>
        )}
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.labelText}>Các mục đã lưa</Text>

        <View style={styles.fillterContainer}>
          <FlatList
            data={filterList}
            renderItem={({ item }) => (
              <FillterItem {...item} handleFilter={handleFilter} />
            )}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          {filter === "Tất cả" && (
            <MasonryFlashList
              data={wishlist}
              numColumns={2}
              renderItem={({ item, index }) => {
                if (item.type === "tour") {
                  const tourId: string = item.tourId as string;
                  const tour: Tour = tours.find(
                    (i) => i.tourId === tourId
                  ) as Tour;

                  return <TourCard tour={tour as Tour} />;
                } else if (item.type === "ticket") {
                  const ticketId: string = item.ticketId as string;
                  const ticket: Ticket = tickets.find(
                    (i) => i.ticketId === ticketId
                  ) as Ticket;
                  return <TicketCard ticket={ticket as Ticket} />;
                }
                const hotelId: string = item.hotelId as string;
                const hotel: Hotel = hotels.find(
                  (i) => i.hotelId === hotelId
                ) as Hotel;
                return <HotelCard hotel={hotel as Hotel} />;
              }}
              keyExtractor={(item, index) => index.toString()}
              estimatedItemSize={100}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          )}

          {filter === "Tour du lịch" && (
            <MasonryFlashList
              data={tourIdList}
              numColumns={2}
              renderItem={({ item, index }) => {
                const tour: Tour = tours.find((i) => i.tourId === item) as Tour;

                return <TourCard tour={tour as Tour} />;
              }}
              keyExtractor={(item, index) => index.toString()}
              estimatedItemSize={100}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          )}
          {filter === "Vé tham quan" && (
            <MasonryFlashList
              data={ticketIdList}
              numColumns={2}
              renderItem={({ item, index }) => {
                const ticket: Ticket = tickets.find(
                  (i) => i.ticketId === item
                ) as Ticket;

                return <TicketCard ticket={ticket as Ticket} />;
              }}
              keyExtractor={(item, index) => index.toString()}
              estimatedItemSize={100}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          )}
          {filter === "Khách sạn" && (
            <MasonryFlashList
              data={hotelIdList}
              numColumns={2}
              renderItem={({ item, index }) => {
                const hotel: Hotel = hotels.find(
                  (i) => i.hotelId === item
                ) as Hotel;
                return <HotelCard hotel={hotel as Hotel} />;
              }}
              keyExtractor={(item, index) => index.toString()}
              estimatedItemSize={100}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default WhishList;

const styles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkText: {
    textDecorationLine: "underline",
    color: Colors.light.text_secondary,
  },
  secondText: {
    color: Colors.light.text_secondary,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  topContainer: {
    marginBottom: 20,
  },
  bottomContainer: {},
  labelText: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
  fillterContainer: {
    marginTop: 10,
  },
});
