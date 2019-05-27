import React from 'react';
import {
 View,
 ImageBackground,
 Button, Text,Divider
} from 'react-native';


   // <Divider style={{height:20}}/>

export default class Home extends React.Component {


 render() {
   return (
     <ImageBackground style={{flex:1}} source={require("../../assets/Images/paw1.jpg")}>


     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

           <Text h1 style={{color: "#FFFFFF",fontSize: 30,}}>DOGO</Text>


           <Button
             style={{height: 30,width: 100, backgroundColor:'black', color:'white', justifyContent:'center',aligntext:'center'}}
             onPress={ () => this.props.navigation.navigate('Lien1')}
             title="Welcome"
             color="black"
           />
           <Button
             style={{height: 30,width: 100, backgroundColor:'black', color:'white', justifyContent:'center',aligntext:'center'}}
             onPress={ () => this.props.navigation.navigate('Lien5')}
             title="Connection"
             color="black"
           />
     </View>

     </ImageBackground>
    );
 }
}
