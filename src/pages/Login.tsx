import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api';
import Button from '../components/Button';
import Container from '../components/Container';
import Input from '../components/Input';

interface formDataProps {
  email?: string;
  password?: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<formDataProps | null>({
    email: '',
    password: '',
  });
  const [validation, setValidation] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormData((prev) => ({
      ...prev,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    }));

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    login(formData, setValidation);
  };

  useEffect(() => {
    if (localStorage.getItem('blog-token') && !undefined) navigate('/');
  }, [validation]);

  return (
    <Container className='w-2/5'>
      <form>
        <h1 className='text-2xl font-medium text-gray-800 uppercase text-center mt-2 mb-4'>
          Login
        </h1>
        <Input
          type='email'
          name='email'
          label='Email'
          placeholder='johndoe@example.com'
          onChange={handleChange}
        />
        {validation?.error === 1 ? (
          <p className='mb-2 -mt-2 text-sm text-red-400'>
            {validation?.message}
          </p>
        ) : (
          ''
        )}
        <Input
          type='password'
          name='password'
          label='Password'
          placeholder='...'
          onChange={handleChange}
        />
        {validation.error === 1 ? (
          <p className='mb-2 -mt-2 text-sm text-red-400'>
            {validation.message}
          </p>
        ) : (
          ''
        )}
        <Button onClick={handleSubmit}>sign in</Button>
      </form>
      <div className='mt-2'>
        <p className='text-right text-sm'>
          Don't have any account yet ?{' '}
          <span className='text-blue-500'>
            <Link to={'/register'}>Register</Link>
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Login;
