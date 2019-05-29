import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : '',
			email : '',
			password : ''
		}
	}
	render(){
		return(
		<View style={styles.container}>
		
		<Text style={{color:'#efefef', fontSize:20, marginVertical:5 }}>Екзамен ПДР</Text>
		<Image style={{width: 100, height: 90, marginVertical:5 }}
		source={require('../assets/Logo.png')}/>
			
		<TextInput onChangeText={(name) => { this.setState({ name })}} style={styles.inputBox} placeholder='Name' placeholderTextColor = '#efefef'/>
		<TextInput onChangeText={(email) => { this.setState({ email })}} style={styles.inputBox} placeholder='Email' placeholderTextColor = '#efefef'/>
		<TextInput onChangeText={(password) => { this.setState({ password })}} style={styles.inputBox} placeholder='Password' secureTextEntry={true} placeholderTextColor = '#efefef'/>
		
		<TouchableOpacity style={styles.button}
		onPress={() => {
			if (this.state.name == '' || this.state.email != 'Biegan.ruslan@gmail.com' || this.state.password == ''){
				alert("Input correct data");
				return;
			}
			alert(`Ласкаво Просимо, ${this.state.Name}! Для перевірки особи Вам надіслано повідомлення на адресу ${this.state.Email}`);
			return this.props.navigation.navigate("QuizIndex");
		}}>
		<Text style={styles.buttonText}>Login</Text>
		</TouchableOpacity>
			
		</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#424242',
    alignItems: 'center',
	marginTop: 50,   
  },
  inputBox:{
	width: 300,
	backgroundColor: '#6d6d6d',
	borderRadius: 25,
	paddingHorizontal: 15,
	marginVertical: 10,
	color: '#efefef',
	fontSize: 18,
  },
  buttonText:{
	fontSize: 18,
	color: '#efefef',
	fontWeight: '500',
	textAlign: 'center',

  },
  button:{
	backgroundColor: '#1b1b1b',
	borderRadius: 25,
	width: 300,
	marginVertical: 10,
	paddingVertical: 10,
  },
});