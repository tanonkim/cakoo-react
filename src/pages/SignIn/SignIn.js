import { Link } from 'react-router-dom';
import './SignIn.scss';

function SignIn() {
  return (
    <div className="topBox">
      <div className="title">로그인</div>
      <div className="inputBox">
        <input
          type="text"
          placeholder="아이디 (이메일)"
          name="email"
          onChange={''}
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={''}
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
