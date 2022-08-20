import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/global.css'
import { MenuContextProvider } from '../contexts/MenuContext';
import { theme } from '../styles/theme';
import { CurrentSectionContextProvider } from '../components/CurrentSection/Context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MenuContextProvider>
        <CurrentSectionContextProvider>
          <Component {...pageProps} />
        </CurrentSectionContextProvider>
      </MenuContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
