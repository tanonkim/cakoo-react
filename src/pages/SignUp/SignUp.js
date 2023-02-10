import './SignUp.scss';

function SignUp() {
  return (
    <main className="signup">
      <header className="signUpHeader">
        <h1>회원가입</h1>
      </header>
      <fieldset>
        <form className="signUpForm">
          <div className="row">
            <label>이메일(아이디)</label>
            <input
              type="text"
              placeholder="예) cakoo@cakoo.com"
              className="email"
              name="id"
            />
            <button>O</button>
          </div>
          <div className="row">
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="영문 대소문자, 숫자, 특수문자를 포함하여 8자리 이상"
              className="password"
              name="password"
            />
          </div>
          <div className="row">
            <label>비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
              className="passwordCheck"
            />
            <button>O</button>
          </div>
          <div className="row">
            <label>이름</label>
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              className="name"
              name="name"
            />
          </div>
          <div className="row">
            <label>휴대폰 번호</label>
            <div>
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
            <div>
              <input
                type="text"
                placeholder="년도) 2023"
                className="birthYear"
              />
              <input type="text" placeholder="월" className="birthMonth" />
              <input type="text" placeholder="일" className="birthDay" />
            </div>
          </div>
        </form>
      </fieldset>
    </main>
  );
}

export default SignUp;
