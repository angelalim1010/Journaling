import axios from "axios";

export const getPrompts = async ()=>{
    console.log("getting prompts")
    try{
        return await axios.get('/api/journalprompts')
    }
    catch(e){
        console.log(e.response)
    }
}