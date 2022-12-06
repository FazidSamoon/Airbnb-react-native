import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Styles from './styles';
import locations from '../../../assets/data/location.json';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchDestination = () => {
  const [locationData, setLocationData] = useState(locations);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const filterLocation = locationData.filter(item => {
      return item.description.toLowerCase().startsWith(location.toLowerCase());
    });

    setLocationData(filterLocation);
  }, [location]);
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.textInput}
        placeholder="Where are you going?"
        onChange={e => setLocation(e.nativeEvent.text)}
        value={location}
      />
      <FlatList
        data={locationData}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                borderBottomWidth: 1,
                borderBottomColor: 'lightgrey',
                paddingVertical: 10,
              }}>
              <Entypo
                name="location-pin"
                size={25}
                color="blue"
                style={{
                  marginRight: 10,
                  backgroundColor: '#d4d4d4',
                  padding: 5,
                  borderRadius: 10,
                }}
              />
              <Text>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchDestination;
