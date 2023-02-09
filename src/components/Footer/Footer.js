import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerColumn">
        <div className="customerService">
          <div className="social">
            <img
              alt="인스타 아이콘"
              className="snsLogo"
              src="images/cakoo_facebook_logo_white.png"
            />
            <img
              alt="인스타 아이콘"
              className="snsLogo"
              src="images/cakoo_insta_logo_white.png"
            />
            <img
              alt="인스타 아이콘"
              className="snsLogo"
              src="images/cakoo_youtube_logo_white.png"
            />
          </div>
          <div className="detail">
            <span>케이쿠 고객센터 1233-1233</span>
            <span>(평일 10:00-13:00, 14:00~18:00/주말 및 공휴일 제외)</span>
            <button className="callcenterBtn">케이쿠 고객센터 ></button>
          </div>
        </div>
        <Link to="/">
          <img
            alt="cakoo 로고 화이트"
            className="logo"
            src="images/cakoo_logo_white.png"
          />
        </Link>
      </div>
      <div className="footerColumn terms">
        <div className="information">
          <p>
            상호명: 케이쿠(cakoo) | 사업자 등록번호: 123-45-67890 | 대표자:
            김국민
          </p>
          <p>
            소재지: 서울시 강남구 테헤란로 10층 cakoo | 기업공시 |
            통신판매신고번호 2022-서울김국민-0311
          </p>
          <p>© 2023 cakoo, inc. All rights reserved.</p>
        </div>
        <div className="information">
          <span>이용약관</span>
          <span>개인정보 처리방침</span>
          <span>제휴안내</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
