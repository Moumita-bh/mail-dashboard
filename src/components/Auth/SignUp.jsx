import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/auth/signup', data);
      navigate('/signin');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <input {...register('email')} placeholder="Email" className="mb-2" />
      <input {...register('password')} type="password" placeholder="Password" className="mb-2" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
