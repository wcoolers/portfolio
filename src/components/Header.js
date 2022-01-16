import { useState } from 'react'
import { Link } from "react-router-dom"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap'


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
      setIsOpen(!isOpen)
    }
    return (
            <div>
                <Navbar color="light" light expand="sm" className='bar bg-white'>
                    <NavbarBrand tag={Link} to="/">Adegoke Akanbi</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/portfolio">Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/about">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
               
            </div>      
      );
}