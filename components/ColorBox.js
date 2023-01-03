import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ColorBox = ({ color, colorName, onPress }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={[styles.textContainer, { backgroundColor: color }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{colorName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        width: '100%',
    }
})

export default ColorBox