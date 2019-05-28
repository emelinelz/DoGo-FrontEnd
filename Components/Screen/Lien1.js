import React from 'react';
import { ScrollView,Text,ImageBackground, AppRegistry, View,Button} from 'react-native';
import {ListItem} from 'react-native-elements';


export default class Lien1 extends React.Component {


 render() {
   return (
     <ImageBackground style={{flex:1}} source={require("../../assets/Images/paw2.jpg")}>
      <View style={{
       flex: 1,
       justifyContent:'center',
       alignItems: 'center',
      }}>

      <Button
               style={{height: 30,width: 100, backgroundColor:'black', color:'white', justifyContent:'center',aligntext:'center'}}
               onPress={ () => this.props.navigation.navigate('List')}
               title="Voir les promenades"
               color="black"
             />
      </View>
     </ImageBackground>    );
 }
}
 