import React from "react"
import Card from "./Card"
// import {UseApi} from '../../api/UseApi'


export const Grid=({data})=>{
    return(
        <>
            <div className="grid grid-cols-2 lg:grid-cols-3 row-gap-10 col-gap-6 p-4 md:p-20">
                {data.map(item=>(
                    <Card data={item} key={item.name}/>
                ))}
            </div>
        </>
    
    )
}

