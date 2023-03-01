import React,{useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './Home'
import Events from './Events'
import EventDetails from './EventDetails'
import OwnCreated from './OwnCreated';
import Footer from './components/Footer'

export default function Index() {

    let {isAuthenticated } = useContext(AuthContext);
    return (
        <>
            <Header />
            <main>
                <Routes>

                    <Route path='/'>
                        <Route index element={<Home />} />
                        <Route path='/events' element={<Events />} />
                        <Route path='/eventdetails' element={<EventDetails />} />
                        <Route path='/owncreated' element={isAuthenticated ? <OwnCreated /> : <Home />} />

                    </Route>


                </Routes>
            </main>
            <Footer />
        </>
    )
}
