import React from 'react';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import {Platform} from 'react-native'
import Home from '../Screen/Home';
import SearchScreen from '../Screen/SearchScreen';
import AddPromenade from '../Screen/AddPromenade';
import CameraScreen from '../Screen/CameraScreen';
import ListScreen from '../Screen/ListScreen';
import Signup from '../Screen/Signup';
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
  MainNavigator:{
    screen: MainNavigator
  },
  SearchScreen:{
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "Chercher un promenade"
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
  Signup:{
    screen: Signup,
    navigationOptions: () => ({
      title: 'Sign up'
    })
  },
  Signin:  {
    screen: Signin,
    navigationOptions: () => ({
      title: 'Sign in'
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
