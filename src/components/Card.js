import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Card = (imageUrl, id) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.push('MovieDetailScreen', id)}
      style={styles.container}>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/original//bIeEMMvfzgbMBtYaEWtxrFnt6Vo.jpg',
        }}
        resizeMode="cover"
        style={styles.imageContainer}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: width * 0.25,
    height: height * 0.2,
    borderRadius: 15,
    alignSelf: 'center',
  },
  container: {
    marginLeft: 20,
  },
});

export default Card;
