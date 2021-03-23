import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, ImageBackground, StyleSheet, ScrollView} from 'react-native'


const Details = ({route,navigation}) => {
    const StackDetails = createStackNavigator();
<StackDetails.Navigator>
<StackDetails.Screen name='Details' component={Details}/>
</StackDetails.Navigator>
 
 
    return(
       
         
        <View style={styles.imgNdTxtContainer}> 
        {!route.params?.title ? <Text style={{color: 'black'}}>It has no title</Text> : <Text style={styles.txtBookTitle}>{route.params?.title}</Text>}
        <Text > </Text>
        <ImageBackground style={styles.imgBackgroundPic} imageStyle={{borderRadius: 10}} source={{uri: route.params?.imagePic}}>
        </ImageBackground>

     
            {/*This section is going to contain the describtion */}
     <ScrollView>
         
        <View style={styles.txtDescriptionContainer}>
            {!route.params?.bookD ? <View><Text style={{fontSize: 20, marginVertical: 40}}>Book has No Description</Text></View> : <Text style={styles.txtDescription}>{route.params?.bookD}</Text>}
           
       </View>
       </ScrollView>

      


    </View>
  )

  
}

const styles = StyleSheet.create({

    imgNdTxtContainer: {
        backgroundColor:'white',
        paddingVertical: '5%',
        alignItems:'center',
        flex: 1
    },
  
    titleStyle: {
        
         width: 300, 
         padding: 20,
         borderRadius:25
    },

    txtBookTitle: {
        textAlign:'center', 
        fontSize: 18,
         fontWeight:'bold', 
         color:'black',
         paddingHorizontal: 20
        },

        txtDescription: {
            fontSize:15,
             padding: 30, flex: 1,
             textAlign:'center', 
             borderRadius: 25, color: 'black',
             backgroundColor: '#6e92ff', 
             fontWeight: 'bold'

        },

    
  imgBackgroundPic: {
      width: 200,
      height: 250,
      marginVertical:20,
      paddingHorizontal: 60,
     justifyContent:'center',
  },

     txtDescriptionContainer: {
        padding: 0,
         backgroundColor:'white',
         borderRadius: 20, 
         flex: 1, 
         justifyContent:'center',
         borderRadius: 20
     }
  } 
)

export default Details