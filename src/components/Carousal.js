import React from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import BannerCard from './BannerCard';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const data = [1, 2, 3, 4, 5];

const Carousal = () => {
  return (
    <Carousel
      data={data}
      renderItem={({item}) => <BannerCard imageUrl={item} />}
      firstItem={2}
      inactiveSliderOpacity={0.6}
      sliderWidth={width}
      itemWidth={width * 0.62}
      loop={true}
      slideSetyle={{display: 'flex', alignItems: 'center'}}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: width * 0.6,
    height: height * 0.4,
    borderRadius: 25,
    alignSelf: 'center',
  },
});

export default Carousal;
