import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, Divider, Slider } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Location, Permissions } from 'expo';
import { Container, Header, Content, Button, Icon, Item, Input, FooterTab } from 'native-base';
import TimePicker from 'react-native-24h-timepicker';
import DatePicker from 'react-native-datepicker';


export default class SearchScreen extends React.Component {

constructor(){
  super();
  this.state = {
       latitude:0,
       longitude:0,
       logPosition:[],
       duree:1,
        time: " ",
       chosenDate: new Date()},
       this.setDate = this.setDate.bind(this);

}

  setDate(newDate) {
    this.setState({ chosenDate: newDate });

}

     onCancel() {
       this.TimePicker.close();
}

onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();

  }


componentWillMount() {
  this._getLocationAsync();
}
_getLocationAsync = async () => {
    var { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

   Location.watchPositionAsync({distanceInterval: 5},
    (location) => {this.setState({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });

    }
  );
}
 render(){

   return (
     <View style={{flex:1, justifyContent: 'center'}}>

      <Header style={{ backgroundColor:'#ffff'}} searchBar rounded >
        <Item style= {{ padding:0 }}>
          <Icon name="ios-search" />
          <Input placeholder="Autour de moi" />
        </Item>
      </Header>

      <View style={{flex : 1, padding:0}} >
      <MapView style={{height:400, width: 600}}
                  region={{
                  latitude: this.state.latitude,
                  longitude:this.state.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                  }}
                  >

                <Marker
                  key={"currentPosition"}
                  pinColor="red"
                  title="Hello , "
                  description="You are here"
                  coordinate={{latitude:this.state.latitude, longitude:this.state.longitude}}
                  draggable
                  >
                  <View>
                </View>
                  </Marker>

       </MapView>
    </View>


            <Content>
                     <View style= {{ height:80, backgroundColor:'#d3d3d3', marginTop: 80}}>
                      <Text>Rayon</Text>
                       <Slider style={{width: '100%',paddingLeft:30}}
                          minimumValue={0}
                          maximumValue={1}
                          minimumTrackTintColor="#FFFFFF"
                          maximumTrackTintColor="#dcdcdc"
                        />
                        <Text>Duree approximative :</Text>
                      </View>

                      <View style={{flexDirection: 'column', border:3, backgroundColor:'white', color:'black', justifyContent:'center',aligntext:'center', verticalAlign:'bottom'}}>
                        <View>
                            <TouchableOpacity
                              onPress={() => this.TimePicker.open()}
                              >
                              <Text> Duree </Text>

                            </TouchableOpacity>
                            <Text>{this.state.time}</Text>
                            <TimePicker
                              ref={ref => {
                                this.TimePicker = ref;
                              }}
                              onCancel={() => this.onCancel()}
                              onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                            />
                          </View>
                       </View>


                      <View style={{flex:1, marginTop:40, marginLeft:20}}>
                        <DatePicker
                          style={{width: 200}}
                          date={this.state.date}
                          mode="date"
                          placeholder="Date"
                          format="DD/MM/YYYY"
                          minDate="2016/05/01"
                          maxDate="2016/06/01"
                          confirmBtnText="Confirmer"
                          cancelBtnText="Annuler"
                          showIcon={false}
                          onDateChange={(date) => {this.setState({date: date})}}
                        />
                      </View>




                <FooterTab>
                  <Button transparent primary onPress={ () => this.props.navigation.navigate('ListScreen')}>
                    <Icon name='paw'/>
                    <Text>Chercher</Text>
                  </Button>
                </FooterTab>



 </Content>

 </View>

     );
}
}
