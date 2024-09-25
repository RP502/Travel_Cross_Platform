import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CardTourProps } from '@/constants/Tour'
import TourCard from './TourCard'

interface TourListProps {
    tourList: CardTourProps[]
}

const TourListHorization: React.FC<TourListProps> = ({tourList}) => {
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
        data={tourList}
        renderItem={({item}) => <TourCard {...item} />}
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

export default TourListHorization

const styles = StyleSheet.create({})