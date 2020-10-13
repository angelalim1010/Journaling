import axios from "axios";

export const getPrompts = async ()=>{
    console.log("getting prompts")
    try{
        return await axios.get('https://zenyu-backend.herokuapp.com/api/journalprompts')
    }
    catch(e){
        console.log(e.response)
    }
}