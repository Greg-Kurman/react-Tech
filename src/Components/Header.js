import React, { Component } from 'react';
import { Navbar, Container, Nav, FormControl, Form, Button,  } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Info from '../Pages/Info';

export default class Header extends Component {
    render() {
        return (
         <>
           <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark" >
               <Container>
                   <Navbar.Brand href="/">
                       <img
                            src= "https://sun9-9.userapi.com/c851120/v851120052/19ece/RAKB0PjDVGY.jpg?ava=1" 
                            height= "100"
                            width= "80"
                            className = "d-inline-block align-top"
                            alt="logo"
                        />

                   </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto"  >
                                <Nav.Link href='/home' > Home</Nav.Link>
                                <Nav.Link href='/about'> About</Nav.Link>
                                <Nav.Link href='/contact'>Contact</Nav.Link>
                                <Nav.Link href='/info'> Info</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder=" Search"
                                    className="mr-sm-2"
                                />
                                <Button variant='outline-info'>Search</Button>
                            </Form>

                    </Navbar.Collapse>

               </Container>

           </Navbar>
            <Router>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/info' component={Info} />
                </Switch>
            </Router>

         </>
        )
    }
}
