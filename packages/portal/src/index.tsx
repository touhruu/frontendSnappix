import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@snappix/components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </React.StrictMode> */}
    </Provider>
  </ThemeProvider>
);

reportWebVitals();
