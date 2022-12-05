import {View, Text, ImageBackground, TextInput, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import bg from '../../../assets/images/wallpaper.jpg';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
    const buttonPressed = () => {
        alert('Button pressed');
    };
  return (
    <View style={{position: 'relative'}}>
      {/* search bar compnent */}
      <Pressable
        style={styles.searchButton}
        onPress={buttonPressed}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground source={bg} style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.log('button clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
