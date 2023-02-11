import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp/SignUp';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
