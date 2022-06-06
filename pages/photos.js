import Head from 'next/head';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import PhotosComponent from '../components/PhotosComponent/PhotosComponent';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tate And Hannah | Photos</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap'
          rel='stylesheet'
        />
      </Head>

      <NavDrawer />
      <main>
        <PhotosComponent />
      </main>
     <Footer />
    </>
  )
}
