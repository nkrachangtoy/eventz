import axios from './axios';

export async function getEvents(){
    try{
        const response = await axios.get({
            method: 'GET',
            url: '/events',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        })
        console.log(response)
        return response.data
    }catch(err){
        console.log(err)
    }
}

export async function postEvent(){
    try {
        const response = await axios.post('/events')
        console.log(response)
        return response.data
    } catch (err) {
        console.log(err)
    }
}