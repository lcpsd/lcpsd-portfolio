import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/global.css'
import { theme } from '../styles/theme';
import { MenuContextProvider } from '../contexts/MenuContext';
import { CurrentSectionContextProvider } from '../components/CurrentSection/Context';

//AWS Amplify
import { Amplify } from 'aws-amplify';
import awsConfig from '../aws-exports'

Amplify.configure({
  ...awsConfig, ssr: true
})

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
