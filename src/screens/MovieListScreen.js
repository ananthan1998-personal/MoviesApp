import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import * as Icons from 'react-native-heroicons/solid';
import Card from '../components/Card';
import Carousal from '../components/Carousal';

MovieListScreen = ({navigation}) => {
  const data = [
    {
      id: 1,
      image:
        'https://image.tmdb.org/t/p/original//bIeEMMvfzgbMBtYaEWtxrFnt6Vo.jpg',
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      image:
        'https://image.tmdb.org/t/p/original//bIeEMMvfzgbMBtYaEWtxrFnt6Vo.jpg',
    },
    {
      id: 4,
      image:
        'https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      image:
        'https://image.tmdb.org/t/p/original//bIeEMMvfzgbMBtYaEWtxrFnt6Vo.jpg',
    },
    {
      id: 6,
      image:
        'https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 7,
      image:
        'https://image.tmdb.org/t/p/original//bIeEMMvfzgbMBtYaEWtxrFnt6Vo.jpg',
    },
    {
      id: 8,
      image:
        'https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#001524'} />
      <View style={styles.header}>
        <TouchableOpacity>
          <Icons.Bars3Icon size={25} strokeWidth={3} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.titleStyle}>Ciniphile</Text>
        <TouchableOpacity>
          <Icons.MagnifyingGlassIcon
            size={25}
            strokeWidth={3}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View style={styles.container2}>
              <Text style={styles.sectionTitle1Style}>Trending</Text>
              <Carousal />
            </View>
          </View>
          <View>
            <Text style={styles.sectionTitle2Style}>Top Rated</Text>
            <FlatList
              horizontal
              data={data}
              renderItem={({item}) => (
                <Card imageUrl={item.image} id={item.id} />
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View>
            <Text style={styles.sectionTitle2Style}>Upcoming</Text>
            <FlatList
              horizontal
              data={data}
              renderItem={({item}) => (
                <Card imageUrl={item.image} id={item.id} />
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingBottom: 75,
    backgroundColor: '#001524',
  },
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
    fontWeight: '900',
    color: '#FFF7D4',
  },
  sectionTitle1Style: {
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 25,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  sectionTitle2Style: {
    marginTop: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  container2: {},
});

export default MovieListScreen;
