import React from 'react';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';
import { Camera, Permissions } from 'expo';


import { ImageBackground, AppRegistry, View,Button,Keyboard, Text, TextInput, TouchableWithoutFeedback,
  Alert, KeyboardAvoidingView, StyleSheet,Picker,Image} from 'react-native';

// import of my ip config
import url from '../../config';

class Signup extends React.Component {

constructor(){
  super()
  this.handleSumbit = this.handleSumbit.bind(this)
  this.state = {
    username: '',
    email: '',
    password: '',
    dog1:'',
    dog1gender:'',
    avatar:null,
    permision: null,
    image:null
    
  }
}
  _pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    var permision = (status === 'granted')? true : false;
    this.setState({ permision });

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    // console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      var data = new FormData();

      data.append('avatar', {
        uri: this.state.image,
        type: 'image/jpeg',
        name: 'user_avatar.jpg',
      });
      
      const ctx = this;
      
      await fetch(`${url}/upload`, {
        method: 'post',
        body: data
      }).then(function(res, err){
        return res.json()
      }).then(function(data){
        ctx.setState({avatar:data})
       
      }).catch(function(err){
        console.log(err)
      })
    }


  };



  handleSumbit(){

    console.log('signup from front handled...');

    // We can store our sent data (available in our state) in a variable called signupData
    var signupData = JSON.stringify({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      dog1: this.state.dog1,
      dog1gender:this.state.dog1gender,
      avatar:this.state.avatar
    });

    // Since we are going to fetch with the ES5 syntax, we need to store this (an EST5 function has got its own this)
    const ctx = this;

    fetch(`${url}/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: signupData
    }
    ).then(function(res, err){
      return res.json()
    }).then(function(data){
      console.log(data);
      ctx.props.handleUserValid(data.user._id,data.user.username,data.user.email,data.user.dog1,data.user.dog1gender,data.user.avatar,data.user.token);
      ctx.props.navigation.navigate('MonCompte');
    }).catch(function(err){
      console.log(err)
    })
    


  }
  


  render() {
    let { image } = this.state;

    return (
     <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
        <Text style={styles.logoText}>Sign up</Text>
        <TextInput placeholder="Username"onChangeText={(e) => this.setState({username: e})} placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
          <TextInput placeholder="Email" onChangeText={(e) => this.setState({email: e})}placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
          <TextInput placeholder="Password" onChangeText={(e) => this.setState({password: e})}placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
          <TextInput placeholder="Dog's Name" onChangeText={(e) => this.setState({dog1: e})}placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
          {/* <TextInput placeholder="Dog's gender" onChangeText={(e) => this.setState({dog1gender: e})}placeholderColor="#c4c3cb" style={styles.loginFormTextInput} /> */}
          {/* <TextInput placeholder="Dog's Photo" onChangeText={(e) => this.setState({avatar: e})}placeholderColor="#c4c3cb" style={styles.loginFormTextInput} /> */}
                    <Picker
            selectedValue={this.state.dog1gender}
            style={{height: 10, width:200}}
            itemStyle={{fontSize:12}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({dog1gender: itemValue})
            }>
            <Picker.Item label="Garson" value="male" />
            <Picker.Item label="Fille" value="female" />
          </Picker>
          
         
        
        </View>
        

      </View>






      
    {/* </TouchableWithoutFeedback> */}
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Ajouter un photo de ton chien"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
      </View>

      <Button
buttonStyle={styles.loginButton}
onPress={this.handleSumbit}
title="Sign Up"
/>

<Button
buttonStyle={styles.fbLoginButton}
onPress={() => this.props.navigation.navigate('Signin')}
title="Deja un compte? Sign in"
color="#3897f1"
/>
    </KeyboardAvoidingView>



  
    )
  }
}


const styles=  StyleSheet.create({

  containerView: {
  flex: 1,
  },
  loginScreenContainer: {
  flex: 1,
  },
  logoText: {
  fontSize: 20,
  fontWeight: "200",
  marginTop: 10,
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
  height: 25,
   marginTop: 0,
   },
    fbLoginButton: {
      height: 45,
      marginTop: 10,
      backgroundColor: 'transparent',
    },
}
)

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
)(Signup);



