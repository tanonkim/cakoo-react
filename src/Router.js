import { BrowserRouter, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default Router;
