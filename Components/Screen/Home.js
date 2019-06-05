import React from 'react';
import {
 View,
 ImageBackground,
 StyleSheet
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Body,
  Icon
} from 'native-base';


import {
  Font
} from 'expo';


import { Ionicons } from '@expo/vector-icons';



// const styles = StyleSheet.create({
//   button: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'stretch',
//
//   },
// })



export default class Home extends React.Component {

  constructor() {
          super();
          this.state = {
              fontLoaded: false
          };
      }

  async componentWillMount() {
        await Font.loadAsync({
            'Handlee-Regular': require('../../assets/Handlee-Regular.ttf'),
        });

    this.setState({ fontLoaded: true });
}


  // Traitement concernant le Header de la navigation : il masque le header
    static navigationOptions = {
    headerTitle: "DoGoHome",
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="info"
        color="#26de81"
      />
    ),
  };
 render() {
   console.log("fontLoaded",this.state.fontLoaded);
   return (

     <ImageBackground style={{flex:1}} source={require("../../assets/Images/chiens.jpeg")}>


      <View style={{flex:1, alignItems:'center', }}>

      {this.state.fontLoaded ? (
                                <Text style={{ fontFamily: 'Handlee-Regular', fontSize: 25, textAlign: 'left', color:"#FFF", fontWeight: 'bold', marginTop: 50 }}>
                                  Des compagnons de promenade
                                </Text>
                            ) : (
                                <Text style={{ fontSize: 25, textAlign: 'center' }}>
                                  Des compagnons de promenade
                                </Text>
                            )
                          }

                          {this.state.fontLoaded ? (
                                                    <Text style={{ fontFamily: 'Handlee-Regular', fontSize: 25, textAlign: 'left', color:"#FFF", fontWeight: 'bold' }}>
                                                      autour de vous
                                                    </Text>
                                                ) : (
                                                    <Text style={{ fontSize: 25, textAlign: 'center' }}>
                                                    autour de vous
                                                    </Text>
                                                )
                                              }



        <Text h1 style={{color: "#FFFFFF", fontSize: "20px", fontWeight: 'bold', textAlign: 'center', marginTop: 60}}> Des compagnons de promenade </Text>
        <Text h1 style={{color: "#FFFFFF", fontSize: "20px", fontWeight: 'bold', textAlign: 'center'}}> autour de vous </Text>



      </View>



<View >
<Button success style={{marginHorizontal:85, marginBottom:10, position: 'center'}} onPress={() => this.props.navigation.navigate('SearchScreen')}>
<Text >Trouver une promenade</Text>

</Button>

<Button bordered success style={{marginHorizontal:80, marginBottom:20, position: 'center'}} onPress={() => this.props.navigation.navigate('Signin')}>
<Text >Proposer une promenade</Text>
</Button>

</View>




      <Body style={{flexDirection: "row", justifyContent: "stretch", position: 'absolute', bottom:3}}>



      </Body>


     </ImageBackground>


    );
 }
}
