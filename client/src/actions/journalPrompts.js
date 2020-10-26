import axios from "axios";

export const getJournal = async ()=>{
    console.log("getting journals")
    try{
        return await axios.get('https://zenyu-backend.herokuapp.com/api/userjournals/{473eb28d-3a0a-4466-ba33-2290e6147803}',{
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjZhNDliYTBkLTAzY2YtNDQ0ZS1hNGUzLTEyMGVlMTA2Y2RkYyIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYwMzMxMDQ4NiwiZXhwIjoxNjM0ODQ2NDg2LCJpYXQiOjE2MDMzMTA0ODZ9.Hg7eDvCmxQJiY8zpKCgkqaarwGDq_ITaFqWCA1YA8lo`
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
        return await axios.get('https://zenyu-backend.herokuapp.com/api/usermoods/{ed9531d5-063e-4925-af17-488b98dbfe1b}',{
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjZhNDliYTBkLTAzY2YtNDQ0ZS1hNGUzLTEyMGVlMTA2Y2RkYyIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYwMzMxMDQ4NiwiZXhwIjoxNjM0ODQ2NDg2LCJpYXQiOjE2MDMzMTA0ODZ9.Hg7eDvCmxQJiY8zpKCgkqaarwGDq_ITaFqWCA1YA8lo`
            }
        })
    }
    catch(e){
        console.log(e.response)
    }
}
