import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const AboutScreen = ({ navigation, route }) => {

    const { color, colorName } = route.params;
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <View>
                <Text style={styles.colorText}>{color}</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Text style={styles.btnText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, colorText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    backBtn: {
        padding: 20,
        marginTop: 10,
        backgroundColor: '#5EA6EE',
        justifyContent: 'center',
        borderRadius: 7
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    }
})


export default AboutScreen
