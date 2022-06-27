import axios from 'axios';
import React from 'react';

const api_key_blog: string = 'AIzaSyCAtudQmexgeCQwzGxoXmgbbQulSAor7n8';
const api: string = 'https://mern-ecommerce-server-fajri.herokuapp.com';

export const login = async (
  data: object | null,
  setValidation: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    await axios.post(`${api}/auth/login`, data).then((res) => {
      setValidation(res.data);
      if (res.data.error !== 1) {
        localStorage.setItem('blog-token', res.data.token);
      } else {
        localStorage.removeItem('blog-token');
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const register = async (
  data: object | null,
  setValidation: React.Dispatch<React.SetStateAction<any>>,
  navigate: any
) => {
  try {
    await axios.post(`${api}/auth/register`, data).then((res) => {
      setValidation(res.data);
      if (res.data.error !== 1) navigate('/login');
    });
  } catch (err) {
    console.log(err);
  }
};

export const checkAuth = async (
  token: string | null,
  setUserData: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    await axios
      .get(`${api}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        if (res.data.error !== 1) setUserData(res.data);
      });
  } catch (err) {
    console.log(err);
  }
};

export const getBlog = async (
  setBlogData: React.Dispatch<React.SetStateAction<any>>,
  setLoading: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    setLoading(true);
    await axios
      .get(
        `https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=${api_key_blog}`
      )
      .then((res) => {
        setBlogData(res.data.items);
        setLoading(false);
      });
  } catch (err) {
    console.log(err);
  }
};
