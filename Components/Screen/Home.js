import React from 'react';
import {
 View,
 ImageBackground,
 // Button, Text,
 Divider
} from 'react-native';
// import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


   // <Divider style={{height:20}}/>

export default class Home extends React.Component {


 render() {
   return (
     <ImageBackground style={{flex:1}} source={require("../../assets/Images/chiens.jpeg")}>



     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>



          

     </View>

     </ImageBackground>

    );
 }
}
