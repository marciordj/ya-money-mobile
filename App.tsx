import { PaperProvider } from 'react-native-paper';

import { Home } from './src/Home';

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}
