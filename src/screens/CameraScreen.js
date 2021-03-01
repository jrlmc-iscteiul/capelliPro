import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LivePlayer} from 'react-native-live-stream';

const CameraScreen = () => {
  return (
    <View>
      <Text> CAMERA </Text>
      <LivePlayer
        source={{
          uri:
            'rtsp://Max-See_eb1e:@192.168.29.101/user=admin_password=7NuPmaf5_channel=1_stream=0.sdp',
        }}
        ref={(ref) => {
          this.player = ref;
        }}
        style={styles.video}
        paused={false}
        muted={false}
        bufferTime={300}
        maxBufferTime={1000}
        resizeMode={'contain'}
        onLoading={() => {}}
        onLoad={() => {}}
        onEnd={() => {}}
      />
    </View>
  );
};
//rtsp://Max-See_eb1e:@192.168.29.101/user=admin_password=7NuPmaf5_channel=1_stream=0.sdp
const styles = StyleSheet.create({});

export default CameraScreen;
