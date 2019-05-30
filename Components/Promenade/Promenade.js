import React from 'react';
import {bottomDivider,Image,ListItem,Avatar,containerStyle,Badge,Text} from 'react-native-elements';
import {Modal,View,ImageBackground,StyleSheet} from 'react-native';
import {Button,Icon} from 'native-base'



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
      <ListItem
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
          />

      <View>
          <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                presentationStyle='pageSheet'
            >
        <View style={{flex:1}}>
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


          </View>


       

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
