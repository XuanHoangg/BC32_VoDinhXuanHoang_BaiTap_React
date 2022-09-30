import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container" style={{ padding: "0 150px" }}>
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Service</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header