import { ThemeProvider } from './context/theme-context';
import { AppRouter } from './router/routes';
import { Header } from './components/header';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Header/>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;