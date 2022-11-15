// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../utils/global-styles';
import theme from '../utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
