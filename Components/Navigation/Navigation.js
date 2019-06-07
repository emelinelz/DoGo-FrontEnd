import React from 'react';

import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation';
import {
  Platform,
  StyleSheet
} from 'react-native'

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

import {
  Ionicons
} from '@expo/vector-icons';
import {
  Icon
} from 'native-base';
import MonCompte from '../Screen/MonCompte';
import PromenadeScreen from '../Screen/PromenadeScreen';
import Promenade from '../Promenade/Promenade';
import MesPromenades from '../Screen/MesPromenades';


var iconAccount = {
  color: '#fd9644',
  marginRight: 20,
};







var StackNavigator = createStackNavigator({


    Home: Home,
    SearchScreen: SearchScreen,
    ListScreen: ListScreen,
    AddPromenade: AddPromenade,
    PromenadeScreen: PromenadeScreen,
    Signin: Signin,
    MyAccount: MyAccount,
    Account: Account,
    NextPromenade: NextPromenade,
    OldPromenade: OldPromenade,
    MyAccountEdit: MyAccountEdit,
    Alert: Alert,
    AddAlert: AddAlert,
    MonCompte: MonCompte,
    MesPromenades: MesPromenades,
    Signin: Signin,
    CameraScreen: CameraScreen,

  }

);




export default Navigation = createAppContainer(StackNavigator);