import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground 
} from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      UserName: '',
      Password: '',
    };
  }

  onClickListener = () => {
    
    if(this.state.UserName =="admin" && this.state.Password=="admin")
    {      
      this.props.navigation.navigate("TeamSelectPage");
    }
    else 
    {
      alert(`Invalid Username or Password`);
      this.state.UserName="";
      this.state.Password="";
    }
  }

  _submit = () => {

    if(this.state.UserName =="admin" && this.state.Password=="admin")
    {      
      this.props.navigation.navigate("TeamSelectPage");
    }
    else 
    {
      alert(`Invalid Username or Password`);
      this.state.UserName="";
      this.state.Password="";
    }
    
  };

  render() {
    return (      
      <ImageBackground source={'/assets/BG.png'} style={styles.backgroundImage} >
      <View style={styles.container}>      
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Username"              
              underlineColorAndroid='transparent'
              onChangeText={(UserName) => this.setState({UserName})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(Password) => this.setState({Password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._submit}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
      </View>
       </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
},
  container: {    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    flex:1
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});