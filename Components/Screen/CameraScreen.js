
import React from 'react';
import { Button, Text, View } from 'react-native';
import { Camera, Permissions } from 'expo';
// Premièrement il faut importer le composant Caméra.
// Permissions pour l’accès de la caméra sur le téléphone.
export default class CameraScreen extends React.Component {
// Les console log vont permettre de récupérer dans la console les informations liés aux prises des photos
  onPictureSaved = async photo => {
    console.log(photo.uri);
    console.log(photo.width);
    console.log(photo.height);
    console.log(photo.exif);
    console.log(photo.base64);
  }
  state = {
     permision: null,
     type: Camera.Constants.Type.back
   };
   // Demander l’autorisation de l’utilisation de la caméra :
   //
   // Cest une étape asynchrone que l’on va rendre synchrone grace au Await

   async componentDidMount() {
     var { status } = await Permissions.askAsync(Permissions.CAMERA);
     var permision = (status === 'granted')? true : false;
     this.setState({ permision });
   }
// Démarrer la caméra :
// Cette étape intervient à la suite du render , on va pouvoir l’initialiser à l’aide de conditions.
  render() {
    if (this.state.permision === null) {
      return <View />;
    }
    else if (this.state.permision === false) {
      return <Text>No access to camera</Text>;
    }
    else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
           ref={ref => { this.camera = ref }}
           style={{ flex: 1 }} type={this.state.type}>

          </Camera>

// Les Options de la Caméra :
// la définition de l'image ( Quality)
          <Button title="snapshot"
               onPress={() => {
                  if (this.camera) {
                     this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved,
                       quality : 0.7,
                       base64: true,
                       exif: true });
                  }
                }}
          />

           // Utiliser la front camera et le reverse grace a la fonction front et back
          <Button title="flip"
                        onPress={() => {
                          this.setState({
                            type: this.state.type === Camera.Constants.Type.back
                              ? Camera.Constants.Type.front
                              : Camera.Constants.Type.back,
                          });
                        }}/>

        </View>
      );
    }
  }
}
