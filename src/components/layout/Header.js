import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">REACT APPLICATION</Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to='/'>Login</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to='/register'>Register</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to='/dashboard'>Dashboard</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
