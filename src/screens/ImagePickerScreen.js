import React, {useContext, useState} from 'react';
import {View, Button, Image, StyleSheet} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Context as AuthContext} from '../context/AuthContext';

const ImagePickerScreen = ({}) => {
  const {state, sendImage} = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      includeBase64: true,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setPhoto({response});
        const photoTest = response.base64;
        sendImage(photoTest);
      }
    });
  };

  return (
    <View style={styles.view}>
      {photo && (
        <Image source={{uri: photo.uri}} style={{width: 300, height: 300}} />
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
  // }
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImagePickerScreen;
