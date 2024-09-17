import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function login() {
  return (
    <View>
      <Text>export default function </Text>
      <Link href={"/(auth)/register"}>login</Link>
    </View>
  )
}


const styles = StyleSheet.create({})