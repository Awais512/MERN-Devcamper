import axios from 'axios';

//Register User
export const register = async ({ name, email, password, role }) => {
  return await axios.post(`${process.env.REACT_APP_API}/auth/register`, {
    name,
    email,
    password,
  });
};

//Login User
export const login = async ({ email, password }) => {
  return await axios.post(`${process.env.REACT_APP_API}/auth/login`, {
    email,
    password,
  });
};
