import axios from "axios";

export const getJournal = async (date)=>{
    console.log("getting journals")
    try{
        console.log("got journals")
        return await axios.get(`https://zenyu-backend.herokuapp.com/api/users/userjournals?creationDate=${date}`,{
            headers: {
                'Authorization': `Bearer  `
            }
        }
        )
    }
    catch(e){
        console.log(e.response)
    }
}

export const updateJournal = async (id, newContent) =>{
    console.log("journal updating")
    try{
        return await axios.put(`https://zenyu-backend.herokuapp.com/api/userjournals/${id}`,
            {content: newContent},
            {headers: {
                'Authorization': `Bearer  `
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
                'Authorization': `Bearer  `
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
                'Authorization': `Bearer  `
            }
        })
    }
    catch(e){
        console.log(e.response)
    }
}