import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import TicketCard from './TicketCard'
import { CardTicketProps } from '@/constants/Ticket'

interface TicketListProps {
    ticketList: CardTicketProps[]
}

const TicketListHorization: React.FC<TicketListProps> = ({ticketList}) => {
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
        data={ticketList}
        renderItem={({item}) => <TicketCard {...item} />}
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