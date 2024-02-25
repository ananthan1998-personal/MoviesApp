import React from 'react';
import {StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BannerCard = imageUrl => {
  return (
    <TouchableOpacity>
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
    width: width * 0.62,
    height: height * 0.4,
    borderRadius: 25,
    alignSelf: 'center',
  },
});

export default BannerCard;
