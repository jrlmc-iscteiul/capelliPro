import React, {useContext, useState} from 'react';
import {View, Button, Image, StyleSheet} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Context as AuthContext} from '../context/AuthContext';
import ImgToBase64 from 'react-native-image-base64';

const ImagePickerScreen = ({}) => {
  const {state, sendImage} = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('response', response);
      if (response.uri) {
        setPhoto(response);
        //const base64Value = response.data;
        const base64Value = ImgToBase64.getBase64String(response.uri);
        console.log(base64Value);
        sendImage({base64Value});
      }

      console.log('ola');
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
