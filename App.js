/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import feed from './assets/data/feed';


import {
  SafeAreaView,
} from 'react-native';

import HomeScreen from './src/screens/home';
import Post from './src/components/post';
import SearchResultScreen from './src/screens/searchResults';

const App: () => Node = () => {

  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      {/* <Post props={feed}/> */}
      <SearchResultScreen />
    </SafeAreaView>
  );
};

export default App;
