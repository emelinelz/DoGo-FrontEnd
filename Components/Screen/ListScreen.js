import React from 'react';
import { ImageBackground, AppRegistry, View,ScrollView} from 'react-native';
import Promenade from '../Promenade/Promenade';
import {Header,Button,Content,Right,Spinner,Icon,Text,Footer,FooterTab} from 'native-base';
import url from '../../config';

export default class ListScreen extends React.Component {
  constructor(){
    super()
    this.state={
      promenadeBD:[],
      dataLoad : false
    };
  }

  componentDidMount() {
    var ctx = this;
    fetch(`${url}/list_promenade`)
    .then(function(response){
      return response.json();
    }).then(function(promenade){
      console.log(promenade.data)
      ctx.setState({promenadeBD: promenade.data});
    }).catch(function(error){
      console.error(error);
    });
    ctx.setState({dataLoad:true})
  }





  render() {

    var promenadeList = this.state.promenadeBD.map((item,i)=>{
      if(this.state.promenadeBD.length===0){
        return <Text>Pas de promenade</Text>
      }else{
        return <Promenade id={item._id}cp={item.cp}description={item.description}adress={item.adress}key={i} username={item.userId.username} dog1={item.userId.dog1}avatar={item.userId.avatar} date={item.date} duree={item.duree} distance={item.distance} participant={item.participant} navigation={this.props.navigation}/>

      }
    })

    return (
      <View style={{flex:1}} >
        { this.state.dataLoad ?
             (
       <ScrollView style={{flex: 1, marginHorizontal:20}}>

      {promenadeList}


       </ScrollView>
       )
        :
        (   <View>
            <Spinner />
            <Spinner color='red' />
            <Spinner color='green' />
            <Spinner color='blue' />
          </View>)
          }

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
      </View>


         );}
  }
