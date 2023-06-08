
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from '@emotion/react';
import { Theme } from './theme';
import './index.css'
const queryClient = new QueryClient();
function App() {


  return (
    <>
      <Provider store={store}> 
     <ThemeProvider theme={Theme}>
     <QueryClientProvider client={queryClient}>
   <RouterProvider router={router}/>
 
   </QueryClientProvider>
   </ThemeProvider>
    </Provider> 
    </>
  )
}

export default App
