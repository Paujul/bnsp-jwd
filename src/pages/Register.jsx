import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className='h-screen bg-gray-50'>
      <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
              <Link to='/' className='text-sm font-semibold'>
                &lt; Back
              </Link>
              <img
                className='mx-auto h-13 w-auto'
                src='./assets/logo.png'
                alt='Logo'
              />
              <h2 className='mt-3 mb-8 text-center text-3xl font-bold tracking-tight text-gray-900'>
                Biawak Membership
              </h2>
            </div>
            <form className='space-y-6' action='#'>
              <div className='px-6 sm:px-0'>
                <input
                  className='mb-2 mr-2 w-full rounded-lg border-2 border-gray-500 px-5 py-2.5 text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-gray-500/50'
                  type='text'
                  placeholder='Email Anda'
                />
                <input
                  className='mb-2 mr-2 w-full rounded-lg border-2 border-gray-500 px-5 py-2.5 text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-gray-500/50'
                  type='password'
                  placeholder='Password'
                />

                <button className='mt-5 mr-2 w-full rounded-lg bg-green-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-green-500/90 focus:outline-none focus:ring-4 focus:ring-green-500/50'>
                  Daftar Membership
                </button>
              </div>
            </form>

            <p className='mt-3 text-center text-sm text-gray-600'>
              Masuk ke zona membership dengan akun Google{" "}
              <span className='font-semibold'>@biawakmotors.com &nbsp;</span>
              Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
