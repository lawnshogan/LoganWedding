import Head from 'next/head';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import AboutUs from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>Tate And Hannah | About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavDrawer />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </>
  )
}
