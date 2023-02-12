import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../config';
import './SignIn.scss';

function SignIn() {
  const emailRegex =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setSignInInfo({ ...signInInfo, [name]: value });
  };

  const isValid = () => {
    if (
      emailRegex.test(signInInfo.email) &&
      passwordRegex.test(signInInfo.password) &&
      signInInfo.password.length >= 8
    ) {
      return true;
    } else {
      return false;
    }
  };

  const navigate = useNavigate();

  const handleFetch = () => {
    fetch(API.signin, {
      method: 'POST',
      body: JSON.stringify({
        email: signInInfo.email,
        password: signInInfo.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          navigate('/');
        } else {
          alert('아이디 또는 비밀번호를 확인해주세요!');
        }
      });
  };

  return (
    <div className="topBox">
      <div className="title">로그인</div>
      <div className="inputBox">
        <input
          type="text"
          placeholder="아이디 (이메일)"
          name="email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={handleChange}
        ></input>
      </div>
      <div className="button">
        <label>
          <input type="checkbox" /> 아이디 저장
        </label>
      </div>
      <button
        type="button"
        className={isValid() ? 'loginButtonOn' : 'loginButton'}
        disabled={!isValid()}
        onClick={handleFetch}
      >
        로그인
      </button>
      <div className="etc">
        <Link to="/">
          <span>아이디 찾기</span>
        </Link>
        <Link to="/">
          <span>비밀번호 찾기</span>
        </Link>
        <Link to="/signup">
          <span>회원가입</span>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
