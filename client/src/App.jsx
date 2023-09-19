import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Wallet from './components/Wallet';
import Home from './components/Home';
import Members from './components/Members';
import Trials from './components/Trials';
import './App.css'

function App() {

  const router = createBrowserRouter([
    {path:'/',element:<Wallet></Wallet>},
    {path:'/home',element:<Home></Home>},
    {path:'/members',element:<Members></Members>},
    {path:'/trials',element:<Trials></Trials>}
  ])
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
