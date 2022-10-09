import Diana from 'pages/Diana';
import Login from 'pages/Login';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';
import Alex from 'pages/Alex';
import KatyaDasha from 'pages/KatyaDasha';
import SashaMasha from 'pages/SashaMasha';
import Zhenya from 'pages/Zhenya';
import { useSelector } from 'react-redux';
import { selectIsActive } from 'redux/selectors';
import { Modal } from './Modal/Modal';

export const App = () => {
  const isModalOpened = useSelector(selectIsActive)

  return (
    <>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/diana" element={<Diana />}/>
        <Route path="/sasha-masha" element={<SashaMasha />}/>
        <Route path="/katya-dasha" element={<KatyaDasha />}/>
        <Route path="/zhenya" element={<Zhenya />}/>
        <Route path="/alex" element={<Alex />}/>
      </Route>
    </Routes>
    {isModalOpened && <Modal />}
    <GlobalStyle />
    </>
  );
};

