import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Link } from 'expo-router';

const WhishList = () => {
    const [wishlists, setWishlists] = useState([]);
  return (
    <View>
       <View style={styles.topContainer}>
        <View style={styles.flexStyle}>
          <Text style={styles.labelText}>Danh sách của tôi</Text>
          <Link href="/wishlist" style={styles.linkText}>
            Tạo danh sách
          </Link>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.labelText}>Các mục đã lưa</Text>
        {wishlists.length === 0 ? (
          <Text>Không có mục nào trong danh sách của bạn</Text>
        ) : (
          <Text>Đã có mục trong danh sách của bạn</Text>
        )}
      </View>
    </View>
  )
}

export default WhishList

const styles = StyleSheet.create({
    flexStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      linkText: {
        textDecorationLine: "underline",
        color: Colors.light.text_secondary,
      },
      container: {
        paddingHorizontal: 16,
        paddingTop: 30,
      },
      topContainer: {},
      bottomContainer: {},
      labelText: {
        fontSize: 16,
        fontFamily: "Poppins-Bold",
      },
})