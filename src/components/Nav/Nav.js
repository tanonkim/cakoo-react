import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const [token, setToken] = useState();
  return (
    <nav className="nav">
      <Link to="/">
        <img className="logo" src="images/cakoo_logo.png" alt="cakoo logo" />
      </Link>
      <ul className="navUser">
        {token ? (
          <>
            <li>
              <Link to="">로그아웃</Link>
            </li>
            <li>장바구니</li>
          </>
        ) : (
          <>
            <li>
              <Link to="">로그인</Link>
            </li>
            <li>
              <Link to="">회원가입</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
