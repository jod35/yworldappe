import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import ColorBox from './components/ColorBox'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{
          'title': "Welcome to Our App"
        }} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App