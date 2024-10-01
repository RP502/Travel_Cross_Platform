import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import TicketCard from "./VrCard";
import { CardVr360Props } from "@/constants/Vr360";
import VrCard from "./VrCard";

interface VrListProps {
  vrList: CardVr360Props[];
}

const VrCardListVertical: React.FC<VrListProps> = ({ vrList }) => {

  
  return (
    <View style={[styles.container]}>

      <MasonryFlashList
        data={vrList}
        numColumns={2}
        renderItem={({ item, index }) => <VrCard {...item} index={index} />}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

export default VrCardListVertical;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
