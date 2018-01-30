export default props => (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="logo-btn-wrapper full">
            <div className="navbar-brand hidden-lg-up hidden-xs-down full">
                <img className="d-inline-block align-top" width="193px" src="https://s3-us-west-2.amazonaws.com/aaroncoding/images/mockups/inchol/DCGlogo01.png" alt="logo" />
            </div>
            <div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="navbar-brand hidden-md-down">
                <img className="d-inline-block align-top" width="193px" src="https://s3-us-west-2.amazonaws.com/aaroncoding/images/mockups/inchol/DCGlogo01.png" alt="logo" />
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">HOW IT WORKS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">SUCCESS STORIES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CLIENTS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">PRODUCTS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">BLOG</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CONTACT</a>
                </li>
            </ul>
        </div>
    </nav>
)