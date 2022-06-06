import Head from 'next/head';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import ConfettiCustom from '../components/ConfettiCustom';
import HorizontalNav from '../components/HorizontalNav/HorizontalNav';
import Footer from '../components/Footer/Footer';
import SecretDirections from '../components/SecretDirections/SecretDirections';

export default function directions() {

  return (
    <>
      <Head>
        <title>Tate And Hannah | Super Secret Directions</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavDrawer />
      <ConfettiCustom />
      <main>
        <SecretDirections />
      </main>
      <Footer />
    </>
  );
}
