import { ThemeProvider } from './context/theme-context';
import { AppRouter } from './router/routes';
import { Header } from './components/header';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer';


function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Header/>
          <AppRouter />
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;