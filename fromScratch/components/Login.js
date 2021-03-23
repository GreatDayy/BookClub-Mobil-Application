import React, {useState} from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {View, Image, StyleSheet, Text, TextInput, ImageBackground, TouchableOpacity} from 'react-native'


//Create a stack


export default function Login({navigation}) {

  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('123');
  const [inPutUsername, setInputUsername] = useState('');
  const [inPutPassword, setInputPassword] = useState('');


  const inputValueUsername = (value) => {
       setInputUsername(value)
  }

  const inputValuePassword= (value) => {
    setInputPassword(value)
}


const Logincontroller = () => {
    if(inPutUsername == username && inPutPassword == password) {
        navigation.navigate('Home')
    } else{
        navigation.navigate('Home')
        console.log('Do nothing')
    }
}

    return(
        <View style={styles.LoginContainer}>

<ImageBackground source ={require('../Images/back2.png')}  
             style={{width: '100%', height: 700}}
            >

               
            {/* Image View Below */}
            <View style={styles.imageContainer}>
                   {/*Image here */}
                   <Image style={{width: 130, height:130}} source ={require('../Images/BookLogin.png')} />
            </View>

            <View>
                 {/*Inputs here */}
                 <View>
                     <View style={styles.inputWrapper}> 
                     {/* Going to test Ionicons */}
                     <AntDesign name="user" size={24} color="#5555BE" />
                     <TextInput style={styles.txtContainer} placeholder='Username'  placeholderTextColor="white" onChangeText={inputValueUsername}>
                         <Text styles={styles.txtBox}></Text>
                     </TextInput>
                     </View>
                     <View style={styles.inputWrapper1}> 
                     <AntDesign name="lock" size={24} color="#5555BE" />
                     <TextInput secureTextEntry={true} style={styles.txtContainer} placeholder='Password' placeholderTextColor="white" onChangeText={inputValuePassword}>
                         <Text></Text>
                     </TextInput>
                     </View>

                     <View style={styles.TchOpacityWrapper}>
                     <TouchableOpacity style={styles.BtnWrapper} placeholder='Login' onPress={Logincontroller}>
                        
                         <Text style={styles.tOpiTxt}>Login</Text>
                     </TouchableOpacity>

                     </View>


                 </View>
                 
            </View>
         </ImageBackground>  
        </View>
 
    )
}
const styles = StyleSheet.create({

  
imageContainer: {
    alignItems: 'center',
   marginTop: 150
},
txtContainer: {
    backgroundColor:'#1b4ca1',
    width: 250, 
    height: 50,
    color: 'white',
    borderRadius: 25,
    textAlign:'center'
    
},


inputWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 110,
    height: 80,
    color: 'white',
    
    
},

inputWrapper1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    color: 'white',
 
    
},


txtBox: {
    marginBottom: 40,
    
},

TchOpacityWrapper: {
 alignItems: 'center'
},
    
BtnWrapper: {
    marginTop: 30,
    marginLeft: 25,
    backgroundColor:'#4d4dff',
    width: 200, 
    height: 55,
    color: 'white',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
}
,
tOpiTxt: {
    color: 'white'
}


})

