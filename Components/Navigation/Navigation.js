import React from 'react';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import {Platform} from 'react-native'
import Home from '../Screen/Home';
import SearchScreen from '../Screen/SearchScreen';
import AddPromenade from '../Screen/AddPromenade';
import CameraScreen from '../Screen/CameraScreen';
import ListScreen from '../Screen/ListScreen';
import Lien4 from '../Screen/Lien4';
import Signin from '../Screen/Signin';
import { Ionicons } from '@expo/vector-icons';
import {Icon } from 'native-base';

var MainNavigator = createBottomTabNavigator(
  {
    'Ajouter une promenade': Home,
    'Trouver une promenade':SearchScreen
  },
  {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>{
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
var StackNavigator = createStackNavigator({
  MainNavigator:{
    screen: MainNavigator
  },
  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerStyle: {
     backgroundColor: '##2bcbba',
       },


    })
  },
  SearchScreen:{
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "Concept"
    })
  },

  ListScreen:{
    screen: ListScreen,
    navigationOptions: () => ({
      title: 'List de promenades'
    })
  },
  AddPromenade:  {
    screen: AddPromenade,
    navigationOptions: () => ({
      title: 'Proposer un promenade'
    })
  },
  Lien4:{
    screen: Lien4,
    navigationOptions: () => ({
      header: null
    })
  },
  Signin:  {
    screen: Signin,
    navigationOptions: () => ({
      header: null
    })
  },
  CameraScreen:{
    screen: CameraScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});



 export default Navigation = createAppContainer(StackNavigator);
