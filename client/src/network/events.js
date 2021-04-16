// import axios from './axios';
import axios from 'axios'
import firebase from '../firebase/config'

const createToken = async () => {
    const user = firebase.auth().currentUser
    const token = user && (await user.getIdToken())

    const payloadHeader = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    }
    return payloadHeader
}

const URL = 'http://localhost:8080/events'

export const getEvents = async () => {
    const header = await createToken()
    try {
        const response = await axios.get(URL, header)
        return response.data
    } catch (err) {
        console.error(err)
    }
}

export const createEvent = async (title, description, location, time) => {
    const header = await createToken()

    const payload = {
        title,
        description,
        location,
        time,
    }
    try {
        const response = await axios.post(URL, payload, header)
        return response.data
    }catch(err){
        console.error(err)
    }
}