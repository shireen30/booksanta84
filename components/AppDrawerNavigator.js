import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingsScreen'
import MyDonationScreen from '../screens/MyDonationScreen'
import NotificationScreen from '../screens/NotificationScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  MyDonations : {
    screen : MyDonationScreen
  },
  Setting : {
    screen : SettingScreen
  },
  Notifications:{
    screen:NotificationScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })