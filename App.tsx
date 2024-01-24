import { PaperProvider } from 'react-native-paper';

import { Home } from './src/Home';
import { theme } from './src/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}
