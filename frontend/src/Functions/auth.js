import axios from 'axios';

export const register = async ({ name, email, password, role }) => {
  return await axios.post(`${process.env.REACT_APP_API}/auth/register`, {
    name,
    email,
    password,
  });
};
