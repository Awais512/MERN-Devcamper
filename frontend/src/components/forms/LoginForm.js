import React from 'react';
import { login } from '../../Functions/auth';
import { toast } from 'react-toastify';

const LoginForm = ({ values, setValues }) => {
  const { email, password } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      setValues({ ...values, email: '', password: '' });
      toast.success('Logged in Successfully');
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='email'>Email Address</label>
        <input
          onChange={handleChange('email')}
          type='email'
          name='email'
          className='form-control'
          placeholder='Enter email'
          required
        />
      </div>
      <div className='form-group mb-4'>
        <label htmlFor='password'>Password</label>
        <input
          onChange={handleChange('password')}
          type='password'
          name='password'
          className='form-control'
          placeholder='Enter password'
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default LoginForm;
