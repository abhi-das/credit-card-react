import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../logo';

const TopNavbar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand className="mx-2">
                    <Link to="/">
                        <Logo />
                    </Link>
                </Navbar.Brand>
                {/* <Nav.Item className="mx-2">
                <Link to="admin" className="link">Admin</Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
                <Link to="employee" className="link">Employee</Link>
            </Nav.Item> */}
                <Nav.Item className="mx-2">
                    <Link to="payment" className="link">
                        Payment
                    </Link>
                </Nav.Item>
            </Navbar>
        </>
    );
};

export default TopNavbar;
