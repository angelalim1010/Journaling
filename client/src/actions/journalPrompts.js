import axios from "axios";

export const getJournal = async ()=>{
    console.log("getting journals")
    try{
        return await axios.get('https://zenyu-backend.herokuapp.com/api/usersjournals')
    }
    catch(e){
        console.log(e.response)
    }
}