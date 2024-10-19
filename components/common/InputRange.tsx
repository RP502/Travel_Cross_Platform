import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface InputRangeProps {
    min: number;
    max: number;
    step: number;
    title: string;
    onValueChange: (value: number) => void;
}

const InputRange: React.FC<InputRangeProps> = ({ min, max, step, title, onValueChange}) => {
  return (
    <View>
      <View style={styles}>
        <Text>{title}</Text>
      </View>
    </View>
  )
}

export default InputRange

const styles = StyleSheet.create({})