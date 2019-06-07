import React, { Component } from 'react';

import {StyleSheet, ImageBackground, AppRegistry, View, Image} from 'react-native';
import {Button, Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body, Right} from 'native-base';




export default class Alert extends React.Component {

  render() {



    return (
<Container>
      <ImageBackground style={{flex:1, opacity: 0.2}} source={require("../../assets/Images/backgroundpaws.jpeg")}>




                  <Content>
                    <Card style={{padding: 3, margin: 10}}>
                      <CardItem>

                        <Left style={{flex: 1, flexDirection:'row' }}>
                              <Icon name="pin" style={styles.icon} />
                              <Text>151 rue Saint Denis, 75005 PARIS</Text>
                        </Left>
                      </CardItem>


                      <CardItem>

                        <Left>
                          <Text note>Jusqu'à 5km autour</Text>
                        </Left>

                        <Right>
                          <Button transparent>
                          <Icon name="trash" style={styles.icontrash}/>
                          </Button>
                        </Right>

                      </CardItem>


                      <CardItem>

                        <Body style={{flex: 1, flexDirection:'row'}}>
                          <Icon name="hourglass" style={styles.icon}/>
                          <Text note>Durée : 1h30</Text>

                          <Icon name="refresh" style={styles.icon}/>
                          <Text note>Toujours</Text>

                          <Icon name="calendar" style={styles.icon}/>
                          <Text note>sam-dim</Text>
                        </Body>

                      </CardItem>

                    </Card>
                  </Content>






       <Button primary block onPress={ () => this.props.navigation.navigate('AddAlert')}>

                   <Text>Ajouter une alerte</Text>
                 </Button>






      </ImageBackground>
     </Container>);
  }
 }



 const styles = StyleSheet.create({
  icon: {
    color: '#fd9644',
    fontSize: 15,
    margin: 2,
  },
  icontrash: {
    color: '#4b6584'
  }
});
