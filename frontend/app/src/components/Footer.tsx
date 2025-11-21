import {Link} from "react-router-dom"

const Footer: React.FC<{}> = () => {
    return (
        <footer className="page-footer font-small blue pt-4 border-top border-5 ">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3 fs-1">
                        <div className="fw-bold text-warning" style={{ fontFamily: 'Milonga, serif' }}>Github</div>
                        <Link style={{color: 'unset'}} to="https://github.com/eieronymakisist/playground/">
                            <i className="bi bi-github"></i>
                        </Link>

                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />
{/* 
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer;