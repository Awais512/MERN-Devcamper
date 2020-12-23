import React from 'react';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
  return (
    <section className='form mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 m-auto'>
            <div className='card bg-white p-4 mb-4'>
              <div className='card-body'>
                <h1>
                  <i className='fas fa-sign-in-alt'></i> Login
                </h1>
                <p>
                  Log in to list your bootcamp or rate, review and favorite
                  bootcamps
                </p>
                <LoginForm />
                <p>
                  {' '}
                  Forgot Password?{' '}
                  <a href='reset-password.html'>Reset Password</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
