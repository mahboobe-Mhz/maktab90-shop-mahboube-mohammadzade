
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from '@emotion/react';
import { Theme } from './theme';
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const persistor =persistStore(store)

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Provider store={store}> 
     <ThemeProvider theme={Theme}>
     <QueryClientProvider client={queryClient}>
      <PersistGate  persistor={persistor}>
      <RouterProvider router={router}/>
      </PersistGate>
 
 
   </QueryClientProvider>
   </ThemeProvider>
    </Provider> 
    </>
  )
}

export default App
