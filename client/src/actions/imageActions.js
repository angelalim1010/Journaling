import axios from "axios";

export const uploadImage = async (newContent) =>{
    console.log("journal created")
    try{
        return await axios.post(`https://zenyu-backend.herokuapp.com/api/images/`,
            {content: newContent,
            })

    }

    catch(e){
        console.log(e.response)
    }
}

export const updateImage = async (id, newContent) =>{
    console.log("image updated")
    try{
        return await axios.put(`https://zenyu-backend.herokuapp.com/api/images/${id}`,
            {content: newContent,
            })

    }

    catch(e){
        console.log(e.response)
    }
}

export const deleteImage = async (id, ) =>{
    console.log("image deleted")
    try{
        return await axios.delete(`https://zenyu-backend.herokuapp.com/api/images/${id}`)

    }

    catch(e){
        console.log(e.response)
    }
}