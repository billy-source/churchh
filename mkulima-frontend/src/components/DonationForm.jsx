import React, { useState } from 'react'
import { sendStkPush } from '../services/api'


export default function DonationForm(){
const [phone, setPhone] = useState('')
const [amount, setAmount] = useState('')
const [loading, setLoading] = useState(false)
const [msg, setMsg] = useState(null)


const handleSubmit = async (e) => {
e.preventDefault()
setMsg(null)
if (!/^07\d{8}$/.test(phone) && !/^2547\d{8}$/.test(phone)){
setMsg('Enter a valid phone number (07XXXXXXXX or 2547XXXXXXXX)')
return
}
setLoading(true)
try{
const payload = { phone, amount: Number(amount) }
const res = await sendStkPush(payload)
if (res.ok) setMsg('STK Push initiated. Check your phone.')
else setMsg('Failed to initiate STK push. See console for details.')
}catch(err){
console.error(err)
setMsg('Error initiating STK push')
}finally{ setLoading(false) }
}


return (
<form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
<h3 className="text-lg font-semibold mb-4">Give a donation</h3>
<label className="block mb-2">Phone number</label>
<input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="07XXXXXXXX or 2547XXXXXXXX" className="w-full mb-3 p-2 border rounded" />
<label className="block mb-2">Amount (KES)</label>
<input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount" type="number" className="w-full mb-3 p-2 border rounded" />
<button disabled={loading} className="w-full bg-green-600 text-white py-2 rounded">
{loading ? 'Processing...' : 'Donate (STK Push)'}
</button>
{msg && <p className="mt-3 text-sm">{msg}</p>}
</form>
)
}