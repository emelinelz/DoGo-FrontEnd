import React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import {bottomDivider,Image,ListItem,Avatar,containerStyle,Badge,Text} from 'react-native-elements';
import {TouchableOpacity,View,ImageBackground,StyleSheet} from 'react-native';
import { Card, Header,CardItem, Thumbnail, Left,H3, Body, Right,Button,Icon} from 'native-base';
import { connect } from 'react-redux';



class Promenade extends React.Component{
  constructor(){
    super()
    this.voir=this.voir.bind(this)
   
    
  }
  
  voir= async()=>{
   
    console.log('AHAHAHAHAHAH',this.props.id)
    await this.props.promenadeSelected(this.props.id);
    
    this.props.navigation.navigate('PromenadeScreen');
    // this.props.onPress;
  }
  
  
  

  render(){
    return(

    <TouchableOpacity onPress={this.voir}>
      <Card  style={{flex: 0}}>
            <CardItem cardBody >
           
                <Thumbnail style={{marginLeft:15,marginTop:10}}square large source={{uri: this.props.avatar}} />
               
            
             <View style={{marginLeft:10,marginTop:10}}>
                  <View>
                  
                  <Text style={{fontWeight: 'bold'}}><Icon style={{color:'blue',fontSize:15}} name="person" />  {this.props.username}</Text>
                  <Text style={{fontWeight: 'bold'}}><Icon style={{color:'blue',fontSize:15}} name="paw" />  {this.props.dog1}</Text>
                  </View>

                  <View style={{marginTop:8}}>
                    <Text><Icon style={{color:'blue',fontSize:15}} name="pin" /> {this.props.adress}</Text>
                    <Text><Icon style={{color:'blue',fontSize:15}} name="warning" /> {this.props.warning}</Text>
                  </View>
          
              </View>

             
            </CardItem>
        
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="calendar" />
                  <Text>{this.props.date}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="people" />
                  <Text>{this.props.participant}participants</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                  <Icon active name="navigate" />
                  <Text>{this.props.distance}km</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
      <View>


    </View>

  </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
 subtitle:{
   flexDirection:'column',
   padding:10,
   paddingTop:5,
 },
 ratingText:{
   color: 'grey',
 },
 picNumber:{
   paddingLeft: 10,
   fontWeight: 'bold',
   fontSize: 18
 },
 title: {
   fontSize: 25,
   fontWeight: 'bold',
   margin: 15,
 },
 descDisplay: {
   flexDirection: 'row',
 },
});


function mapDispatchToProps(dispatch) {
  return {
    promenadeSelected: function(idPromenade) {
        dispatch({
          type: 'selectPromenade',
          promenadeId:idPromenade
          
        })
       
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(Promenade);