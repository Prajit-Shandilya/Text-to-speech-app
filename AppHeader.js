import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

class AppHeader extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
    <View style={mystyle.textContainer}>
    <Text style={mystyle.text}>Text To Speech</Text>
    </View>
    </SafeAreaProvider>
    );
  }

  
}

const mystyle = StyleSheet.create({
textContainer:{
  backgroundColor:'skyblue',

},
text:{
  color:'white',
  fontSize:'30px',
  fontWeight:'bold',
  textAlign:'center',
 
}
});

export default AppHeader;
