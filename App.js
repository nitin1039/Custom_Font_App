import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'


const App = () => {
let [fontsLoaded]=useFonts({
  // 'Handjet': require('./assets/fonts/Handjet/Handjet-ExtraLight.ttf'),
  'Poppins': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
  'Roboto':require('./assets/fonts/Roboto/Roboto-Italic.ttf')
})

if(!fontsLoaded){
  return <AppLoading/>
}
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize: 30}}>App</Text>
      <Text style={{fontSize: 30,fontFamily:'Poppins'}}>App</Text>
      <Text style={{fontSize: 30,fontFamily:'Roboto'}}>App</Text>
    </View>
  )
}

export default App