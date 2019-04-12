import React from 'react';
import { StyleSheet, Text, View, TextInput,Button,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={value: ''};

    this.onPress = this.onPress.bind(this);

  }
  onChange = (text) => {
      this.setState({ value:text });
   }

  onPress= (text) =>  {
    if(/^[a-zA-Z]+$/.test(this.state.value)){
    this.setState({nameAvailable:true})
  } else{
    this.setState({isValid:true})
    this.setState({error:(<Text style={styles.errorText}>Please enter a valid name</Text>)})

   };

  }
  render() {
    if (!this.state.nameAvailable){
    return (
      <View style={styles.container}>
      <View><TextInput style={styles.textInput} onChangeText={this.onChange} placeholder="Enter name here"></TextInput></View>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
        {!this.state.valid ? (<Text style={styles.errorText}>{this.state.error}</Text>) : null}
        </View>
    );
  } else{
    return(
      <View style={styles.container}>
      {!this.state.valid ? (<Text style={styles.defaultText}>Hello {this.state.value}</Text>) : null}
      </View>
    )
  }
  }
}


const styles = StyleSheet.create({
  buttonText:
{
  color:"white",
  fontSize:20
},
buttonStyle:
{
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#424B54',
  height:45,
  margin:30,
},
textInput:
{
  margin:30,
  height:75,
  fontSize:20,
},
defaultText:
{
  fontSize:20
},
errorText:
{
  fontSize:20,
  color:'red',
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
