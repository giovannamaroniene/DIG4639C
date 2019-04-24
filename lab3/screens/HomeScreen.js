import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Dimensions,
  TextInput,
} from 'react-native';


import ImageElement from '../components/ImageElement';

export default class PaintingSearch extends Component {

    state = {
      images: [
        {title:'Creation of Adam', author:"By Michelangelo", image: require('../assets/images/adam.png')},
        {title:'Mona Lisa', author:"By Leonardo da Vinci", image: require('../assets/images/monalisa.png')},
        {title:'Birth of Venus', author:"By Botticelli", image: require('../assets/images/venus.png')},
        {title:'The Duke and Duchess of Urbino', author:"By Piero della Francesca", image: require('../assets/images/duke.png')},
        {title:'Madonna del Prato', author:"By Raphael", image: require('../assets/images/madonna.png')},
        {title:'The Last Supper', author:"By Leonardo da Vinci", image: require('../assets/images/supper.png')},
      ],
      imagesReference: [],
      text: '',
    }
    componentDidMount() {
      this.setState({imagesReference: this.state.images});
    }

  search(text){
    this.setState({text: text});
    let imgArr= this.state.images;

    for (var i = 0; i < imgArr.length; i++) {
      if (text === imgArr[i].title) {
        this.setState({images: [imgArr[i] ] })
      }
    }
    if (!text) {
      this.setState({images:this.state.imagesReference})
    }
  }

  render() {

    let images = this.state.images.map((val, key) => {
      return <View key={key} style={styles.imagewrap}>
      <ImageElement imgsource={val.image}/>
      </View>
    });

    return (
      <View style={styles.container}>
        <TextInput style={styles.textinput} underlineColorAndroid='transparent' placeholder='search painting'
        onChangeText={ (text) => this.search(text)} value={this.state.text}/>

        <View style={styles.photogrid}>
          {images}
        </View>
      </View>
     );
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525'
  },
  textinput:{
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  photogrid: {
    flex: 1,
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagewrap:{
    padding: 2,
    height: 120,
    width: (Dimensions.get('window').width / 2) - 2,
  }

});

AppRegistry.registerComponent('PaintingSearch', () => PaintingSearch);
