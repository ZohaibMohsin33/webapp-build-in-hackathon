import React, {useContext} from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Frontend from './Frontend/'
import Auth from './Auth/'
import Dashboard from "./Dashboard"
import { AuthContext } from '../context/AuthContext'
import PrivateRoutes from '../Components/PrivateRoutes'


export default function Index() {

  const {isAuthenticated} = useContext(AuthContext);

  return (
   
    
    <BrowserRouter>
    <Routes>

        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={!isAuthenticated ? <Auth /> : <Navigate to='/dashboard' />} />
        <Route path='/dashboard/' element={ <PrivateRoutes Component={Dashboard} />} />
    </Routes>
    </BrowserRouter>
  )
}
