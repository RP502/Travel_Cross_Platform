import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

const BackButton: React.FC = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
    );
}

export default BackButton

const styles = StyleSheet.create({})