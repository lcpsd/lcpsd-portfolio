import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'

import 'swiper/css';
import 'swiper/css/pagination';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
