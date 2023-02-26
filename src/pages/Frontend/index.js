import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './Home'
import Events from './Events'
import EventDetails from './EventDetails'
import Footer from './components/Footer'

export default function Index() {
    return (
        <>
            <Header />
            <main>
                <Routes>

                    <Route path='/'>
                        <Route index element={<Home />} />
                        <Route path='/events' element={<Events />} />
                        <Route path='/eventdetails' element={<EventDetails />} />
                    </Route>


                </Routes>
            </main>
            <Footer />
        </>
    )
}
