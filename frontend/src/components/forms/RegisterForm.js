import React from 'react';

const RegisterForm = () => {
  return (
    <form>
      <div className='form-group'>
        <label for='name'>Name</label>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Enter full name'
          required
        />
      </div>
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
      <div className='form-group'>
        <label for='password'>Password</label>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='Enter password'
          required
        />
      </div>
      <div className='form-group mb-4'>
        <label for='password2'>Confirm Password</label>
        <input
          type='password'
          name='password2'
          className='form-control'
          placeholder='Confirm password'
          required
        />
      </div>

      <div className='card card-body mb-3'>
        <h5>User Role</h5>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='role'
            value='user'
            checked
          />
          <label className='form-check-label'>
            Regular User (Browse, Write reviews, etc)
          </label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='role'
            value='publisher'
          />
          <label className='form-check-label'>Bootcamp Publisher</label>
        </div>
      </div>
      <p className='text-danger'>
        * You must be affiliated with the bootcamp in some way in order to add
        it to DevCamper.
      </p>
      <div className='form-group'>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default RegisterForm;
