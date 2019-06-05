import React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import {bottomDivider,Image,ListItem,Avatar,containerStyle,Badge,Text} from 'react-native-elements';
import {Modal,View,ImageBackground,StyleSheet} from 'react-native';
import {Footer,FooterTab, Content,Spinner,Card, Header,CardItem, Thumbnail, Left, Body, Right,Button,Icon} from 'native-base';
import { connect } from 'react-redux';





class PromenadeScreen extends React.Component{
    constructor(){
        super()
        this.state={
          participant:0,
            promenadeSelected:{},
            dataLoad : false
        };
        
        
    }

    async componentDidMount() {
        var ctx = this;
        
        await fetch(`${url}/select_promenade?_id=${this.props.promenade}`)
        .then(function(response){
          return response.json();
        }).then(function(promenade){
          console.log(promenade.data)
          ctx.setState({
              promenadeSelected: promenade.data,
              participant:promenade.data.paricipant
            });
        }).catch(function(error){
          console.error(error);
          
        });
        ctx.setState({dataLoad:true})
    
      }


    render(){
        console.log('WHYYYYYYYYY',this.state.promenadeSelected.userId)
       
        
        return(
            <View style={{flex:1}}>
             { this.state.dataLoad ? 
             (
            <Card style={{flex: 1}}>

<CardItem cardBody >
           
           <Thumbnail style={{marginLeft:15,marginTop:10}}square large source={{uri: this.state.promenadeSelected.userId.avatar}} />
          
       
        <View style={{marginLeft:10,marginTop:10}}>
             <View>
             
             <Text style={{fontWeight: 'bold'}}><Icon style={{color:'blue',fontSize:15}} name="person" />  {this.state.promenadeSelected.userId.username}</Text>
             <Text style={{fontWeight: 'bold'}}><Icon style={{color:'blue',fontSize:15}} name="paw" />  {this.state.promenadeSelected.userId.dog1}</Text>
             </View>

             <View style={{marginTop:8}}>
               <Text><Icon style={{color:'blue',fontSize:15}} name="pin" /> {this.state.promenadeSelected.adress}</Text>
               <Text><Icon style={{color:'blue',fontSize:15}} name="warning" /> {this.state.promenadeSelected.warning}</Text>
             </View>
     
         </View>

        
       </CardItem>
        <CardItem>
        
            <Text>
            {this.state.promenadeSelected.description}
            </Text>
        
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
            <Text>{this.state.promenadeSelected.date}</Text>
            </Button>
        </Left>
        <Body>
            <Button transparent>
            <Icon active name="people" />
            <Text>{this.state.promenadeSelected.participant}participants</Text>
            </Button>
        </Body>
        <Right>
        <Button transparent>
            <Icon active name="navigate" />
            <Text>{this.state.promenadeSelected.distance}km</Text>
            </Button>
        </Right>
        </CardItem>



    

<View>
    <Button block bordered primary onPress={ () => this.setState(participant=this.state.participant+1)}>
    <Icon name='arrow-forward' />
    <Text> I Joint</Text>
    </Button>


    <Button block bordered primary onPress={ () => this.props.navigation.navigate('CameraScreen')}>
    <Icon active name='camera'/>
    <Text>Prendre photo</Text>
    </Button>
</View>
    </Card>
            
        ) 
        : 
        (   <Content>
            <Spinner />
            <Spinner color='red' />
            <Spinner color='green' />
            <Spinner color='blue' />
          </Content>)
          }

<Footer>
      <FooterTab>
      <Button transparent primary onPress={ () => this.props.navigation.navigate('MonCompte')}>
                  <Icon name='menu'/>
                  <Text>Mon compte</Text>
                </Button>
                <Button transparent primary onPress={ () => this.props.navigation.navigate('AddPromenade')}>
                  <Icon name='alarm'/>
                  <Text>Créer une alerte</Text>
                </Button>
      </FooterTab>

      </Footer>
          </View>
        )
    }
}
  
function mapStateToProps(state) {
    return { promenade: state.promenade }
  }
  
  export default connect(
      mapStateToProps,
      null
  )(PromenadeScreen);