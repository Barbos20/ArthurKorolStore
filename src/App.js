import { Route, Routes } from 'react-router-dom';
import { Header } from './1Components/1Header/1.1Header/Header';
import { Woman } from './1Components/2Pages/2.1Woman/Woman';
import { ProductPage } from './1Components/2Pages/2.2Product/ProductPage';
import { RoutesPath } from './4RoutesPath/RoutesPath';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <div>
        <Routes>
        <Route path='/woman' element={<Woman/>} />
        <Route path={RoutesPath.product} element={<ProductPage/>} />
        </Routes>
    </div>
    </div>
  );
}

export default App;
