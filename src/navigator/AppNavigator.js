import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashBoard from '../screens/Dashboard'
import CarDetails from '../screens/CarDetails'
import Summary from '../screens/Summary'
import Rakbank from '../assets/rakbank-logo-small.svg'
import { Text, StyleSheet, SafeAreaView, View } from 'react-native'

const options = {
  headerTitle: () => <Rakbank width={150} />,
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerTintColor: '#A4B0BC'
}

const AppNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName={'DashBoard'} screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="DashBoard" component={DashBoard}
        options={options} />
      <Stack.Screen name="CarDetails" component={CarDetails}
        options={options} />
      <Stack.Screen name="Summary" component={Summary}
        options={{
          headerShown: false
        }} />
    </Stack.Navigator>
  )
}

export default AppNavigator