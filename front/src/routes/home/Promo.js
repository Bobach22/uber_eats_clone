import React from 'react'

export default function Promo(){
    return(
        <div className="flex -mx-3">
     <div className="mb-6 px-3 w-1/3">
         <a href="/">
         <img src="/images/promo1.svg" alt="promo"/>
         </a>
         <p className="text-3xl leading-9 mt-3 mb-2 font-bold">Feed your employees</p>
         <a href="/" className="text-green-500 text-lg font-semibold">Create a business account</a>
     </div>
     <div className="mb-6 px-3 w-1/3">
         <a href="/">
         <img src="/images/promo2.svg" alt="promo"/>
         </a>
         <p className="text-3xl leading-9 mt-3 mb-2 font-bold">Your restaurant delivered</p>
         <a href="/" className="text-green-500 text-lg font-semibold">Add your restaurant</a>
     </div>
     <div className="mb-6 px-3 w-1/3">
         <a href="/">
         <img src="/images/promo3.svg" alt="promo"/>
         </a>
         <p className="text-3xl leading-9 mt-3 mb-2 font-bold">Deliver the eats</p>
         <a href="/" className="text-green-500 text-lg font-semibold">Sign up to deliver</a>
     </div>
     

        </div>
    )
}