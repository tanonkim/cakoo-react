import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import SignupSuccess from './pages/SignUpSuccess/SignUpSuccess';
import Main from './pages/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-success" element={<SignupSuccess />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
