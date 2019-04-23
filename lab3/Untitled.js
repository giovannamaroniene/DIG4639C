import React from 'react';
import {
  Image,
  StyleSheet,
  AppRegistry,
} from 'react-native';


export default class ImagesElement extends Component {

  render() {

    return (
      <Image source={this.props.imgsource}/>
     );
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },

});
