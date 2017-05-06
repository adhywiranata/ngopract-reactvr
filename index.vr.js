import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  Image,
  View,
} from 'react-vr';

export default class WelcomeToReactVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>

        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 0.5,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Halo ReactVR!
        </Text>
        <Image
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={{
            layoutOrigin: [0.5, 0.5],
            width: 300,
            height: 140,
            transform: [{translate: [0, 120, -500]}],
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToReactVR', () => WelcomeToReactVR);
