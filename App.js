import * as React from 'react';
import { AppRegistry } from 'react-native';
import Index from './src/index'
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

function App() {
  return (
    //Provider de La libreria basada en Material Design
    <PaperProvider>
      <Index/>
    </PaperProvider>
  );
}
export default App;
AppRegistry.registerComponent(appName, () => Main);