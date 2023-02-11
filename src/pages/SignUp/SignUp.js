import './SignUp.scss';
import TextBox from './TextBos';

function SignUp() {
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
            // onChange={}
          >
            <button>O</button>
          </TextBox>
          <TextBox
            label="비밀번호"
            type="password"
            placeholder="영문 대소문자, 숫자, 특수문자를 포함하여 8자리 이상"
            className="password"
            name="password"
            // onChange={}
          ></TextBox>
          <TextBox
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            className="passwordCheck"
            // onChange={}
          >
            <button>O</button>
          </TextBox>
          <TextBox
            label="이름"
            type="text"
            placeholder="이름을 입력해주세요"
            className="name"
            name="name"
            // onChange={}
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
              />
              <input
                type="text"
                placeholder=""
                className="phone2"
                name="phone2"
                maxLength="4"
              />
              <input
                type="text"
                placeholder=""
                className="phone3"
                name="phone3"
                maxLength="4"
              />
            </div>
            <button>O</button>
          </div>
          <div className="row">
            <label>생년월일</label>
            <div className="bitrh">
              <input
                type="text"
                placeholder="년도) 2023"
                className="birthYear"
              />
              <input type="text" placeholder="월" className="birthMonth" />
              <input type="text" placeholder="일" className="birthDay" />
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
            <button type="button">회원가입</button>
          </div>
        </form>
      </fieldset>
    </main>
  );
}

export default SignUp;
