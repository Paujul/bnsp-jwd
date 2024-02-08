const Sidebar = () => {
  const items = [
    { id: 1, name: "Home" },
    { id: 2, name: "Artikel" },
    { id: 3, name: "Event" },
    { id: 4, name: "Galeri Foto" },
    { id: 5, name: "Klien Kami" },
  ]
  return (
    <div className='h-full px-5 fixed z-10'>
      <div className='p-5 w-36 inline-block'>
        <img src='./assets/logo.png' alt='Logo' className='w-24 h-24' />
      </div>

      <nav className='text-md font-medium'>
        <ul>
          {items.map((item) => (
            <li key={item.id} className='py-2 text-center'>
              <a href='#'>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className='flex flex-col gap-2 mt-5'>
          <button className='bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 active:bg-blue-400 transition-all'>
            Sign In
          </button>
          <button className='bg-green-500 text-white p-2 rounded-md w-full hover:bg-green-600 active:bg-green-400 transition-all'>
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
