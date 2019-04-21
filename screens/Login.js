import React, { Component } from "react";
import {StyleSheet,TouchableOpacity,Keyboard, Text, View,Image, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import loginStyle from "./style";
import { Button } from 'react-native';
import imageLogo from "../image/Logo.png";
import strings from '../components/strings';


class LoginScreen extends Component {
   state = {
    UserName: '',
    Password: '',
  };

  handleLoginPress=()=>{
           console.log("Login Button Pressed");
       };

  render() {
    
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>               
        <Image source={imageLogo} style={styles.logo} />         
        <TextInput
          style={styles.input}
          value={this.state.UserName}
          onChangeText={UserName => this.setState({UserName})}
          ref={ref => {this._UsernameInput = ref}}
          placeholder={strings.EMAIL_PLACEHOLDER}
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />                   
        <TextInput
          style={styles.input}
          value={this.state.Password}
          onChangeText={Password => this.setState({Password})}
          ref={ref => {this._passwordInput = ref}}
          placeholder={strings.PASSWORD_PLACEHOLDER}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="send"
          onSubmitEditing={this._submit}
          blurOnSubmit={true}
        />
       
        <Button  onPress={this._submit}  title="Login" style={styles.loginButton}  accessibilityLabel="Learn more about this purple button"
/>
      </View>
      </KeyboardAvoidingView>
    );
  }

  _next = () => {
    this._passwordInput && this._passwordInput.focus();
  };
  
  _submit = () => {
    const {navigate} = this.props.navigation;
    if(this.state.UserName =="admin" && this.state.Password=="admin")
    {      
      this.props.navigation.navigate("Home");
    }
    else 
    {
      alert(`Invalid Username or Password`);
      this.state.UserName="";
      this.state.Password="";
    }
    
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: "space-between"
  },
  
  logo:{        
    width: 300,
    height: 250,        
    resizeMode:"contain",
  },
  input: {
    margin: 20,    
    marginBottom: 0,
    height: 34,
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#010000',
    borderWidth: 1,
    fontSize: 16,
  }, 
   buttonContainer: {
    width:"100%",       
    marginBottom:7,    
    borderRadius:5,
    paddingVertical: 15
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

export default LoginScreen;
