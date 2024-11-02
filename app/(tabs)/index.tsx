import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Search from "@/components/Search";
import Categories from "@/components/categories";
import { Colors } from "@/constants/Colors";
import Slider from "@/components/slider";
import SlideList from "@/components/slider";
import Label from "@/components/Label";
import AddressList from "@/components/address/AddressList";
import { CardTourPropsListData } from "@/constants/Tour";
import { CardTicketPropsListData } from "@/constants/Ticket";
import { CardVr360PropsListData } from "@/constants/Vr360";
import TourListHorization from "@/components/tour/TourListHorization";
import HotelListHorization from "@/components/hotel/HotelListHorization";
import TicketListHorization from "@/components/ticket/TicketListHorization";
import VrCardListVertical from "@/components/vr360/VrCardVerticalList";
import { SliderList } from "@/constants/Sider";
import { auth } from "@/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
// Import the AppDispatch type
import { fetchSlidersAsync } from "@/redux/sliders/slidersSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchToursAsync } from "@/redux/tours/toursSlice";
import { fetchLocationsAsync } from "@/redux/locations/locationsSlice";
import { fetchHotelsAsync } from "@/redux/hotels/hotelsSlice";
import { fetchTicketsAsync } from "@/redux/tickets/ticketsSlice";
import { fetchCartsAsync } from "@/redux/cart/cartsSlice";
import Loader from "@/components/common/Loader";
import { fetchWishListAsync } from "@/redux/wishlist/wishilistSlice";
import { fetchBookingsAsync } from "@/redux/bookings/bookingsSlice";

const Home = () => {
  const userId = auth.currentUser?.uid;
  // Use the AppDispatch type
  const dispatch = useDispatch<AppDispatch>();

  const { sliders, status, error } = useSelector((state: any) => state.sliders);
  const tours = useSelector((state: any) => state.tours.tours);
  const { addressList } = useSelector((state: any) => state.locations);
  const hotels = useSelector((state: any) => state.hotels.hotels);
  const tickets = useSelector((state: any) => state.tickets.tickets);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSlidersAsync());
      dispatch(fetchToursAsync());
      dispatch(fetchLocationsAsync());
      dispatch(fetchHotelsAsync());
      dispatch(fetchTicketsAsync());
      dispatch(fetchCartsAsync(userId as string));
      dispatch(fetchWishListAsync(userId as string));
      dispatch(fetchBookingsAsync(userId as string));
    }
  }, [status, dispatch]);

  if (status === "loading") return <Loader />;
  if (status === "failed")
    return (
      <View>
        <Text>Errror</Text>
      </View>
    );

  return (
    <SafeAreaView style={[styles.container]}>
      <Search />
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <Categories />
          <SlideList dataList={sliders} />
        </View>
        <View style={styles.contenContainer}>
          <View style={styles.tourContainer}>
            <Label
              title="Tour trải nghiệm"
              icon="flag"
              iconColor={Colors.light.primary_01}
              textColor={Colors.light.text}
            />
            <AddressList addresList={addressList} />
            <TourListHorization tourList={tours} />
          </View>

          <View style={styles.hotelContainer}>
            <Label
              title="Top Khách sạn được yêu thích"
              icon="hotel"
              iconColor={Colors.light.primary_01}
              textColor={Colors.light.text}
            />
            <AddressList addresList={addressList} />
            <HotelListHorization hotelList={hotels} />
          </View>

          <View style={styles.ticketContainer}>
            <Label
              title="Top Vé tham quan được yêu thích"
              icon="ticket-alt"
              iconColor={Colors.light.red}
              textColor={Colors.light.red}
            />
            <AddressList addresList={addressList} />
            <TicketListHorization ticketList={tickets} />
          </View>

          <View style={styles.vrContainer}>
            <Label
              title="Ảnh địa điểm nối bật VR 360"
              icon="vr-cardboard"
              iconColor={Colors.light.primary_01}
              textColor={Colors.light.text}
            />
            <VrCardListVertical vrList={CardVr360PropsListData} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
  topContainer: {
    backgroundColor: Colors.light.white,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  contenContainer: {
    paddingHorizontal: 5,
    backgroundColor: Colors.light.background,
    paddingTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tourContainer: {
    marginBottom: 20,
  },
  hotelContainer: {
    marginBottom: 20,
  },
  ticketContainer: {
    marginBottom: 20,
  },
  vrContainer: {
    marginLeft: 12,
  },
});
