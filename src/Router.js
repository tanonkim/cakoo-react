import { BrowserRouter, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
