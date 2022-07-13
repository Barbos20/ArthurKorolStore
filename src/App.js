import { Route, Routes } from 'react-router-dom';
import { Header } from './1Components/1Header/1.1Header/Header';
import { Woman } from './1Components/2Pages/2.1Woman/Woman';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <div>
        <Routes>
        <Route path='/woman' element={<Woman/>} />
        </Routes>
    </div>
    </div>
  );
}

export default App;
