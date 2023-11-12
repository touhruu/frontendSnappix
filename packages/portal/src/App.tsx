import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AuthPage } from './pages/AuthPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/auth' element={<AuthPage />}/>
      </Routes>
    </>

  );
}

export default App;
