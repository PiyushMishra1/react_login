import React, { useState } from 'react';
import axios from 'axios';
import SignUpForm from './Signup';
import LoginForm from './LoginForm';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [user, setUser] = useState(null);

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage('');
    setErrors({});

    const newErrors = {};
    if (!signUpData.firstName) newErrors.firstName = 'First name is required';
    if (!signUpData.lastName) newErrors.lastName = 'Last name is required';
    if (!signUpData.email) newErrors.email = 'Email is required';
    if (!signUpData.password) newErrors.password = 'Password is required';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://dummyjson.com/users/add', {
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        email: signUpData.email,
        password: signUpData.password,
      });

      console.log(response.data);
      setSubmitMessage('User registered successfully! Please log in.');
      setSignUpData({ firstName: '', lastName: '', email: '', password: '' });
      setIsSignUp(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage('');

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: loginData.username,
        password: loginData.password,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });

      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      setSubmitMessage(error.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setSubmitMessage('');
    setErrors({});
  };

  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>Welcome, {user.firstName}!</p>
                  <p>Email: {user.email}</p>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white rounded-md px-6 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">{isSignUp ? 'Create an account' : 'Welcome back!'}</h1>
            </div>
            {isSignUp ? (
              <SignUpForm
                signUpData={signUpData}
                errors={errors}
                isLoading={isLoading}
                submitMessage={submitMessage}
                handleSignUpChange={handleSignUpChange}
                handleSignUpSubmit={handleSignUpSubmit}
              />
            ) : (
              <LoginForm
                loginData={loginData}
                isLoading={isLoading}
                submitMessage={submitMessage}
                handleLoginChange={handleLoginChange}
                handleLoginSubmit={handleLoginSubmit}
              />
            )}
            <div className="text-center mt-4">
              <button onClick={toggleForm} className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                {isSignUp ? 'Already have an account? Log in' : 'Need an account? Sign up'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;