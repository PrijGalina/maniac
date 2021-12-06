import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './store/root-reducer';
import App from './components/app/app';
import {ThemeProvider} from 'styled-components';
import {appTheme} from './components/app/common';
import * as S from './components/app/app.styled';
import {fetchQuestsAction} from './store/api-actions';

export const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(fetchQuestsAction());

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme} store = {store}>
      <S.GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

