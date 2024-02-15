import { Link } from "react-router-dom"

const Login = () => {
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
            <form className='space-y-6'>
              <div className='px-6 sm:px-0'>
                <a className='mb-2 mr-2 inline-flex w-full items-center justify-between rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-500/90 focus:outline-none focus:ring-4 focus:ring-red-500/50'>
                  <svg
                    className='-ml-1 mr-2 h-4 w-4'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='google'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 488 512'
                  >
                    <path
                      fill='currentColor'
                      d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
                    />
                  </svg>
                  Login dengan Google
                  <div />
                </a>
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

export default Login
