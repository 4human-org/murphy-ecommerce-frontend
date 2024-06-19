"use client";

export default function SignInForm({ handleSubmit }) {
  return (
    <div className="mx-5 mt-5 flex flex-col">
      <form onSubmit={handleSubmit}>
        <p className="mb-10 text-xl tracking-wide">Create An Account</p>
        <div className="relative mt-6">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
            autoComplete="firstName"
          />
          <label
            htmlFor="firstName"
            className="pointer-events-none absolute left-0 top-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
          >
            First Name
          </label>
        </div>
        <div className="relative mt-6">
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
            autoComplete="Last Name"
          />
          <label
            htmlFor="lastName"
            className="pointer-events-none absolute left-0 top-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
          >
            Last Name
          </label>
        </div>
        <div className="relative mt-6">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
            autoComplete="email"
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-0 top-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
          >
            Email Address
          </label>
        </div>
        <div className="relative mt-6">
          <input
            type="password"
            name="password"
            id="password"
            required
            autoComplete="current-password"
            placeholder="Password"
            className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          />
          <label
            htmlFor="password"
            className="pointer-events-none absolute left-0 top-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
          >
            Password
          </label>
        </div>
        <div className="relative mt-6">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
            autoComplete="current-password"
            placeholder="Confirm Password"
            className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          />
          <label
            htmlFor="confirmPassword"
            className="pointer-events-none absolute left-0 top-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
          >
            Confirm Password
          </label>
        </div>
        <div className="my-12 flex justify-center">
          <button
            type="submit"
            className="w-11/12 rounded-full bg-blue-800 p-1.5 text-white hover:bg-blue-900"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}


/*


firstName string 
lastName string
isAdmin boolean
email string 

*/