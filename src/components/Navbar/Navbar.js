import {
    NavbarBrand, Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap';
import './Navbar.css';

export const NavbarTop = () => {
    return (
        <Navbar
            color="dark"
            dark
            expand="md"
            fixed="top"
            light
        >
            <NavbarBrand href="/">
                NavName
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() { }} />
            <Collapse navbar>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                        <NavLink href="/components/">
                            Components
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown
                        inNavbar
                        nav
                    >
                        <DropdownToggle
                            caret
                            nav
                        >
                            Options
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>
                    Simple Text
                </NavbarText>
            </Collapse>
        </Navbar>
    )
}
