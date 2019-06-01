import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import { Form,DatePicker,Picker,Container, Item,Input,Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail } from 'native-base';
import {connect} from 'react-redux'

class AddPromenade extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() ,
    adress:'',
    description:'',
    warning:'',
    userId:''
  };
    this.setDate = this.setDate.bind(this);
    duree: undefined

    this.AddaPromenade=this.AddaPromenade.bind(this)
  }

  AddaPromenade(){
    console.log('Add a promenade...');
    var promenadeData = JSON.stringify({
      userId: this.props.user.userId,
      adress: this.state.adress,
      date: this.state.chosenDate.toString().substr(4, 12),
      duree: this.state.duree,
      description:this.state.description,
      warning:this.state.warning
    });

    // Since we are going to fetch with the ES5 syntax, we need to store this (an EST5 function has got its own this)
    const ctx = this;

    fetch(`${url}/add_promenade`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: promenadeData
    }
    ).then(function(res, err){
      return res.json()
    }).then(function(data){
      console.log(data);
      ctx.props.navigation.navigate('ListScreen');
    }).catch(function(err){
      console.log(err)
    })



  }





  dureeChange(value: string) {
    this.setState({
      duree: value
    });
  }
  warningChange(value:string){
    this.setState({
      warning:value
    })
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <Container >

        <Content style={styles.container}>
          <Thumbnail
          large
         source={{uri: this.props.user.avatar}} >
          </Thumbnail>
          <Text style={styles.title}>
            Lieu:
          </Text>
          <Item rounded>
            <Input onChangeText={(e) => this.setState({adress: e})} placeholder='Ville, code postal...'/>
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
                selectedValue={this.state.duree}
                onValueChange={this.dureeChange.bind(this)}
              >
                <Picker.Item label="<= 1h" value="<= 1h" />
                <Picker.Item label="1h - 2h" value="1h - 2h" />
                <Picker.Item label=">= 2h" value=">= 2h" />
              </Picker>
            </Item>
        
            
            <Text style={styles.title}>
              Description:
            </Text>
            <Item>
            
            <Input onChangeText={(e) => this.setState({description: e})} placeholder="blabla blabla" />
            </Item>
            <Text style={styles.title}>
              Warning:
            </Text>
            <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your options"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.warning}
              onValueChange={this.warningChange.bind(this)}
            >
              <Picker.Item label="ladies only" value="ladies only" />
              <Picker.Item label="puppy" value="puppy" />
              
            </Picker>
          </Form>
          

            
        </Content>

       

        <Footer>
          <FooterTab>
          <Button transparent primary onPress={ this.AddaPromenade}>
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

function mapStateToProps(state) {
  return { user: state.userData }
}

export default connect(
    mapStateToProps,
    null
)(AddPromenade);