import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', correctname: true, storage: ''};
    this.setName = this.setName.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  setName(name) {
    this.setState({storage:name})
  }

  onChange(event) {
    this.setState({value:event});
    console.log(event);
  }

  onPress(event) {
    if (/[^A-Za-z]/.test(this.state.value)){
      this.setState({correctname: false, value:''});
    } else {
      this.setName(this.state.value);
    }

    event.preventDefault();
  }

  render() {
    return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
      {(this.state.storage == '') ? <View style={styles.container} flexDirection="column" alignItems='stretch'>

        <View style={styles.container} allignItems="stretch">
        <TextInput style={styles.textInput} value={this.state.value} onChangeText={this.onChange} placeholder="Your name">
        </TextInput>{this.state.correctname ? null: <Text className="incorrect" style={styles.defaultText2}>Invalid. Use only letters.</Text>}
        </View>

        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

      </View>
    :  <View>
        <TouchableOpacity style={styles.buttonStyle2} onPress={()=>this.setState({storage: '', value:''})}>
        <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <Text className="incorrect" style={styles.defaultText}>Welcome, {this.state.storage}!</Text></View>}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30,
  },
  buttonStyle2:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'green',
    height:65,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20,
    color:'green',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop:50
  },
  defaultText2:
  {
    fontSize:20,
    color:'red',
    alignItems: 'stretch',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
