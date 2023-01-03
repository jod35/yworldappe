import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import items from '../../data'
import ColorBox from '../../components/ColorBox'

const HomeScreen = ({ navigation }) => {


    const renderItem = ({ item }) => {
        return <ColorBox color={item.color} colorName={item.colorName}
            onPress={() => navigation.navigate('About', {
                colorName: item.colorName,
                color: item.color,
            })} />
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Here are some coloured texts</Text>
            </View>
            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        backgroundColor: '#fff'
    }
})

export default HomeScreen