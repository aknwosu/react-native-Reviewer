import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation'
import About from '../screens/about'
import React from 'react'

import Header from '../shared/header'

const screens = {
  About: {
    screen: About,
    navigationOptions:({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="About GameZone" />
        // title: 'About GameZone',
        // headerStyle: {backgroundColor: '#eee'}
    }
  }
  },
}
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
})

export default AboutStack