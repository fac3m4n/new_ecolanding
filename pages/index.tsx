import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import hero from '../assets/images/hero.png'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-no-repeat bg-cover bg-center">
      <Head>
        <title>Ecoland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex w-full flex-1 flex-col h-full">
        <img src="../images/sky.png" alt="sky" className='fixed -z-10' />
        <img src="../images/clouds.png" alt="clouds" className='absolute -z-10' />
        <img src="../images/hub.png" alt="hub" className='absolute -z-9' />
        <img src="../images/solar.png" alt="solar" className='fixed -z-8' />
        <img src="../images/grass1.png" alt="grass" className='fixed -z-6' />
        <Header />
        <div className='flex flex-row items-center'>

          <div>Text</div>
          <Image src={hero} alt="hero" width={400} className='animate-updown' />
        </div>

      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}

export default Home
