import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Capture from '../../pages/Capture';
import Error404 from '../../pages/Error404';
import Main from '../../pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/capture" element={<Capture />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
