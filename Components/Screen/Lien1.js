import React from 'react';
import { ImageBackground, AppRegistry, View,Button} from 'react-native';





export default class Lien1 extends React.Component {


 render() {
   return (
     <ImageBackground style={{flex:1}} source={require("../../assets/Images/paw2.jpg")}>
      <View style={{
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'flex-end',
       alignItems: 'stretch',
      }}>


      <Button
               style={{height: 30,width: 100, backgroundColor:'black', color:'white', justifyContent:'center',aligntext:'center'}}
               onPress={ () => this.props.navigation.navigate('Lien2')}
               title="Next"
               color="black"
      />
      <Button
                   style={{height: 30,width: 100, backgroundColor:'black', color:'white', justifyContent:'center',aligntext:'center'}}
                   onPress={ () => this.props.navigation.navigate('CameraScreen')}
                   title="Camera"
                   color="black"
       />
      </View>
     </ImageBackground>    );
 }
}
  <View style={{height: 50, backgroundColor: 'white'}} />
