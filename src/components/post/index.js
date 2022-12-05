import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.Image}
      />

      <Text style={styles.bedroom}>1 bed 1 bathroom</Text>
      <Text style={styles.description}>
        t is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable{' '}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.newPrice}> $30 </Text>/ night
      </Text>
    </View>
  );
};

export default Post;
