import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import colors from '../../theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);

  const camera = useRef(null);

  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const toggleFlashMode = () => {
    const currIndex = flashModes.indexOf(flash);
    const nextIndex = currIndex === flashModes.length - 1 ? 0 : currIndex + 1;
    setFlash(flashModes[nextIndex]);
  };

  return (
    <View style={styles.page}>
      <Camera
        ref={camera}
        style={styles.camera}
        type={type}
        ratio="4:3"
        flashMode={flash}
      />

      <View style={[styles.buttonsContainer, { top: 25 }]}>
        <MaterialIcons name="close" size={30} color={colors.white} />

        <Pressable onPress={toggleFlashMode}>
          <MaterialIcons
            name={flashModeToIcon[flash]}
            size={30}
            color={colors.white}
          />
        </Pressable>

        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>

      <View style={[styles.buttonsContainer, { bottom: 25 }]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />

        <Pressable onPress={toggleCameraType}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.black,
  },
  camera: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
  },
});

export default PostUploadScreen;
