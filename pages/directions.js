import Head from 'next/head';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import ConfettiCustom from '../components/ConfettiCustom';
import HorizontalNav from '../components/HorizontalNav/HorizontalNav';
import Footer from '../components/Footer/Footer';
import DirectionsComponent from '../components/DirectionsComponent/DirectionsComponent';

export default function directions() {

  return (
    <>
      <Head>
        <title>Tate And Hannah | Directions</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavDrawer />
      <ConfettiCustom />
      <main>
        <DirectionsComponent />
      </main>
      <Footer />
    </>
  );
}
