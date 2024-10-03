import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const TourLayout = () => {
  return (
    <Stack initialRouteName='index'>
      <Stack.Screen name='index' options={{ headerShown: false}} />
      <Stack.Screen name='book_tour/index'/>
    </Stack>
  )
}

export default TourLayout

const styles = StyleSheet.create({})