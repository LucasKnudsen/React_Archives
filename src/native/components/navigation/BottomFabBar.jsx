/* eslint-disable react/display-name */

import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { COLORS, FONTS } from '../../constants'
import { BottomFabBar } from 'rn-wave-bottom-bar'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { ParticipantMainScreen } from '../../screens'

const Tab = createBottomTabNavigator()

const customTabBarIcon =
  (name, label) =>
  ({ focused }) =>
    (
      <View style={{ alignItems: 'center', marginTop: focused ? 16 : 0 }}>
        <AntIcon
          name={name}
          size={28}
          color={focused ? COLORS.primary : COLORS.dark}
        />

        <Text style={{ ...FONTS.body5, opacity: focused ? 0 : 1 }}>
          {label}
        </Text>
      </View>
    )

const BottomFabBar = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{ tabBarIconStyle: COLORS.primary, headerShown: false }}
        tabBar={(props) => (
          <BottomFabBar
            color={COLORS.white}
            bottomBarContainerStyle={{
              backgroundColor: 'transparent',
            }}
            {...props}
          />
        )}
      >
        <Tab.Screen
          options={{
            tabBarIcon: customTabBarIcon('home', 'Fester'),
          }}
          name='ParticipantMain'
          component={ParticipantMainScreen}
        />
      </Tab.Navigator>
    </>
  )
}

export default BottomFabBar
