import React, {useState} from 'react'
import {View, Button, Modal, TextInput, Text, StyleSheet,  TouchableOpacity } from 'react-native'



function Input ({navigation, route}) {

    const [searchText, setsearchText] = useState('');
    return(
        <View> 
        <Modal>
            <View style={styles.inputContainer}> 
            <TextInput style={styles.input}  onChangeText={(val) => setsearchText(val)} value={searchText} /> 
            </View>

            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.touchOpacityButton} 
               onPress={() => {navigation.navigate('Home', {search: searchText})}}
            >
                <Text style={styles.btnTxt}>Search For The Book</Text>
            </TouchableOpacity>
            
            </View>
           
   
        </Modal>
    </View>
    )

}

const styles = StyleSheet.create({
  inputContainer: {

    backgroundColor: '#b78af2',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 20

  },

  input: {
      width: '80%',
      textAlign: 'center',
      color: 'white',
      fontSize: 20
  },

  btnContainer: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  btnTxt: {
      color: 'white'
  },

  touchOpacityButton: {
    backgroundColor:'#545aff',
    height: 50
    , alignItems: 'center'
    , justifyContent:'center'
    ,  borderRadius: 50
    , width: 300  
  }
  

})


export default Input


