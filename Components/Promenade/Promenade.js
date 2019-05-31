import React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import {bottomDivider,Image,ListItem,Avatar,containerStyle,Badge,Text} from 'react-native-elements';
import {Modal,View,ImageBackground,StyleSheet} from 'react-native';
import { Card, Header,CardItem, Thumbnail, Left, Body, Right,Button,Icon} from 'native-base'



export default class Promenade extends React.Component{
  constructor(){
    super()
    this.setModalVisible=this.setModalVisible.bind(this)
    this.setModalInvisible=this.setModalInvisible.bind(this)
      this.state={
        modalVisible:false,

    }
  }

  setModalVisible(){
    this.setState({modalVisible:true})
  }

  setModalInvisible(){
    this.setState({modalVisible:false})
  }

  render(){
    return(

    <View>
      <Card>
            <CardItem >
              <Left>
                <Thumbnail square large source={{uri: this.props.img}} />
               
              </Left>
             <Body>
             <Text>{this.props.username}</Text>
                  <Text note>GeekyAnts</Text>
             <Text>{this.props.adress}</Text>
              </Body>
              <Right>
              <Button large transparent onPress={this.setModalVisible}>
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
                  <Text>4 participants</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                  <Icon active name="navigate" />
                  <Text>0.5km</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
      {/* <ListItem
      bottomDivider={true}
      onPress={this.setModalVisible}
      leftAvatar={{ source: { uri: this.props.img } }}
        title={
          <View>
          <Text style={styles.picNumber}>{this.props.username}</Text>
          </View>
        }
        subtitle={
            <View style={styles.subtitle}>
              <Text style={styles.ratingText}> {this.props.adress}</Text>
              <Text style={styles.ratingText}> {this.props.cp}</Text>

              <Text style={styles.ratingText}> date:{this.props.date}</Text>
              <Text style={styles.ratingText}> duree:{this.props.duree}</Text>
              <Text style={styles.ratingText}> {this.props.desc}</Text>

            </View>

          }
          /> */}




      <View>

          <Modal
                animationType="fade"
                transparent={false}
                visible={this.state.modalVisible}
                presentationStyle='formSheet'
            >
        
<Card style={{flex: 1, marginTop:100,marginHorizontal:20}}>

            <CardItem>
              <Left>
              <Thumbnail square large source={{uri: this.props.img}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  blablal blablal blablal blablal
                </Text>
              </Body>
            </CardItem>
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
            />
          
         </MapView>
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
                  <Text>4 participants</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                  <Icon active name="navigate" />
                  <Text>0.5km</Text>
                </Button>
              </Right>
            </CardItem>


  
            <Button full bordered primary onPress={this.setModalInvisible}>
<Icon name='arrow-back' />
         <Text> Go Back</Text>
       </Button>
       
    
       <Button full bordered primary onPress={this.setModalInvisible}>
<Icon name='arrow-forward' />
         <Text> I Joint</Text>
       </Button>
       
       
       <Button full bordered primary onPress={this.props.press}>
            <Icon active name='camera'/>
            <Text>Prendre photo</Text>
          </Button>
          </Card>

        {/* <View style={{flex:1}}>
          <Image style={{ width: 500, height: 400 }} source={{uri:this.props.img}}/>


<Button full bordered primary onPress={this.setModalInvisible}>
            <Icon name='paw'/>
            <Text>Go Back</Text>
          </Button>

          <Button full bordered primary onPress={ () => this.props.navigation.navigate('AddPromenade')}>
            <Icon name='paw'/>
            <Text>Joint</Text>
          </Button>
          <Button full bordered primary onPress={ () => this.props.navigation.navigate('Camera')}>
            <Icon name='camera'/>
            <Text>Prendre photo</Text>
          </Button>

          

          <Text stylte={styles.title}>
          {this.props.username}
          </Text>
          <View style={styles.descDisplay}>
            <Text style={{color: '#FFFFFF'}}>{this.props.date}</Text>
         
            <Text style={{color: '#FFFFFF'}}>{this.props.duree}</Text>
          </View>


          </View> */}


       

      </Modal>

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
