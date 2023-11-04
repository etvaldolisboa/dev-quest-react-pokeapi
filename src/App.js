import './App.css';

import { ThemeProvider } from './context/theme-context';
import { Router } from './router';
import { Container } from './container';

function App() {
  return (
    <>
      <ThemeProvider>
        <Container>
          <Router />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App;