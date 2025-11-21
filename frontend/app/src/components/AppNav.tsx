import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/components/AppNav.css'
import { Link } from "react-router-dom";
import ThemeSwitch from './ThemeSwitch';

const AppNav: React.FC = () => {
    return (
        <div className='appNav'>
            <Navbar className="bg-body-tertiary border border-3">
                <Container>
                    <Link to="/" style={{color: 'unset'}} className='fs-2 fw-bold text-decoration-none'>Playground ~ <span className='fs-bold text-warning'>version 1</span></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <div className='d-flex align-items-center justify-content-center gap-5'>
                            <div className='navAvatar rounded-circle border border-3 overflow-hidden'>
                                <img height={50} width={50} src={"https://californiamuseum.org/wp-content/uploads/Zuckerberg-Cropped-Black-and-White-Resized-scaled.jpg"}></img>
                            </div>
                            <ThemeSwitch/>
                        </div>  
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AppNav;