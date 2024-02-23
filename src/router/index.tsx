import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../components/pages/home';
import MovieDetail from '../components/organisms/movie-detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;