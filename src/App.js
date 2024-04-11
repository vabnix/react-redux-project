import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
//pages
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './layouts/RootLayout';


function App() {
  const  router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))
  return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
