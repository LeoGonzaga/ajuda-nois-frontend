import Modal from 'react-modal';
import { Provider } from 'react-redux';

import { ContainerStyled } from '@components/Container/styles';
import Content from '@components/Content';
import Flex from '@components/Flex';
import Sidebar from '@components/Sidebar';
import { GlobalStyles, darkTheme } from '@themes/theme.config';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import store from 'src/config/store';
import { ROUTES } from 'src/routes/routes';
import { ThemeProvider } from 'styled-components';

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Provider store={store}>
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
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
