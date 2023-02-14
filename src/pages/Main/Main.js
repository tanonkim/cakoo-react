import './Main.scss';

function Main() {
  return (
    <main>
      <div className="banner">
        <h1>케이쿠</h1>
        <p>감성을 담은 케이크 </p>
        <p>나를 위한 나만의 케이크 </p>
      </div>
      <div className="filterBar">
        <form className="filterForm">
          <label>
            <input type="checkbox" name="mini"></input>mini
          </label>
          <label>
            <input type="checkbox" name="one"></input>1호
          </label>
          <label>
            <input type="checkbox" name="two"></input>2호
          </label>
          <label>
            <input type="checkbox" name="three"></input>3호
          </label>
        </form>
        <div>
          <button type="button">가격 높은순</button>
          <button type="button">가격 낮은순</button>
          <button type="button">신상품</button>
          <button type="button">오래된 순</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
