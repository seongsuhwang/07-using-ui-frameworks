import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import TopBar from '../components/TopBar';

const customTheme = extendTheme({
  colors: {
    brand: {
      400: '#c94d74'
    }
  },
  borderWidths: {
    10: "10px", // 사용자 정의 테두리 두께 값 추가
  },
});

function MyApp({ Component, pageProps }) {
  
  return (
    <ChakraProvider theme={customTheme}>
      <TopBar />
      <Box maxW="container.xl" margin="auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
