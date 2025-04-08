import React from 'react'




import { NavigationContainer } from '@react-navigation/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Tabs from './Routes/Tab';


export default function App() {
  return (
  <GestureHandlerRootView>
    <NavigationContainer>
 <Tabs/>
  </NavigationContainer>
  </GestureHandlerRootView>
  );
}


