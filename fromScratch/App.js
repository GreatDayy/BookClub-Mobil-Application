import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './components/Login.js'
import Home from './components/Home.js'
import Input from './components/Input.js'
import Details from './components/Details.js'

const Stack = createStackNavigator();
export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName='Login'
  screenOptions={
  {headerTitleAlign:'center'
  ,
  headerStyle: {
    backgroundColor:'#5555BE'
  },
   }
}
  >
    <Stack.Screen name='Login' 
    options={{headerTintColor:'white'}} 
    component={Login} />

    <Stack.Screen name='Home' 
    options={{ title: 'User Area', 
    headerTitleAlign:'center',
     headerTintColor:'white', 
     backgroundColor:'5555BE' }}
      component={Home}/>

      <Stack.Screen name='Input' component={Input} />

<Stack.Screen name ='Details' component={Details}
 options={{title:'Book',
           headerTintColor:'white'
           , 
           headerTitleAlign:'center',
           headerStyle:{
              backgroundColor: '#5555BE'
           }

}}

/>


  </Stack.Navigator>
</NavigationContainer>

 
  );
}



