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
    function close() {
        if (isOpen) {
        toggle();
        }
    }
    return (
        <div className="shade fixed-top">

        <Navbar light expand="sm" className='header-hold bg-white'>
            <NavbarBrand tag={Link} to="/">Adegoke Akanbi</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar id="hh">
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/" onClick={close}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/portfolio" onClick={close}>Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/about" onClick={close}>About Me</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>     
        </div>
      );
}