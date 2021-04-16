import React from 'react'
import  firebase  from "../../firebase/config"
// import Button from 'react-bootstrap/Button';
import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import {useHistory, Link} from 'react-router-dom'



export default function Header({isLoggedIn}) {
    // console.log(isLoggedIn)

    const history = useHistory()    

    const handleRedirect = () => {
        history.push('/login')
    }

    const handleUserLogOut = async () => {
        try {
            await firebase.auth().signOut()
            // console.log('user sucesffuly logged out')
        } catch (e) {
            alert(e)
        }
        history.push('/login')
    }

    const redirectCreateEvent = () => {
        history.push('/newEvent')
    }

    return (
        <>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Eventz</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link as={Link} to='/events'>Home</Nav.Link>
            </Nav>
            {!isLoggedIn
            ? (
            <Form inline>
                <Button variant="outline-primary" onClick={() => handleRedirect()}>Login</Button>
            </Form> 
            ):(

                <Form inline>
                    <Button variant="outline-primary" onClick={() => handleUserLogOut()}>Logout</Button>
                </Form>
            )}
            
        </Navbar>
        </>
    )
}
