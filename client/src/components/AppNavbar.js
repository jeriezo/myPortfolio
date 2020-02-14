import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button

} from 'reactstrap';

class AppNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="navBar">
                <Navbar className="navBar" light expand="md" >
                    <NavbarBrand className="navname"><Link to="/" >JERRYWEBMAN</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto">
                            <NavItem>
                                <NavLink><Link to="/"><Button className="NavLinks" >Home</Button></Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/portfolio" ><Button className="NavLinks">Portfolio</Button></Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/contact"><Button className="NavLinks">Contact</Button></Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default AppNavbar