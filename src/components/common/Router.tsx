import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Category from '../../pages/Category';
import Error404 from '../../pages/Error404';
import Login from '../../pages/Login';
import Main from '../../pages/Main';
import ReLogin from '../../pages/ReLoigin';
import SelectResult from '../../pages/SelectResult';
import XCorrect from '../../pages/XCorrect';
import XIncorrect from '../../pages/XIncorrect';
import XInform from '../../pages/XInform';
import XIntroduction from '../../pages/XIntroduction';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/relogin" element={<ReLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/xinform" element={<XInform />} />
        <Route path="/xintroduction" element={<XIntroduction />} />
        <Route path="/selectresult" element={<SelectResult />} />
        <Route path="/xcorrect" element={<XCorrect />} />
        <Route path="/xincorrect" element={<XIncorrect />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
