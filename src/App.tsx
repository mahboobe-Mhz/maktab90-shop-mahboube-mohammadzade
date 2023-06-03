
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux';
import store from './redux/store';
const queryClient = new QueryClient();
function App() {


  return (
    <>
     <Provider store={store}>
     <QueryClientProvider client={queryClient}>
   <RouterProvider router={router}/>
   </QueryClientProvider>
   </Provider>
    </>
  )
}

export default App
