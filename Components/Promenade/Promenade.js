import React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import {bottomDivider,Image,ListItem,Avatar,containerStyle,Badge,Text} from 'react-native-elements';
import {View,ImageBackground,StyleSheet} from 'react-native';
import { Card, Header,CardItem, Thumbnail, Left, Body, Right,Button,Icon} from 'native-base';
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

    <View>
      <Card >
            <CardItem >
              <Left>
                <Thumbnail square large source={{uri: this.props.avatar}} />
               
              </Left>
              
             <Body>
             <Text>{this.props.username}</Text>
                  <Text note>{this.props.dog1}</Text>
             <Text>{this.props.adress}</Text>
              </Body>
              <Right>
              <Button large transparent onPress={this.voir}>

              <Icon name="arrow-forward" />
              <Text> Voir </Text></Button>
              </Right>
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

  </View>

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