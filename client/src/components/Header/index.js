import React from 'react'
import  firebase  from "../../firebase/config"
// import Button from 'react-bootstrap/Button';
import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap'



export default function Header() {

    const logout = async () => {
        try {
            await firebase.auth().signOut()
            console.log('user sucesffuly logged out')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Eventz</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link >Home</Nav.Link>
            </Nav>
            <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            <Button variant="outline-primary" onClick={() => logout()}>Logout</Button>
            </Form>
        </Navbar>
        </>
    )
}
