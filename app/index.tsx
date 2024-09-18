import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import Login from './(auth)/login'
import { Colors } from '@/constants/Colors'
import Onborading from './onboardring'



const index: React.FC = () => {

  useFonts({
    'Poppins': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@/assets/fonts//Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('@/assets/fonts//Poppins-ExtraBold.ttf'),
    'Poppins-Medium': require('@/assets/fonts//Poppins-Medium.ttf'),
    'Poppins-Light': require('@/assets/fonts//Poppins-Light.ttf'),
    'Poppins-Thin': require('@/assets/fonts//Poppins-Thin.ttf'),
  })

  return (
    <View style={{ flex: 1 }}>
      <Onborading />
    </View>
  )
}

export default index