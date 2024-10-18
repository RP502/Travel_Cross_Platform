import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import {CategoryProps }  from '@/constants/Category'
import { Colors } from '@/constants/Colors'
import { router, Href } from 'expo-router'

const CatItem: React.FC<CategoryProps> = (cat: CategoryProps) => {

  let { width } = Dimensions.get("window");
  width = Math.floor((width - 62)/4)

  return (
    <TouchableOpacity style={[styles.container, { width }]} onPress={() => router.navigate(cat.router as Href<string>)}>
        <Image 
             source={{
                uri: cat.image,
              }}
              style={styles.image}
        />
      <Text style={styles.title}>{cat.name}</Text>
    </TouchableOpacity>
  )
}

export default CatItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 6,
    },
    image: {
        width: '100%',
        height: 36,
    },
    title: {
        fontFamily: "Poppins-Medium",
        color: Colors.light.text_secondary,
        textAlign: "center",
    }
})