import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {CategoryProps }  from '@/constants/Category'
import { Colors } from '@/constants/Colors'

const CatItem: React.FC<CategoryProps> = (cat: CategoryProps) => {
  return (
    <TouchableOpacity style={styles.container}>
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
        justifyContent: "center",
        alignContent: "center",
    },
    image: {
        width: 36,
        height: 36,
    },
    title: {
        fontFamily: "Poppins-Medium",
        color: Colors.light.text_secondary,
    }
})