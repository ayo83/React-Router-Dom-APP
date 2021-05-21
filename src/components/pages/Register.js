import React from 'react';
import '../../App.css';

const Register = () => {
    return (
        <div>
            <div className='card'>
            <div className="card-body">
                <div className="form-container">
                    <h1>Account <span className="text-primary">Register</span></h1>
                        <form >
                        <div className="form-group">
                            <label htmlFor="">Full Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <input type="submit" value="Register" className="btn btn-dark btn-block" />
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Register;
