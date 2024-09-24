import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '@/components/Search'
import Categories from '@/components/categories'

const Home = () => {
  return (
   <SafeAreaView>
      <Search />
      <Categories />
   </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})