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

  static navigationOptions = {
      drawerLabel: 'Home',
    };

  constructor() {
          super();
          this.state = {
              fontLoaded: false
          };
      }

  async componentWillMount() {
        await Font.loadAsync({
            'Handlee-Regular': require('../../assets/Handlee-Regular.ttf')
        });

    this.setState({ fontLoaded: true });
}


  // Traitement concernant le Header de la navigation : il masque le header
    static navigationOptions = {
    headerTitle: "DoGoHome",
    headerRight: (
      <Ionicons onPress={() => this.props.navigation.navigate('Mon compte')} name='ios-person' size={25} color='#fd9644' style={{marginRight: 20}}/>
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






      </View>



<View >

<Button danger style={{marginHorizontal:85, position: 'center'}} onPress={() => this.props.navigation.navigate('Signin')}>
<Text >Signin</Text>
</Button>

<Button danger style={{marginHorizontal:85, position: 'center'}} onPress={() => this.props.navigation.navigate('Mon compte')}>
<Text >MyAccount</Text>
</Button>

<Button danger style={{marginHorizontal:85, position: 'center'}} onPress={() => this.props.navigation.navigate('MyAccountEdit')}>
<Text >MyAccountEdit</Text>
</Button>

<Button danger style={{marginHorizontal:85, position: 'center'}} onPress={() => this.props.navigation.navigate('Account')}>
<Text >Account</Text>
</Button>

<Button danger style={{marginHorizontal:85, position: 'center'}} onPress={() => this.props.navigation.navigate('À venir')}>
<Text >NextPromenade</Text>
</Button>

<Button danger style={{marginHorizontal:85, position: 'center'}} onPress={() => this.props.navigation.navigate('Historique')}>
<Text >OldPromenade</Text>
</Button>

<Button danger style={{marginHorizontal:85, position: 'center'}} onPress={() => this.props.navigation.navigate('Alertes')}>
<Text >Alert</Text>
</Button>

<Button danger style={{marginHorizontal:85, position: 'center'}} onPress={() => this.props.navigation.navigate('AddAlert')}>
<Text >AddAlert</Text>
</Button>








<Button success style={{marginHorizontal:85, marginBottom:10, position: 'center'}} onPress={() => this.props.navigation.navigate('SearchScreen')}>
<Text >Trouver une promenade</Text>

</Button>

<Button bordered success style={{marginHorizontal:80, marginBottom:20, position: 'center'}} onPress={() => this.props.navigation.navigate('Signin')}>
<Text >Proposer une promenade</Text>
</Button>

</View>



     </ImageBackground>


    );
 }
}
