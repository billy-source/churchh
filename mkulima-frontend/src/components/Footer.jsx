import React from 'react'


export default function Footer(){
return (
<footer className="bg-gray-100 text-gray-700 border-t mt-8">
<div className="container mx-auto p-4 text-center">
© {new Date().getFullYear()} Church Connect — Built with ❤️
</div>
</footer>
)
}