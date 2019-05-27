import React from 'react';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import Home from '../Screen/Home';
import Lien1 from '../Screen/Lien1';
import Lien2 from '../Screen/Lien2';
import Lien3 from '../Screen/Lien3';
import Lien4 from '../Screen/Lien4';
import Lien5 from '../Screen/Lien5';
var BottomNavigator = createBottomTabNavigator(
 {
  Home: Home,
  PageA: Lien1,
 },

);




var StackNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerStyle: {
     backgroundColor: '#f4511e',
       },
       headerTintColor: '#fff',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
    })
  },
  Lien1:{
    screen: Lien1,
    navigationOptions: () => ({
      title: "Concept"
    })
  },
  Lien2:{
    screen: Lien2,
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



 export default Navigation = createAppContainer(StackNavigator,BottomNavigator);
