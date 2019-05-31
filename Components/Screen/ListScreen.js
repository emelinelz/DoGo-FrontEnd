import React from 'react';
import { ImageBackground, AppRegistry, View} from 'react-native';
import Promenade from '../Promenade/Promenade';
import {Button,Icon,Text,Footer,FooterTab} from 'native-base'


export default class ListScreen extends React.Component {

  render() {

    var promenadeBD=[
      { avatar:'https://avatarfiles.alphacoders.com/115/thumb-115246.jpg',
        username:'mika',
        adress:'12,rue saint-denis',
        cp:'75002',
        date:'01/06/2019',
        heure:'8h',
        duree:'1h',
        desc:'lalallala lalallalala'
      },
      { avatar:'https://avatarfiles.alphacoders.com/115/thumb-115246.jpg',
        username:'mika',
        adress:'12,rue saint-denis',
        cp:'75002',
        date:'01/06/2019',
        heure:'8h',
        duree:'1h',
        desc:'lalallala lalallalala'
      },
      { avatar:'https://avatarfiles.alphacoders.com/115/thumb-115246.jpg',
        username:'mika',
        adress:'12,rue saint-denis',
        cp:'75002',
        date:'01/06/2019',
        heure:'8h',
        duree:'1h',
        desc:'lalallala lalallalala'
      }
    ]
    var promenade = promenadeBD.map((item,i)=>{
      return <Promenade cp={item.cp}desc={item.desc}adress={item.adress}key={i} username={item.username} img={item.avatar} date={item.date} duree={item.duree} press={() => this.props.navigation.navigate('CameraScreen')}/>
    })

    return (
      <ImageBackground style={{flex:1}} 
        backgroundColor='white'>
       <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginHorizontal:20
       }}>
      {promenade}
        
       
      <Button full bordered primary onPress={ () => this.props.navigation.navigate('CameraScreen')}>
            <Icon active name='camera'/>
            <Text>Prendre photo</Text>
          </Button>
     
       </View>
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
 
