const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='container mx-auto'>
        <div className='flex items-center gap-6 py-5 justify-center'>
          <img src='./assets/logo-black.png' alt='logo' className='w-12 h-12' />
          <h4 className='text-2xl'>
            © 2024 | All Rights Reserved by{" "}
            <span className='font-bold'>Biawak Motors Indonesia</span>
          </h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer
