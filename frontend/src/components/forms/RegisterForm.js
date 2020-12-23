import React from 'react';
import { register } from '../../Functions/auth';
import { toast } from 'react-toastify';

const RegisterForm = ({ values, setValues }) => {
  const { name, email, password, password2, role } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
    console.log(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password2 !== password) {
      return toast.error('Confirm Password does not match with Password field');
    }
    try {
      await register({ name, email, password, role });
      setValues({
        ...values,
        name: '',
        email: '',
        password: '',
        password2: '',
      });
      toast.success('User Registered Successfully');
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          onChange={handleChange('name')}
          type='text'
          name='name'
          className='form-control'
          placeholder='Enter full name'
          value={name}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email Address</label>
        <input
          onChange={handleChange('email')}
          type='email'
          name='email'
          className='form-control'
          placeholder='Enter email'
          value={email}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          onChange={handleChange('password')}
          type='password'
          name='password'
          className='form-control'
          placeholder='Enter password'
          value={password}
          required
        />
      </div>
      <div className='form-group mb-4'>
        <label htmlFor='password2'>Confirm Password</label>
        <input
          onChange={handleChange('password2')}
          type='password'
          name='password2'
          className='form-control'
          placeholder='Confirm password'
          value={password2}
          required
        />
      </div>

      <div className='card card-body mb-3'>
        <h5>User Role</h5>
        <div className='form-check'>
          <input
            onChange={handleChange('role')}
            className='form-check-input'
            type='radio'
            name='role'
            value={role}
            checked
          />
          <label className='form-check-label'>
            Regular User (Browse, Write reviews, etc)
          </label>
        </div>
        <div className='form-check'>
          <input
            onChange={handleChange('role')}
            className='form-check-input'
            type='radio'
            name='role'
            value={role}
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
