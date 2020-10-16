import React from 'react'
import {Link} from 'react-router-dom'

const cities=['Yunusabad',"Mirzo Ulug'bek",'Yakkasaroy','Shayhontohur','Olmazor','Uchtepa','Chilonzor','Sergeli','Zangiota','Yunusabad',"Mirzo Ulug'bek",'Yakkasaroy','Shayhontohur','Olmazor','Uchtepa','Chilonzor','Sergeli','Zangiota','Yunusabad',"Mirzo Ulug'bek",'Yakkasaroy','Shayhontohur','Olmazor','Uchtepa','Chilonzor','Sergeli','Zangiota']
const Cities=()=>{
    return(
    <div>
    <div className="items-center flex">
        <h2 className="text-4xl leading-10 font-bold">
        Cities Near Me
        </h2>
        {cities.length>20&&
        <Link to="/location" className="ml-auto text-green-500 leading-5 font-medium">
        View all {cities.length} cities
        </Link>}
    </div>
    <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-4 mt-6">
      {cities.map((city,index)=>(
          <div key={index}>
          <a href="/home">
              {city}
          </a>
          </div>
      ))}
    </div>
    </div>)
}

export default Cities;