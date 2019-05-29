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
           <TouchableOpacity style={{backgroundColor:'blue', position: 'absolute', bottom: 100,width:'100%', maxWidth: '50%'}} onPress={()=>this.navigation.navigator('List')}>
                <Text style={{color:'black'}}> Valider </Text>
           </TouchableOpacity>
         </View>

         <Button full primary onPress={ () => this.props.navigation.navigate('ListScreen')}>
            <Icon name='paw'/>
            <Text>Cherche</Text>
          </Button>
         </View>


     );
}
}
