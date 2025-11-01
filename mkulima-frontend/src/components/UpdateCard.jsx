import React from 'react'


export default function UpdateCard({item}){
return (
<article className="p-4 bg-white rounded shadow mb-4">
<h4 className="font-semibold">{item.title}</h4>
<p className="text-sm text-gray-600">{item.date}</p>
<p className="mt-2">{item.body}</p>
</article>
)
}