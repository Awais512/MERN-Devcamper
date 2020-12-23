import React, { useState } from 'react';
import RegisterForm from '../components/forms/RegisterForm';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    role: '',
  });
  return (
    <section className='form mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 m-auto'>
            <div className='card bg-white p-4 mb-4'>
              <div className='card-body'>
                <h1>
                  <i className='fas fa-user-plus'></i> Register
                </h1>
                <p>
                  Register to list your bootcamp or rate, review and favorite
                  bootcamps
                </p>
                <RegisterForm values={values} setValues={setValues} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
