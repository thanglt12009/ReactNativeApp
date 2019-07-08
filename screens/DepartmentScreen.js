import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import { Button } from 'react-native';

  export default class TeamSelect extends React.Component {

    _submit = () => {
      const {navigate} = this.props.navigation;  
        this.props.navigation.navigate("Home");
    };
 
   render() {
     
     return (
       <KeyboardAvoidingView style={styles.container} behavior="padding">
       <View>               
         <Button onPress={this._submit} title="Accounts Team" style={styles.loginButton}  accessibilityLabel="Accounts Team" />
         <Button onPress={this._submit} title="Human Resource Team" style={styles.loginButton}  accessibilityLabel="Human Resource Team" />
         <Button onPress={this._submit} title="Development Team" style={styles.loginButton}  accessibilityLabel="Development Team" />
         <Button onPress={this._submit} title="Quality Control Team" style={styles.loginButton}  accessibilityLabel="Quality Control Team" />
       </View>
       </KeyboardAvoidingView>
     );
   }
  }  

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    padding: 8,
  },
  text: {
    paddingBottom: 2,
    padding: 8,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 8,
    padding: 8,
    width: '95%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 8,
    padding: 8,
    width: '95%',
  },
});