import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/ListKPI';
import HistoryKPIScreen from './components/HistoryKPI';
import DetailsScreen from './components/DetailsKPI';

const Stack = createStackNavigator();

function Index() {
    return (
        //Definición de rutas
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="History" component={HistoryKPIScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
  
  export default Index;