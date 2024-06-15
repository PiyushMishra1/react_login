import React from 'react';

const LoginForm = ({ loginData, isLoading, submitMessage, handleLoginChange, handleLoginSubmit }) => {
  return (
    <form onSubmit={handleLoginSubmit} className="divide-y divide-gray-200">
      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <div className="relative">
          <input id="username" name="username" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-600 placeholder-transparent" placeholder="Username" onChange={handleLoginChange} value={loginData.username} />
          <label htmlFor="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
        </div>
        <div className="relative">
          <input id="loginPassword" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-600 placeholder-transparent" placeholder="Password" onChange={handleLoginChange} value={loginData.password} />
          <label htmlFor="loginPassword" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
        </div>
        {submitMessage && <div className="text-red-500 text-center">{submitMessage}</div>}
        <div className="relative">
          <button type="submit" className={`bg-indigo-600 text-white rounded-md px-6 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log in'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;