import React, {useState} from 'react'
import {Ionicons, AntDesign, Feather, Entypo} from '@expo/vector-icons'
import {View, Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground, ActivityIndicator, Modal, TextInput, Button, Image} from 'react-native'
import {useFocusEffect, useLinkProps} from '@react-navigation/native'
//Train on flatlist and states 

//Trained on flatlist, 
//training for tomorrow is to fetch an api from googles book api and apply it in my project
//also read 50 pages of the book :) fast read, look for advice in internet how to read. Happy coding!:)
//

export default function  Home ({navigation, route}) {
    //I need to have on stateChange
const [isLoading, setLoading] = useState(true)
const [bookList, setBook] = useState([]);
// const s = route.params.search

//This section will use useFocusEffect and React.Callback function to retrieve data from api and save it in our image component element

useFocusEffect(
    React.useCallback(() => {
       
        fetch( `https://www.googleapis.com/books/v1/volumes?q=${route.params?.search}`)
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            setBook(data.items)
            //  console.log(data.items[0].volumeInfo.title)
        })
//du måste lägga in i arrayen
    },[route.params?.search]) //den kollar om värdet har ändrat sig här 
)


//This section will be my methods/Function


//Method handles the change on the input

//call the function when the mainpage screen comes into focus and clean upp(stopp) when it is unfocused
  //its usefocusEffect
    return(
       <View>
           <View style={{paddingTop: 20, paddingHorizontal: 30}}>
{/* Dont use require because it will only check within the project folder, use instead uri if you want to be recieving your image from external source or api, oar from the web  */}
           <View style={styles.iconsContainer}>
           <TouchableOpacity>
           <Feather name="search" size={24} color="#5555BE" onPress={() => navigation.navigate('Input')} />
           </TouchableOpacity>
          

           <TouchableOpacity>
           <AntDesign name="shoppingcart" size={30} color="#5555BE" />
           </TouchableOpacity>
           </View>
           <View style={styles.txtTitleContainer}>
           <Text style={styles.txtTitle}>welcome to <Entypo name="book" size={24} color='#6b32e6' /><Text style={{color: '#6b32e6' }}> Club</Text></Text>
           </View>
            {/* This View below will contain the pictures
            basically the api of the pictures that we are recieving from the book api */}
           <View>
               {isLoading === true ? <ActivityIndicator/> : (
                 <FlatList 
                 horizontal={true}
                 style={{ height: 160}}
                 contentContainerStyle={{flexDirection:'row', justifyContent:'space-between'}}
                 keyExtractor={(item) => item.id}
                  data={bookList} 
                   renderItem={({item}) => (
                       <TouchableOpacity onPress={() => navigation.navigate('Details', {title: item.volumeInfo.title,
                        imagePic: item.volumeInfo.imageLinks.thumbnail,
                         bookD: item.volumeInfo.description})}>
                           <View style={styles.txtImgContainer}> 
                           <Text style={styles.txtWithInImage}> {item.title}</Text>
                           </View>
                      <ImageBackground  style={styles.imgBackgroundPic} imageStyle={{borderRadius: 25}} source={{uri: item.volumeInfo.imageLinks.thumbnail}} >
                     </ImageBackground>
                      </TouchableOpacity>
                 
                   )}
                   />
               )}
           </View>

           </View>
           
       </View>
    )
}

const styles = StyleSheet.create({

    
    iconsContainer: {
      flexDirection: 'row',
      justifyContent:'space-between'
    },

    txtTitleContainer: {
        width: '100%',
        height:'20%',
        padding: 13,
        flexDirection:'column',
        marginVertical: 20,
    }

    ,
    txtTitle: {
      fontWeight: 'bold',
      fontSize: 30,
      width: '100%'
      
    },

   imgBackgroundPic: 
   {
      flex: 1,
      width: 100,
      height: 150,
      paddingHorizontal: 60
      
   },
 

})


