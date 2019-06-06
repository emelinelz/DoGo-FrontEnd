import React from 'react';
<<<<<<< HEAD
import {Button,createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator, DrawerItems, } from 'react-navigation';
import {Platform} from 'react-native';
=======
import {createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator, DrawerItems, } from 'react-navigation';
import {Platform, StyleSheet} from 'react-native'
>>>>>>> addpages
import Home from '../Screen/Home';
import SearchScreen from '../Screen/SearchScreen';
import AddPromenade from '../Screen/AddPromenade';
import CameraScreen from '../Screen/CameraScreen';
import ListScreen from '../Screen/ListScreen';
import Signup from '../Screen/Signup';
import Signin from '../Screen/Signin';
import MyAccount from '../Screen/MyAccount';
import Account from '../Screen/Account';
import NextPromenade from '../Screen/NextPromenade';
import OldPromenade from '../Screen/OldPromenade';
import MyAccountEdit from '../Screen/MyAccountEdit';
import Alert from '../Screen/Alert';
import AddAlert from '../Screen/AddAlert';

// Manque page inscription faite chez Ai et Produit faite aussi chez Ai en modele

import { Ionicons } from '@expo/vector-icons';
import {Icon } from 'native-base';
import MonCompte from '../Screen/MonCompte';
import PromenadeScreen from '../Screen/PromenadeScreen';
import Promenade from '../Promenade/Promenade';
import MesPromenades from '../Screen/MesPromenades';
import maptest from '../Screen/maptest'

var iconAccount = {
  color: '#fd9644',
  marginRight: 20,
};


<<<<<<< HEAD
var MainNavigator = createBottomTabNavigator(
  {
    'Ajouter une promenade': AddPromenade,
    'Trouver une promenade':SearchScreen
  },
  {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor, horizontal }) =>{
          if (navigation.state.routeName == 'Ajouter une promenade'){
            return <Icon  name="add-circle" />
          }
          else if (navigation.state.routeName == 'Trouver une promenade'){
            return <Icon name="locate" />
          }
        }
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
);


const DrawerNavigator = createDrawerNavigator(
  {
    SearchScreen: SearchScreen,
    ListScreen: ListScreen,
    AddPromenade: AddPromenade
  },
);
=======



>>>>>>> addpages


var StackNavigator = createStackNavigator({


<<<<<<< HEAD
  Home: Home,
  SearchScreen: SearchScreen,
  ListScreen: ListScreen,
  AddPromenade: AddPromenade,
  Signup: Signup,

  MainNavigator:{
    screen: MainNavigator
  },

  Signin: Signin,
  CameraScreen: CameraScreen,
MonCompte:MonCompte,
PromenadeScreen:PromenadeScreen,
Promenade:Promenade,
MesPromenades:MesPromenades,
maptest:maptest
},
{
  defaultNavigationOptions: {
    title: 'DoGo',
    headerStyle: { height: 60 },
    
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      color: "#2bcbba",
      fontWeight: '800'
    }
  }
=======
   Home: Home,
   SearchScreen: SearchScreen,
   ListScreen: ListScreen,
   AddPromenade: AddPromenade,
   Lien4: Lien4,
   Signin: Signin,
   MyAccount : MyAccount,
   Account: Account,
   NextPromenade: NextPromenade,
   OldPromenade: OldPromenade,
   MyAccountEdit: MyAccountEdit,
   Alert: Alert,
   AddAlert: AddAlert,


   Signin: Signin,
   CameraScreen: CameraScreen,

>>>>>>> addpages
}

);




 export default Navigation = createAppContainer(StackNavigator);
