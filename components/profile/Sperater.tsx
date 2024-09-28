import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const Sperater = () => {
  return (
    <View style={{ backgroundColor: Colors.light.white, width: "100%", flexDirection: 'row', justifyContent: 'center' }}>
    <View
      style={[
        {
          width: "100%",
          height: 1,
          backgroundColor: Colors.light.neutral_04,
        },
      ]}
    />
  </View>
  )
}

export default Sperater

const styles = StyleSheet.create({})