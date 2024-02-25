import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  ScrollView,
} from 'react-native';
import * as Icons from 'react-native-heroicons/solid';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

MovieDetailScreen = ({navigation, route}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [movieName, setMovieName] = useState('Movie Name one two');

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#001524'} />
      <View style={{backgroundColor: '#001524', height: '100%'}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icons.ArrowLeftIcon size={25} strokeWidth={3} color={'white'} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>
            {movieName.length > 10 ? movieName.slice(0, 10) + '...' : movieName}
          </Text>
          <TouchableOpacity>
            <Icons.HeartIcon size={25} strokeWidth={3} color={'white'} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/original//bIeEMMvfzgbMBtYaEWtxrFnt6Vo.jpg',
              }}
              resizeMode="cover"
              style={styles.poster}
            />
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionTitle}>DETAILS</Text>
            <Text style={styles.text}>
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: '#001524',
  },
  titleStyle: {
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 30,
    fontWeight: '700',
    color: '#FFF7D4',
  },
  poster: {
    width: width,
    height: height * 0.7,
  },
  description: {
    marginTop: 25,
    width: width * 0.9,
    alignSelf: 'center',
  },
  descriptionTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  text: {
    fontSize: 15,
    fontWeight: '300',
    color: '#FFFFFF',
  },
});

export default MovieDetailScreen;
