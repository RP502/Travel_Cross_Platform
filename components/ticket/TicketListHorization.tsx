import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import HotelCard from './TicketCard'
import { CardHotelProps } from '@/constants/Hotel'

interface HotelListProps {
    hotelList: CardHotelProps[]
}

const TicketListHorization: React.FC<HotelListProps> = ({hotelList}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  let { width } = Dimensions.get("window");
  width = Math.floor((width - 45) / 2);
  const handleScroll = (event: any) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };
  return (
    <View style={{}}>
      <FlatList 
        data={hotelList}
        renderItem={({item}) => <HotelCard {...item} />}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
      />
    </View>
  )
}

export default TicketListHorization

const styles = StyleSheet.create({})