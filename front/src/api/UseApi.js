import axios from 'axios'

export const UseApi=async (url)=>{
    let response;
    await axios.get(url).then(data=>{
        response=data.data
    }).catch(err=>console.log(err));
    
    return response.data;
}