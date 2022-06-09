import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'router';
import SliderContextProvider from "providers/SliderProvider"

const App: FC = () => {
  return (
    <SliderContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </SliderContextProvider>
  );
}

export default App;
