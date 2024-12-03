import React from 'react';
import { LocalizationProvider } from './providers/LocalizationProvider';
import Home from './screens/Home';

const App = () => {
  return <LocalizationProvider>
    <Home />
  </LocalizationProvider>;
};

export default App;

