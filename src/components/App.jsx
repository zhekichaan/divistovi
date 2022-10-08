import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Products from 'pages/Products';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
    <GlobalStyle />
    </>
  );
};
