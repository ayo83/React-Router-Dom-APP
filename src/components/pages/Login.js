import React from 'react';
import '../../App.css';

const Login = () => {
    return (
        <div className='card'>
            <div className="card-body">
                <div className="form-container">
                    <h1>Account <span className="text-primary">Login</span></h1>
                    <form >
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <input type="submit" value="Login" className="btn btn-dark btn-block" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
