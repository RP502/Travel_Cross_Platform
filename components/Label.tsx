import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from '@/constants/Colors';

export interface LabelProps {
    title: string;
    icon: string;
    iconColor: string;
    textColor: string; 
}

const Label: React.FC<LabelProps> = (props: LabelProps) => {
  return (
    <View style={styles.container}>
        <FontAwesome5 name={props.icon} size={13} color={props.iconColor} />
        <Text style={[styles.text, { color: props.textColor }]}>{props.title}</Text>      
    </View>
  )
}

export default Label

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 11,
    },
    icon: {

    },
    text: {
        fontSize: 13,
        fontFamily: 'Poppins-Bold'
    }
})