import React from 'react';

import { connect } from 'react-redux';
import {Icon,Thumbnail,Form,Textarea,Footer,FooterTab,Content,Button,Text,View,Container} from 'native-base'

class MonCompte extends React.Component {


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
<Button transparent primary onPress={ () => this.props.navigation.navigate('MesPromenades')}>
            <Icon name='paw'/>
            <Text>Mes Promenades</Text>
          </Button>
          <Button transparent primary onPress={ () => this.props.navigation.navigate('AddPromenade')}>
            <Icon name='alarm'/>
            <Text>Créer une alerte</Text>
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