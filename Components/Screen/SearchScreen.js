import React from 'react';
import { StyleSheet, Text, View, Style, TouchableOpacity, Picker,Slider} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import { Location, Permissions } from 'expo';
import { Container, Header, Content, Button, Icon, Item, Input, Footer, DatePicker} from 'native-base';


export default class SearchScreen extends React.Component {

constructor(){
  super();
  this.state = {currentPosition:{latitude:0,longitude:0},logPosition:[],duree:1}
  this.state = { chosenDate: new Date() };
  this.setDate = this.setDate.bind(this);

}
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
}


 render(){

   return (
     <View style={{flex:1, justifyContent: 'center'}}>


     <Header style={{alignItems:"flex-bottom" ,fontWeight: 'bold'}} searchBar rounded>

      <Item>
         <Icon name="ios-search" />
          <Input placeholder="Autour de moi" />
         <Icon name="ios-people" />
      </Item>
     </Header>
     <View style={{flex:1, flexDirection: 'colum'}}>
         <View style= {{ height:200,margin:30}}>
           <MapView mapType = "standard"
        style={{flex : 0.9}}
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

         </MapView>
         </View>

       <View style= {{ height:40, backgroundColor:'pink'}}>
         <Slider
            style={{width: 200, height: 40}}

            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>



      <View style= {{ height:50}}>
      <View style={{flex:1, flexDirection: 'row'}}>
        <Text>Quand:</Text>

         <DatePicker

         date={this.state.date}
         mode="date"
         placeholder="select date"
         format="YYYY-MM-DD"
         minDate="2016-05-01"
         maxDate="2016-06-01"
         confirmBtnText="Confirm"
         cancelBtnText="Cancel"

         onDateChange={(date) => {this.setState({date: date})}}
          />
     </View>
 </View>


 <View style={{flex:1, flexDirection: 'row'}}>
   <Text>Duree:</Text>
   <Picker style= {{ height:50}}
     selectedValue={this.state.duree}
     onValueChange={(itemValue, itemIndex) =>
       this.setState({duree: itemValue})
     }>
     <Picker.Item label="1 heure" value="1" />
     <Picker.Item label="2 heure" value="2" />
   </Picker>
  </View>

      <View style= {{ height:30, flex:'bottom'}}>
         <Button full primary onPress={ () => this.props.navigation.navigate('List')}>
            <Icon name='paw'/>
            <Text>Cherche</Text>
          </Button>
        </View>
      </View>
 </View>

     );
}
}
