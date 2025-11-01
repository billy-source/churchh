import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Updates from './pages/Updates'
import Donations from './pages/Donations'
import Events from './pages/Events'


export default function App(){
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1 container mx-auto px-4 py-6">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/updates" element={<Updates/>} />
<Route path="/donate" element={<Donations/>} />
<Route path="/events" element={<Events/>} />
</Routes>
</main>
<Footer />
</div>
)
}