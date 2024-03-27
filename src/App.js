import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션바
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 로그인 x => 상품 디테일 눌러도 다시 로그인페이지로 리다이렉트.
// 5. 로그아웃 버튼 클릭시 로그아웃
// 6. 로그아웃 => 상품디테일페이지 볼수없고 다시 로그인페이지로.
// 7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보임.
// 8. 상품 검색 가능.

function App() {
    const [authenticate, setAuthenticate] = useState(false);

  return (
    <div className="App">
        <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
        <Routes>
            <Route path="/" element={<ProductAll />} />
            <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
            <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
        </Routes>
    </div>
  );
}

export default App;
