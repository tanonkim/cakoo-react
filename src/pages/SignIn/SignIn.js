import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';

function SignIn() {
  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setSignInInfo({ ...signInInfo, [name]: value });
    console.log(name, value);
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
          <input type="checkbox" name="" value="" /> 아이디 저장
        </label>
      </div>
      <button className="loginButton">로그인</button>
      <div className="etc">
        <span>아이디 찾기</span>
        <span>비밀번호 찾기</span>
        <Link to="/signup">
          <span>회원가입</span>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
