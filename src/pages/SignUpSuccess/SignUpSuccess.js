import { useNavigate } from 'react-router-dom';
import './SignUpSuccess.scss';

function SignUpSuccess() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="signupSuccess">
      <div className="box">
        <div className="title">
          <span>cakoo에 오신걸 환영합니다.</span>
        </div>
        <div className="welcome">
          <span className="welcomeTitle">달달한 cakoo와 함께 행복하세요!</span>
          <span className="welcomeDetail">
            봄의 냄새가 나기 시작했어요. 봄의 달콤함을 맞이하러 가실까요?
          </span>
        </div>
        <button className="goHome" onClick={goHome}>
          홈으로
        </button>
      </div>
    </div>
  );
}

export default SignUpSuccess;
