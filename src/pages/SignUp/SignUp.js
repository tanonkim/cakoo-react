import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../config';
import './SignUp.scss';
import TextBox from './TextBox';

function SignUp() {
  const emailRegex =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const [signUpInfo, setSignUpInfo] = useState({
    id: '',
    password: '',
    passwordCheck: '',
    name: '',
    phone1: '',
    phone2: '',
    phone3: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  const goTosignUp = () => {
    fetch(API.signup, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: signUpInfo.id,
        password: signUpInfo.password,
        name: signUpInfo.name,
        phone_number: signUpInfo.phone1 + signUpInfo.phone2 + signUpInfo.phone3,
        birthdate: `${signUpInfo.birthYear}-${signUpInfo.birthMonth}-${signUpInfo.birthDay}`,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'User Created!') {
          navigate('/signup-success');
        } else if (result.message === 'Invalid Email!') {
          alert('이메일 조건에 밎지 않습니다!');
        } else if (result.message === 'Invalid Password!') {
          alert('비밀번호 조건에 맞지 않습니다!');
        } else if (result.message === 'Email Already Exists!') {
          alert('중복된 이메일입니다!');
        } else if (result.message === 'KEY_ERROR') {
          alert('정보를 모두 입력해주세요!');
        }
      });
  };

  return (
    <main className="signup">
      <header className="signUpHeader">
        <h1>회원가입</h1>
      </header>
      <fieldset>
        <form className="signUpForm">
          <TextBox
            label="이메일(아이디)"
            type="text"
            placeholder="예) cakoo@cakoo.com"
            className="email"
            name="id"
            onChange={handleChange}
          >
            <button
              className={emailRegex.test(signUpInfo.id) ? 'buttonOn' : 'button'}
              disabled
            >
              O
            </button>
          </TextBox>
          <TextBox
            label="비밀번호"
            type="password"
            placeholder="영문 대소문자, 숫자, 특수문자를 포함하여 8자리 이상"
            className="password"
            name="password"
            onChange={handleChange}
          ></TextBox>
          <TextBox
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            className="passwordCheck"
            name="passwordCheck"
            onChange={handleChange}
          >
            <button
              className={
                signUpInfo.password === signUpInfo.passwordCheck &&
                signUpInfo.password.length >= 8 &&
                passwordRegex.test(signUpInfo.password)
                  ? 'buttonOn'
                  : 'button'
              }
              disabled
            >
              O
            </button>
          </TextBox>
          <TextBox
            label="이름"
            type="text"
            placeholder="이름을 입력해주세요"
            className="name"
            name="name"
            onChange={handleChange}
          ></TextBox>

          <div className="row">
            <label>휴대폰 번호</label>
            <div className="phone">
              <input
                type="text"
                placeholder="010"
                className="phone1"
                name="phone1"
                maxLength="3"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder=""
                className="phone2"
                name="phone2"
                maxLength="4"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder=""
                className="phone3"
                name="phone3"
                maxLength="4"
                onChange={handleChange}
              />
            </div>
            <button
              className={
                signUpInfo.phone1.length +
                  signUpInfo.phone2.length +
                  signUpInfo.phone3.length >=
                11
                  ? 'buttonOn'
                  : 'button'
              }
              disabled
            >
              O
            </button>
          </div>
          <div className="row">
            <label>생년월일</label>
            <div className="bitrh">
              <input
                type="text"
                placeholder="년도) 2023"
                className="birthYear"
                maxLength="4"
                name="birthYear"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="월"
                className="birthMonth"
                maxLength="2"
                name="birthMonth"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="일"
                className="birthDay"
                maxLength="2"
                name="birthDay"
                onChange={handleChange}
              />
            </div>
          </div>
          <hr />
          <div className="termBox">
            <span>이용약관 동의</span>
            <div className="termCheckBox">
              <ul>
                <li className="list">
                  <label className="conditionTrue">
                    <span>
                      <input type="checkbox"></input>
                      <span>모두 동의합니다.</span>
                    </span>
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span>
                      <input type="checkbox"></input>
                      <span>이용약관 동의</span>
                      <b>(필수)</b>
                    </span>
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span>
                      <input type="checkbox"></input>
                      <span>개인정보 수집, 이용동의</span>
                      <b>(필수)</b>
                    </span>
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span>
                      <input type="checkbox"></input>
                      <span>이벤트, 혜택정보 수신 동의</span>
                      <b>(선택)</b>
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="document">
            <a href="/" type="button">
              이용약관 보기
            </a>
            <span> · </span>
            <a href="/" type="button">
              개인정보 처리방침 보기
            </a>
          </div>
          <div className="signUpBtn">
            <button type="button" onClick={goTosignUp}>
              회원가입
            </button>
          </div>
        </form>
      </fieldset>
    </main>
  );
}

export default SignUp;
