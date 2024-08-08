import { ParallaxProvider } from 'react-scroll-parallax';
import { PetProvider } from '../context/PetContext';
import '../styles/globals.css';
import { AdminProvider } from '@/context/AdminContext';
import FlareCursor from '../components/FlameCursor';

function MyApp({ Component, pageProps }) {
  return (
    <PetProvider>
      <ParallaxProvider>

        <AdminProvider>
          {/* <FlareCursor/> */}
          <Component {...pageProps} />
        </AdminProvider>
      </ParallaxProvider>
    </PetProvider>

  );
}

export default MyApp;
