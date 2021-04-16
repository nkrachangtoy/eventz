import axios from 'axios'
// import firebase from '../firebase/config'

// const createToken = async () => {
//     const user = firebase.auth().currentUser
//     const token = user && (await user.getIdToken())

//     const payloadHeader = {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`
//         },
//     }
//     return payloadHeader
// }

const URL = 'http://localhost:8080/users'

/**
 * Register new user in database
 */

export const registerUser = async (user) => {
    // const header = await createToken()
    const payload = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
    }
    try{
    const response = await axios.post(URL, payload)
    return response.data
    }catch(err){
        console.error(err)
    }
}