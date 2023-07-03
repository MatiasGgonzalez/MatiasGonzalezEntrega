
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import CartWidget from '../CartWidet/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Navbar className=" d-flex flex-row justify-content-around align-items-center py-2.5  container__nav" bg="dark" variant="dark" >
                <Navbar.Brand as={NavLink} to={"/"} className="texto__titulo__navbar">PerroFuBebidas</Navbar.Brand>
                <Nav className="justify-content-center ">
                    <Nav.Link as={NavLink} to={"/"} className="nav__links" >HOME</Nav.Link>
                    <Nav.Link as={NavLink} to={"/categoria/1"} className="nav__links" >VODKA</Nav.Link>
                    <Nav.Link as={NavLink} to={"/categoria/3"} className="nav__links" >GIN</Nav.Link>
                    <Nav.Link as={NavLink} to={"/categoria/2"} className="nav__links" >ESPUMANTES</Nav.Link>
                    <Nav.Link as={NavLink} to={"/categoria/4"} className="nav__links" >CERVEZAS</Nav.Link>
                    <Nav.Link as={NavLink} to={"/categoria/5"} className="nav__links" >WHISKY</Nav.Link>
                </Nav>
                <CartWidget />
            </Navbar>
        </header>
    )
}

export default NavBar