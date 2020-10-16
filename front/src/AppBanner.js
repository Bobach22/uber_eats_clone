import React from 'react'

export const AppBanner=()=>(
    <div className='flex items-center justify-center'>
        <img className="w-20 h-20" src="uber-app.svg" alt="Appbanner"/>
        <div className="w-6"></div>
        <div className="">
            <p className="sm:text-3xl tracking-normal font-bold leading-10">There's more to love in the app.</p>
            <div className="flex flex-row mt-2">
                <a href="/" className="flex py-2 px-3 bg-gray-200 rounded-full font-normal leading-6 text-xl">
               <div className="flex items-center"><img className="h-4 w-4" src="apple.svg" alt="Apple"/><div className="ml-2">iPhone</div></div> 
                </a>
                <div className="w-2"></div>
                <a href="/" className="flex  py-2 px-3 bg-gray-200 rounded-full font-normal leading-6 text-xl">
                 <div className="flex items-center"><img className="h-4 w-4" src="android.svg" alt="Android" /><div className="ml-2">Android</div></div>
                </a>
            </div>
        </div>

    </div>
)
export default AppBanner