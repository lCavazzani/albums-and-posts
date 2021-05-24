import React from 'react'
import {Link} from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Container,
    NavItem,
    Nav
} from 'reactstrap'
export const Navigation = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <Link to="/login">
                <NavbarBrand>Nesto</NavbarBrand>
                </Link>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/">Return Home</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
