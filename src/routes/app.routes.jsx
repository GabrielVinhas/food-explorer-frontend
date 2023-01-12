import { Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Cart } from '../pages/Cart';
import { New } from '../pages/New';
import { Edit } from '../pages/Edit';
import { Orders } from '../pages/Orders';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/details/:id" element={<Details />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/new" element={<New />}/>
      <Route path="/edit/:id" element={<Edit />}/>
      <Route path="/orders" element={<Orders />}/>
    </Routes>
  )
}