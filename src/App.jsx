import { AppContextProvider } from './components/AppContext/appContext.jsx';
import { Page } from './components/page/page.jsx';
import './App.scss'

export  const App = () => {

  return (
    <AppContextProvider>
        <Page />
    </AppContextProvider>
  );
}