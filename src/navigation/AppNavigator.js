import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieListScreen from '../screens/MovieListScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';

const Stack = createStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MovieListScreen"
          options={{headerShown: false}}
          component={MovieListScreen}
        />
        <Stack.Screen
          name="MovieDetailScreen"
          options={{headerShown: false}}
          component={MovieDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
