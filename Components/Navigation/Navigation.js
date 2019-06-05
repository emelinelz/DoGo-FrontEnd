import React from 'react';
import {Button,createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator, DrawerItems, } from 'react-navigation';
import {Platform} from 'react-native';
import Home from '../Screen/Home';
import SearchScreen from '../Screen/SearchScreen';
import AddPromenade from '../Screen/AddPromenade';
import CameraScreen from '../Screen/CameraScreen';
import ListScreen from '../Screen/ListScreen';
import Signup from '../Screen/Signup';
import Signin from '../Screen/Signin';
import { Ionicons } from '@expo/vector-icons';
<<<<<<< HEAD
import { Icon } from 'native-base';

=======
import {Icon } from 'native-base';
import MonCompte from '../Screen/MonCompte';
import PromenadeScreen from '../Screen/PromenadeScreen';
import Promenade from '../Promenade/Promenade';
import MesPromenades from '../Screen/MesPromenades';
import maptest from '../Screen/maptest'
>>>>>>> a289c2e84d09d54b235481c669c91926dd2ce6f8



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


var StackNavigator = createStackNavigator({


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
}

);



 export default Navigation = createAppContainer(StackNavigator);
