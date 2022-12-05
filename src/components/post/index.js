import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Post = ({props}) => {
  console.log("props " + props);
  return (
    <>
      {props.map(post => (
        <View style={styles.container} key={post.id}>
          <Image
            source={{
              uri: post.image,
            }}
            style={styles.Image}
          />

          <Text style={styles.bedroom}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.description}>
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>{post.oldPrice} </Text>
            <Text style={styles.newPrice}> {post.newPrice} </Text>/ night
          </Text>
        </View>
      ))}
    </>
  );
};

export default Post;
