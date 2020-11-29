import axios from "axios";

export const getAllJournals = async () =>{
    try{
        console.log("getting all journals")
        return await axios.get(`https://zenyu-backend.herokuapp.com/api/users/userjournals`)

    }
    catch(e){
        console.log(e.response)
    }
}

export const getJournal = async (date)=>{
    console.log("getting journal")
    try{
        console.log("got journals")
        return await axios.get(`https://zenyu-backend.herokuapp.com/api/users/userjournals?creationDate=${date}`)
    }
    catch(e){
        console.log(e.response)
    }
}

export const updateJournal = async (id, newContent) =>{
    console.log("journal updating")
    try{
        return await axios.put(`https://zenyu-backend.herokuapp.com/api/userjournals/${id}`,
            {content: newContent})

    }

    catch(e){
        console.log(e.response)
    }
}

export const createJournal = async (newContent, promptId) =>{
    console.log("journal created")
    try{
        return await axios.post(`https://zenyu-backend.herokuapp.com/api/userjournals`,
            {content: newContent,
            promptid: promptId
            })

    }

    catch(e){
        console.log(e.response)
    }
}

export const createMood = async (moodId) =>{
    console.log("mood created")
    try{
        return await axios.post(`https://zenyu-backend.herokuapp.com/api/usermoods`,
            {moodid: moodId})

    }

    catch(e){
        console.log(e.response)
    }
}

export const updateMood = async (id, newContent) =>{
    console.log("mood updating")
    try{
        return await axios.put(`https://zenyu-backend.herokuapp.com/api/usermoods/${id}`,
            {moodid: newContent})

    }

    catch(e){
        console.log(e.response)
    }
}

export const deleteJournal = async (id) =>{
    console.log("journal deleted")
    try{
        return await axios.delete(`https://zenyu-backend.herokuapp.com/api/userjournals/${id}`)
    }
    catch(e){
        console.log(e.response)
    }
}

export const deleteMood = async (id) =>{
    console.log("mood deleted")
    try{
        return await axios.delete(`https://zenyu-backend.herokuapp.com/api/usermoods/${id}`)
    }
    catch(e){
        console.log(e.response)
    }
}