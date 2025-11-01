import React from 'react'
import DonationForm from '../components/DonationForm'


export default function Home(){
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<section className="md:col-span-2">
<div className="bg-white p-6 rounded shadow">
<h1 className="text-2xl font-bold">Welcome to Church Connect</h1>
<p className="mt-2 text-gray-700">Latest announcements and upcoming events</p>
</div>


<div className="mt-6">
<h2 className="text-xl font-semibold mb-3">Latest Updates</h2>
{/* Placeholder updates - replace with real data source */}
<div className="space-y-3">
<div className="p-4 bg-white rounded shadow">Sunday service at 9AM</div>
<div className="p-4 bg-white rounded shadow">Youth meeting on Friday</div>
</div>
</div>
</section>


<aside>
<DonationForm />
</aside>
</div>
)
}