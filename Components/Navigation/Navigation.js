import React from 'react';
import {createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator, DrawerItems, } from 'react-navigation';
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
  Lien4: Lien4,

  MainNavigator:{
    screen: MainNavigator
  },

  'Ajouter une promenade': {
    screen: DrawerNavigator,
    navigationOptions: ({ navigation }) => {
        let headerLeft = (
          <Icon
            style={{ paddingLeft: 20 }}
            onPress={() => navigation.openDrawer()}
            name='md-menu'
            size={30}
          />
        );
        return { headerLeft};
      },

    },
  Signin: Signin,
  CameraScreen: CameraScreen,


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
