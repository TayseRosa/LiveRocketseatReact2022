import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom'
import { Cart } from './Pages/Cart'
import { Catalog } from './Pages/Catalog'

export function AppRoutes (){
  return(
    <Router>
      <Routes>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/catalog' element={<Catalog/>} />  
      </Routes>
    </Router>
  )
}