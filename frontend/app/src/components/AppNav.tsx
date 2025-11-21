import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/components/AppNav.css'
import Form from 'react-bootstrap/Form'

import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleTheme } from '../features/theme/themeSlice';
import { Link } from "react-router-dom";

const AppNav: React.FC = () => {
    const mode = useAppSelector((state) => state.theme.mode);
    const dispatch = useAppDispatch();


    return (
        <div className='appNav'>
            <Navbar className="bg-body-tertiary border border-2">
                <Container>
                    <Link to="/" style={{color: 'unset'}} className='fs-2 fw-bold text-decoration-none'>Playground</Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <div className='d-flex align-items-center justify-content-center gap-5'>
                            <div className='navAvatar rounded-circle border border-3 overflow-hidden'>
                                <img height={50} width={50} src={"https://californiamuseum.org/wp-content/uploads/Zuckerberg-Cropped-Black-and-White-Resized-scaled.jpg"}></img>
                            </div>
                            <div className='navThemeSwitch border border-1 rounded-4 px-3 d-flex align-items-center justify-content-center'>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    className='fs-3'
                                    onChange={() => dispatch(toggleTheme())}
                                />
                                {mode == "light" ? <i className="fs-4 bi bi-sun"></i> : <i className="fs-4 bi bi-moon-stars"></i>}
                            </div>
                        </div>  
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AppNav;