import React, { useState } from 'react'
import UpdateCard from '../components/UpdateCard'


// simple local state demo — replace with real API
const seed = [
{ id:1, title:'Sunday Service', date:'2025-11-02', body:'Service at 9AM and 11AM.' },
{ id:2, title:'Youth Meeting', date:'2025-11-07', body:'Youth meetup 5PM.' }
]


export default function Updates(){
const [updates, setUpdates] = useState(seed)
const [title,setTitle] = useState('')
const [body,setBody] = useState('')


const addUpdate = (e) =>{
e.preventDefault()
const newUp = { id: Date.now(), title, body, date: new Date().toISOString().slice(0,10) }
setUpdates([newUp, ...updates])
setTitle(''); setBody('')
}


return (
<div>
<h2 className="text-xl font-semibold mb-4">Updates</h2>
<form className="mb-6" onSubmit={addUpdate}>
<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full mb-2 p-2 border rounded" />
<textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="Body" className="w-full mb-2 p-2 border rounded" />
<button className="bg-green-600 text-white px-4 py-2 rounded">Post Update</button>
</form>


{updates.map(u => <UpdateCard key={u.id} item={u} />)}
</div>
)
}