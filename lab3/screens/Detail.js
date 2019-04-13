import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Detail extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const passedImage = this.props.navigation.getParam("catImage", "defaultValue");
    const passedTitle = this.props.navigation.getParam("catTitle", "defaultValue");
    const passedAuthor = this.props.navigation.getParam("catAuthor", "defaultValue");
    return (
      <View style={styles.container}>
        <Image source={passedImage} style={{width:"100%",height:"60%",margin:'5%'}}/>
        <Text style={styles.imageTitle}>{passedTitle}</Text>
        <Text>{passedAuthor}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
   }
  }

const styles = StyleSheet.create({
  imageTitle: {
    fontSize: 30,
  },
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
