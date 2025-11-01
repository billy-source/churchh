import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){
return (
<header className="bg-green-700 text-white">
<div className="container mx-auto flex items-center justify-between p-4">
<Link to="/" className="font-bold text-xl">Church Connect</Link>
<nav className="space-x-4">
<Link to="/" className="hover:underline">Home</Link>
<Link to="/updates" className="hover:underline">Updates</Link>
<Link to="/events" className="hover:underline">Events</Link>
<Link to="/donate" className="hover:underline">Donate</Link>
</nav>
</div>
</header>
)
}