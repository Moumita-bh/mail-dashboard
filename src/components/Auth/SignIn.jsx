import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:5000/auth/signin', data);
      login(res.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <input {...register('email')} placeholder="Email" className="mb-2" />
      <input {...register('password')} type="password" placeholder="Password" className="mb-2" />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
