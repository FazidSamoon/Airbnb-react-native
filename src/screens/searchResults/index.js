import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Post from '../../components/post'
import feed from '../../../assets/data/feed'

const SearchResultScreen = () => {
  return (
    <View>
      <FlatList 
        data={feed}
        renderItem={({item}) => {
            return (
                <Post props={[item]} />
            )
        }}
      />
      
    </View>
  )
}

export default SearchResultScreen