import React from 'react';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import {Platform} from 'react-native'
import Home from '../Screen/Home';
import SearchScreen from '../Screen/SearchScreen';
import ListScreen from '../Screen/ListScreen';
import Lien3 from '../Screen/Lien3';
import Lien4 from '../Screen/Lien4';
import Lien5 from '../Screen/Lien5';
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
            return <Icon type="Ionicons" name="add-circle" />
          }
          else if (navigation.state.routeName == 'Trouver une promenade'){
            return <Icon type="Ionicons" name="locate" />
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
      header: null
    })
  },
  Lien3:  {
    screen: Lien3,
    navigationOptions: () => ({
      header: null
    })
  },
  Lien4:{
    screen: Lien4,
    navigationOptions: () => ({
      header: null
    })
  },
  Lien5:  {
    screen: Lien5,
    navigationOptions: () => ({
      header: null
    })
  }
});



 export default Navigation = createAppContainer(StackNavigator);
