import { NavLink, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AuthPage } from './pages/AuthPage';
import { Header } from '@snappix/components';

function App() {

  const menuItemList = [
    {
      title: 'Главная',
      url: '/auth'
    }
  ]

  return (
    <>
      <Header menuItem={NavLink} menuItemList={menuItemList} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </>
  );
};

      export default App;
