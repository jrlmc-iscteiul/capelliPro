import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

export default class ImagePickerScreen extends React.Component {
  state = {
    photo: null,
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('response', response);
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  render() {
    const {photo} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {photo && (
          <Image source={{uri: photo.uri}} style={{width: 300, height: 300}} />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    );
  }
}
