import React from 'react'
import Header from '../../components/Header'
import Banner from '../home/Banner'
import { Grid } from '../../components/Grid'
import {UseApi} from '../../api/UseApi'

const NearMe=(route)=>{

    const category=route.match.params.category

    const [state,setState]=React.useState([]);

    // const url=new URLSearchParams(route.location.search);
    //  const q=url.get('q');

 
 React.useState(()=>{
     const getData=async()=>{
         const data=await UseApi(`http://localhost:8000/restaurants?category${category}`)
         if(data){
             console.log(data)
             setState(data);
         }
     }
     getData()
 
 },[])

    return (
        <>
            <Header/>
            <Banner/>
            {state&&
            <Grid data={state}/>
            }
        </>
    )
} 

export default NearMe