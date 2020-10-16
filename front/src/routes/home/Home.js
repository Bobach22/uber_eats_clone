import React from 'react'
import Header from '../../components/Header'
import Banner from './Banner';
import { Main } from './Main';
import Cities from '../Cities';
import { GlobalContextProvider } from '../../context/GlobalContext';

const Home=()=>{

    
    return(

        <>
       <Header />
       <Banner/>
       <Main/>
       
       </>
     
    )
}

export default Home