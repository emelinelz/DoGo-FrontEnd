import React from 'react';
import { StyleSheet, Text, View, Style, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import { Location, Permissions } from 'expo';
import { Container, Header, Content, Button, Icon, Item, Input, Footer, DatePicker} from 'native-base';


export default class Lien1 extends React.Component {

constructor(){
  super();
  this.state = {currentPosition:{latitude:0,longitude:0},logPosition:[] }
  this.state = { chosenDate: new Date() };
  this.setDate = this.setDate.bind(this);
}
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
}

//   componentWillMount() {
//    this._getLocationAsync();
//  }
//
//  _getLocationAsync = async () => {
//      var { status } = await Permissions.askAsync(Permissions.LOCATION);
//      if (status !== 'granted') {
//        this.setState({
//          errorMessage: 'Permission to access location was denied',
//        });
//      }
//
//     Location.watchPositionAsync({distanceInterval: 5},
//      (location) => {
//        // if(this.state.currentPsition.latitude !=0 && this.state.currentPosition.longitude != 0)
//        // {var logPositionCopy=[...this.state.currentPosition];
//        // logPositionCopy.push({latitude:this.state.currentPosition.latitude,longitude:this.state.currentPosition.longitude})
//        // this.setState({logPosition:logPositionCopy});
//        //
//          fetch('', {
            // method:'Post',
            // headers:{'Content-Type':'application/x-www-form-urlencoded'},
            // body:
// })
//        }
//      }
 //         var currentPosition = {latitude: location.coords.latitude, longitude: location.coords.longitude};
 //                this.setState({currentPosition});
 //                console.log(currentPosition);
 // )
 // }
 render(){

   return (
     <View style={{flex:1}}>
       <MapView mapType = "standard"
        style={{flex : 0.5}}
        initialRegion=
        {{
          latitude: 48.8534,
          longitude: 2.3488,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
            <Marker coordinate={{latitude: 48.8534, longitude: 2.3488}}
              title="Hy there!"
              description="You are here !"
            />
            <Header searchBar rounded>
             <Item>
                <Icon name="ios-search" />
                 <Input placeholder="Autour de moi" />
                <Icon name="ios-people" />
             </Item>
           </Header>
         </MapView>
        <DatePicker
           defaultDate={new Date(2018, 4, 4)}
           minimumDate={new Date(2018, 1, 1)}
           maximumDate={new Date(2018, 12, 31)}
           locale={"en"}
           timeZoneOffsetInMinutes={undefined}
           modalTransparent={false}
           animationType={"fade"}
           androidMode={"default"}
           placeHolderText="Select date"
           textStyle={{ color: "green" }}
           placeHolderTextStyle={{ color: "#d3d3d3" }}
           onDateChange={this.setDate}
           disabled={false}
         />
         <View style={{flex:1,width:'100%'}}>
           <TouchableOpacity style={{backgroundColor:'blue', position: 'absolute', bottom: 100,width:'100%', maxWidth: '50%'}} onPress={()=>this.navigation.navigator('Lien4')}>
                <Text style={{color:'black'}}> Valider </Text>
           </TouchableOpacity>
         </View>


         <Text>
           Date: {this.state.chosenDate.toString().substr(4, 12)}
         </Text>

     </View>



     );
}
}
