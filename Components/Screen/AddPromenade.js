import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import { DatePicker,Picker,Container, Item,Input,Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class AddPromenade extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
    selected2: undefined
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <Container >

        <Content style={styles.container}>
          <Text style={styles.title}>
            Lieu:
          </Text>
          <Item rounded>
            <Input placeholder='Ville, code postal...'/>
          </Item>

          <Text style={styles.title}>
            Quand:
          </Text>
          <Item>
          <DatePicker
            defaultDate={new Date(2019, 6, 4)}
            minimumDate={new Date(2019, 6, 1)}
            maximumDate={new Date(2022, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            // textStyle={styles.title}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
          </Item>
         
             {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}


            <Text style={styles.title}>
              Durée approximative:
            </Text>
          
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="select time"
                // placeholderStyle={{ color: "#bfc6ea" }}
                // placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="<= 1h" value="key0" />
                <Picker.Item label="1h - 2h" value="key1" />
                <Picker.Item label=">= 2h" value="key2" />
              </Picker>
            </Item>
        
            
            <Text style={styles.title}>
              Description:
            </Text>
            <Item>
            
            <Input placeholder="blabla blabla" />
            </Item>
           
            <Text style={styles.title}>
              Warning:
            </Text>


            <View style={{display:'flex'}}>
            <Button rounded light>
            <Text>ladies only</Text>
          </Button>
          <Button rounded light>
            <Text>puppy</Text>
          </Button>
            </View>
          

            
        </Content>

       

        <Footer>
          <FooterTab>
          <Button transparent primary onPress={ () => this.props.navigation.navigate('ListScreen')}>
            <Icon name='paw'/>
            <Text>Valider</Text>
          </Button>
          </FooterTab>
        </Footer>


      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin:50
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:25,
    marginBottom:10
  },
  button: {
    color: 'white',
    width:200
  },
  
});