import React from 'react';
import { ImageBackground, AppRegistry, View,Button,Keyboard, Text,  TextInput, TouchableWithoutFeedback,
  Alert, KeyboardAvoidingView, StyleSheet} from 'react-native';
  import { connect } from 'react-redux';
  import url from '../../config';

class Signin extends React.Component {

  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  handleSumbit = () => {

    console.log('signin from front handled...');
  
    fetch(`${url}/signin?email=${this.state.email}&password=${this.state.password}`)
    .then((res, err)  => res.json() // only one element to return so no need to add {} and no need to use the key word return
    ).then(data => {
      // console.log(data)
        data.isUserExist
          ? (
              console.log("ok"),
              this.props.handleUserValid(data.user._id,data.user.username,data.user.email,data.user.dog1,data.user.dog1gender,data.user.avatar,data.user.token),
              this.props.navigation.navigate('MonCompte')
            )
          : this.setState({errorMessage: 'Wrong credentials, try again...'})
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Sign in</Text>
            <TextInput onChangeText={(e) => this.setState({email: e})} placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput onChangeText={(e) => this.setState({password: e})} placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Text style={{color:'red', marginLeft:20}}>{this.state.errorMessage}</Text>
            <Button
              buttonStyle={styles.loginButton}
              onPress={this.handleSumbit}              
              title="Login"
            />
              {/* <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => this.onFbLoginPress()}
              title="Login with Facebook"
              color="#3897f1"
            /> */}
            <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => this.props.navigation.navigate('Signup')}
              title="Pas de compte? Sign up"
              color="#3897f1"
            />
          
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }


  // async onFbLoginPress() {
  //   const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
  //     permissions: ['public_profile', 'email'],
  //   });
  //   if (type === 'success') {
  //     const response = await fetch(
  //       `https://graph.facebook.com/me?access_token=${token}`);
  //     Alert.alert(
  //       'Logged in!',
  //       `Hi ${(await response.json()).name}!`,
  //     );
  //   }
  // }
}


const styles=  StyleSheet.create({

      containerView: {
      flex: 1,
      },
      loginScreenContainer: {
      flex: 1,
      },
      logoText: {
      fontSize: 30,
      fontWeight: "800",
      marginTop: 150,
      marginBottom: 30,
      textAlign: 'center',
      },
      loginFormView: {
      flex: 1
      }  ,
      loginFormTextInput: {
      height: 43,
      fontSize: 14,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#eaeaea',
      backgroundColor: '#fafafa',
      paddingLeft: 10,
       marginLeft: 15,
       marginRight: 15,
       marginTop: 5,
       marginBottom: 5,

       },
      loginButton: {
      backgroundColor: '#3897f1',
      borderRadius: 5,
      height: 45,
       marginTop: 10,
       },
        fbLoginButton: {
          height: 45,
          marginTop: 10,
          backgroundColor: 'transparent',
        },
})

function mapDispatchToProps(dispatch) {
  return {
    handleUserValid: function(idUser,nameUser,emailUser,dog1User,dog1genderUser,avatarUser,tokenUser) {
        dispatch({
          type: 'setUser',
          userId:idUser,
          name: nameUser,
          email: emailUser,
          dog1: dog1User,
          dog1gender:dog1genderUser,
          avatar:avatarUser,
          token: tokenUser
        })
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(Signin);