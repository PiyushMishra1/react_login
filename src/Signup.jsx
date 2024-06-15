
const Signup = ({ signUpData, errors, isLoading, submitMessage, handleSignUpChange, handleSignUpSubmit }) => {
    return (
      <form onSubmit={handleSignUpSubmit} className="divide-y divide-gray-200">
        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <div className="relative">
            <input id="firstName" name="firstName" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-600 placeholder-transparent" placeholder="First name" onChange={handleSignUpChange} value={signUpData.firstName} />
            <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">First name</label>
            {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
          </div>
          <div className="relative">
            <input id="lastName" name="lastName" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-600 placeholder-transparent" placeholder="Last name" onChange={handleSignUpChange} value={signUpData.lastName} />
            <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last name</label>
            {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
          </div>
          <div className="relative">
            <input id="email" name="email" type="email" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-600 placeholder-transparent" placeholder="Email address" onChange={handleSignUpChange} value={signUpData.email} />
            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email address</label>
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="relative">
            <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-600 placeholder-transparent" placeholder="Password" onChange={handleSignUpChange} value={signUpData.password} />
            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          {submitMessage && (
            <div className={`text-center p-2 ${submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
              {submitMessage}
            </div>
          )}
          <div className="relative">
            <button type="submit" className={`bg-indigo-600 text-white rounded-md px-6 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isLoading}>
              {isLoading ? 'Signing up...' : 'Sign up'}
            </button>
          </div>
        </div>
      </form>
    );
  };

  export default Signup