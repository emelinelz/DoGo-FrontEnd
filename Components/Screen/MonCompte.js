import React from 'react';

import { connect } from 'react-redux';
import {Icon,Thumbnail,Form,Textarea,Footer,FooterTab,Content,Button,Text,View,Container} from 'native-base'

class MonCompte extends React.Component {
  constructor(){
    super()


  }

  // async componentDidMount() {
  //   var ctx = this;
    
  //   await fetch(`${url}/participe_promenade?_id=${this.props.user.userId}`)
  //   .then(function(response){
  //     return response.json();
  //   }).then(function(promenade){
  //     console.log(promenade.data)
  //     if(promenade.data.participant.some(item => item.userId === ctx.props.user.userId) ==true){
  //       ctx.setState({joint:true})
  //     }
  //     var participantCopy=promenade.data.participant
  //     ctx.setState({
  //         promenadeSelected: promenade.data,
  //         participant:participantCopy,
  //         participantCount:promenade.data.participant.length
  //       });
       
  //   }).catch(function(error){
  //     console.error(error);
      
  //   });
  //   ctx.setState({dataLoad:true})
  // }



 render() {
   return (
       
 <Container>
     <Content >
     {/*  This notation is used to write comments within JSX code */}
     {/* flex 1 indicates the View to take the whole screen ; the alignItems and justifyContent proprieties will center horizontally and vertically the content */}
<View style={{margin:30}}>

<View style={{margin:10 , alignItems:'center'}}>
    <Text H3>Hello {this.props.user.name}</Text>
       <Thumbnail
         large
         source={{uri: this.props.user.avatar}} 
       />
       
       <Text >{this.props.user.email}</Text>

       </View>

       <View>
       <Form>
            <Textarea rowSpan={5} bordered placeholder="Description" />
          </Form>
          </View>
          

         
        
        </View>
     </Content>


<Footer>
<FooterTab>
<Button transparent primary onPress={ () => this.props.navigation.navigate('ListScreen')}>
            <Icon name='menu'/>
            <Text>Voir la list </Text>
          </Button>
          <Button transparent primary onPress={ () => this.props.navigation.navigate('MesPromenades')}>
            <Icon name='paw'/>
            <Text>Mes promenades</Text>
          </Button>
</FooterTab>

</Footer>
</Container>

   );
 }
}

function mapStateToProps(state) {
  return { user: state.userData }
}

export default connect(
    mapStateToProps,
    null
)(MonCompte);