import Home from 'pages/Home';
import Login from 'pages/Login';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  return (
    <>
    <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />}/>
    </Routes>
    <GlobalStyle />
    </>
  );
};
