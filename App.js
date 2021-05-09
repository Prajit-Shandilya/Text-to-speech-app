import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import AppHeader from './components/AppHeader';
import * as Speech from 'expo-speech';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component {
   constructor() {
    super();
    this.state = {
      text: '',
      //displayText: '',
    };
  }
   speak=()=>{
  var thingToSay=this.state.text;
  Speech.speak(thingToSay);
  //console.log(thingToSay);
};
  render() {
    return (
      <SafeAreaProvider>
      <View>
        <AppHeader />
        <Image
          style={styles.icon}
          source={{
            uri:'https://responsivevoice.org/wp-content/uploads/2020/01/speech-icon-2797263_1280-930x930.png',
              
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <Text style={styles.paragraph}>
         
        </Text>
        <TouchableOpacity style={styles.abc} onPress={this.speak}>
        <Text style={{fontSize:25, fontWeight:'bold', fontFamily:'georgia'}}>
          Click Here To Speech
        </Text>
        </TouchableOpacity>
      </View>
      </SafeAreaProvider>
    );
  }
}

var speak=()=>{
  var thingToSay='';//this.state.text;
  Speech.speak(thingToSay);
  console.log(thingToSay);
};


const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    width: 150,
    height: 150,
    marginLeft: 95,
    marginTop:10,
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  abc:{
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    marginBottom:'',
    borderRadius: 100,
    marginTop: 30,
    width: 280,
    height: 90,
    backgroundColor:'skyblue',
  }
});
