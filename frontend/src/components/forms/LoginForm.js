import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <div className='form-group'>
        <label for='email'>Email Address</label>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='Enter email'
          required
        />
      </div>
      <div className='form-group mb-4'>
        <label for='password'>Password</label>
        <input
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
