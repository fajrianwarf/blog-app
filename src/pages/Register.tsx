import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api';
import Button from '../components/Button';
import Container from '../components/Container';
import Input from '../components/Input';

interface formDataProps {
  full_name?: string;
  email?: string;
  password?: string;
  password2?: string;
}

export default function Register() {
  const navigate = useNavigate();
  const [validation, setValidation] = useState<any>({});
  const [formData, setFormData] = useState<formDataProps | null>({
    full_name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormData((prev) => ({
      ...prev,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    }));

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    register(formData, setValidation, navigate);
  };

  return (
    <Container className='w-2/5'>
      <form>
        <h1 className='text-2xl font-medium text-gray-800 uppercase text-center mt-2 mb-4'>
          Register
        </h1>
        <Input
          name='full_name'
          label='Full name'
          placeholder='John Doe'
          onChange={handleChange}
        />
        {validation.fields?.full_name ? (
          <p className='mb-2 -mt-2 text-sm text-red-400'>
            {validation.fields.full_name.message}
          </p>
        ) : (
          ''
        )}
        <Input
          type='email'
          name='email'
          label='Email'
          placeholder='johndoe@example.com'
          onChange={handleChange}
        />
        {validation.fields?.email ? (
          <p className='mb-2 -mt-2 text-sm text-red-400'>
            {validation.fields.email.message}
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
        {validation.fields?.password ? (
          <p className='mb-2 -mt-2 text-sm text-red-400'>
            {validation.fields.password.message}
          </p>
        ) : (
          ''
        )}
        <Input
          type='password'
          name='confirm_password'
          label='Confirm Password'
          placeholder='...'
          onChange={handleChange}
        />
        {formData?.password !== formData?.password2 ? (
          <p className='mb-2 -mt-2 text-sm text-red-400'>
            Password is not the same
          </p>
        ) : (
          ''
        )}
        <Button onClick={handleSubmit}>sign up</Button>
      </form>
      <div className='mt-2'>
        <p className='text-right text-sm'>
          Already have an account ?{' '}
          <span className='text-blue-500 hover:text-blue-800'>
            <Link to={'/login'}>Log in</Link>
          </span>
        </p>
      </div>
    </Container>
  );
}
