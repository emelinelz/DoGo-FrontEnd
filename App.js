import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FormLabel, FormInput} from 'react-native-elements';
import Navigation from './Components/Navigation/Navigation';
import { Container, Header, Content, Button, Icon, Item, Input, Footer, DatePicker} from 'native-base';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import { Location, Permissions } from 'expo';


// In App.js, I just need to return my Navigation component. It is inside this component, that my components are rendered.
// I must NOT wrap my Navigation component in a View component since it is not a not a View but only a mecanism of rendering views.
// If you put a View to wrap the component, it will render a white page, with no error.
export default class App extends React.Component {
  render() {
    return (<Navigation/>);
  }
}
