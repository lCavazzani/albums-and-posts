import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Container,
  NavItem,
  Nav,
  Media,
} from "reactstrap";
export const Navigation = () => {
  return (
    <Navbar style={{ background: "#f8cd46" }}>
      <Container>
        <Link to="/">
          <NavbarBrand>
            <Media
              style={{ width: 200 }}
              object
              src={`https://s2-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/181/100/original/LOGO_23_07_2018_0003_GROS.png`}
            />
          </NavbarBrand>
        </Link>
        <Nav>
          <NavItem>
            {/* hide it according to current page, no need to show it at Home */}
            <Link
              className="btn btn-primary"
              to="/home"
              style={{
                width: 250,
                backgroundColor: "#f9423a",
                color: "#ffffff",
              }}
            >
              Return Home
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
