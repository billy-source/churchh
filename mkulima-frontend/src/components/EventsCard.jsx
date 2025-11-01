import React from 'react'


export default function EventCard({event}){
return (
<div className="p-4 bg-white rounded shadow mb-4">
<div className="flex justify-between">
<h4 className="font-semibold">{event.title}</h4>
<span className="text-sm text-gray-600">{event.date}</span>
</div>
<p className="mt-2">{event.desc}</p>
</div>
)
}