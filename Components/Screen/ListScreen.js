import React from 'react';
import { ImageBackground, AppRegistry, View,ScrollView} from 'react-native';
import Promenade from '../Promenade/Promenade';
import {Button,Icon,Text,Footer,FooterTab} from 'native-base';
import url from '../../config';

export default class ListScreen extends React.Component {
  constructor(){
    super()
    this.state={
      promenadeBD:[]
    };
  }

  componentDidMount() {
    var ctx = this;
    fetch(`${url}/promenades`)
    .then(function(response){
      return response.json();
    }).then(function(promenade){
      console.log(promenade.data)
      ctx.setState({promenadeBD: promenade.data});
    }).catch(function(error){
      console.error(error);
    });

  }
  




  render() {
     
    var promenadeList = this.state.promenadeBD.map((item,i)=>{
      if(this.state.promenadeBD.length===0){
        return <Text>Pas de promenade</Text>
      }else{
        return <Promenade cp={item.cp}description={item.description}adress={item.adress}key={i} username={item.userId.username} avatar={item.userId.avatar} date={item.date} duree={item.duree} distance={item.distance} participant={item.participant} press={() => this.props.navigation.navigate('CameraScreen')}/>

      }
    })

    return (
      <ImageBackground style={{flex:1}} 
        backgroundColor='white'>
       <ScrollView style={{
        flex: 1,
       
        marginHorizontal:20
       }}>
      {promenadeList}
        
       
      <Button full bordered primary onPress={ () => this.props.navigation.navigate('CameraScreen')}>
            <Icon active name='camera'/>
            <Text>Prendre photo</Text>
          </Button>
     
       </ScrollView>
<Footer>
<FooterTab>
<Button transparent primary onPress={ () => this.props.navigation.navigate('Signin')}>
            <Icon name='add'/>
            <Text>Add a promenade</Text>
          </Button>
          <Button transparent primary onPress={ () => this.props.navigation.navigate('AddPromenade')}>
            <Icon name='alarm'/>
            <Text>Créer une alerte</Text>
          </Button>
</FooterTab>

</Footer>
      
      </ImageBackground>    );
  }
 }
 
