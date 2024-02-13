const Introduction = () => {
  return (
    <>
      <div className='relative my-5'>
        <div className='bg-black/50 w-full h-52 absolute rounded-lg' id='about'>
          <h1 className='text-white text-4xl font-bold z-10 text-center left-52 mt-20 select-none'>
            Profil Kami
          </h1>
        </div>

        <img
          src='./assets/banner.jpg'
          alt='banner'
          className='rounded-lg object-cover object-center w-full h-52'
        />
      </div>
      <div className='text-justify text-lg flex flex-col gap-5'>
        <p>
          Kami adalah Biawak Motors, sebuah klub motor yang berdiri sejak tahun
          2020. Kami adalah komunitas pecinta motor yang memiliki semangat
          berkendara, menjelajah, dan bersahabat. Kami memiliki berbagai jenis
          motor, mulai dari sport, touring, adventure, hingga custom. Kami tidak
          membatasi anggota kami berdasarkan merek, tipe, atau kapasitas motor.
          Yang penting adalah memiliki jiwa petualang dan rasa kekeluargaan.
        </p>
        <p>
          Kami berbasis di Bekasi, sebuah kota yang terletak di sebelah timur
          Jakarta. Kami sering mengadakan kegiatan touring, baik di dalam maupun
          di luar kota. Kami juga aktif berpartisipasi dalam berbagai acara
          motor, seperti pameran, bakti sosial, kompetisi, dan lain-lain. Kami
          selalu menjunjung tinggi etika berkendara, keselamatan, dan
          kebersamaan. Kami juga peduli dengan lingkungan dan masyarakat
          sekitar.
        </p>
        <p>
          Kami terbuka untuk siapa saja yang ingin bergabung dengan kami. Kami
          menyambut dengan hangat setiap orang yang memiliki minat dan hobi yang
          sama dengan kami. Kami siap berbagi pengalaman, ilmu, dan cerita
          tentang dunia motor. Kami juga siap menjalin kerjasama dan
          persahabatan dengan klub motor lainnya. Kami percaya bahwa motor bukan
          hanya sekedar alat transportasi, tetapi juga cara untuk
          mengekspresikan diri, menikmati hidup, dan menjalin hubungan.
        </p>
      </div>
    </>
  )
}

export default Introduction
