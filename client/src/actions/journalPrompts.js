import axios from "axios";

export const getJournal = async ()=>{
    console.log("getting journals")
    try{
        return await axios.get('https://zenyu-backend.herokuapp.com/api/userjournals/',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
    catch(e){
        console.log(e.response)
    }
}

export const getMood = async ()=>{
    console.log("getting moods")
    try{
        return await axios.get(`https://zenyu-backend.herokuapp.com/api/usermoods/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
    catch(e){
        console.log(e.response)
    }
}

export const deleteJournal = async (id) =>{
    console.log("journal deleted")
    try{
        return await axios.delete(`https://zenyu-backend.herokuapp.com/api/userjournals/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
    catch(e){
        console.log(e.response)
    }
}

export const deleteMood = async (id) =>{
    console.log("mood deleted")
    try{
        return await axios.delete(`https://zenyu-backend.herokuapp.com/api/usermoods/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
    catch(e){
        console.log(e.response)
    }
}