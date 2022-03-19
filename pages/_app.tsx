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
  const HIDE_SIDEBAR = [
    ROUTES.PANEL,
    ROUTES.LIST_ACHIEVEMENTS,
    ROUTES.LIST_ENEM,
    ROUTES.LIST_LESSON,
    ROUTES.LIST_QUESTIONS,
    ROUTES.LIST_QUIZ,
    ROUTES.LIST_SUBJECTS,
    ROUTES.LIST_TIPS,
    ROUTES.LIST_TOPIC,
    ROUTES.LIST_USERS,
  ];
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Provider store={store}>
        {pathname === ROUTES.LOGIN ? (
          <Component {...pageProps} />
        ) : (
          <ContainerStyled>
            <Flex>
              {!HIDE_SIDEBAR.includes(pathname) && <Sidebar />}
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
