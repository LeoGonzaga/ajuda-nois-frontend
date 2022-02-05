import { ContainerStyled } from '@components/Container/styles';
import Content from '@components/Content';
import Flex from '@components/Flex';
import Sidebar from '@components/Sidebar';
import { GlobalStyles, darkTheme } from '@themes/theme.config';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/routes/routes';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {pathname === ROUTES.LOGIN ? (
        <Component {...pageProps} />
      ) : (
        <ContainerStyled>
          <Flex>
            <Sidebar />
            <Content>
              <Component {...pageProps} />
            </Content>
          </Flex>
        </ContainerStyled>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
