import * as React from 'react'
import { Text, View } from 'react-native'
import BoyScreen from './BoyScreen'
import GirlScreen from './GirlScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="GD" component={BoyScreen} options = {{tabBarIcon: () => <Text>👱‍♂️</Text>}} />
      <Tab.Screen name="GC" component={GirlScreen} options = {{tabBarIcon: () => <Text>👱‍♀️</Text>}} />
    </Tab.Navigator>  
  )
}

export default HomeScreen
