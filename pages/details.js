
import Head from 'next/head';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import Details from '../components/Details/Details';
import Footer from '../components/Footer/Footer';
test
export default function details() {
  return (
    <>
      <Head>
        <title>Tate And Hannah | Details</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavDrawer />
      <main>
        <Details />
      </main>
      <Footer />
    </>
  )
}
