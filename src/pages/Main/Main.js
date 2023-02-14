import { useEffect, useState } from 'react';
import API from '../../config';
import './Main.scss';

function Main() {
  const [productList, setProductList] = useState([]);
  const baseUri = API.products;

  // const {
  //   id,
  //   name,
  //   price,
  //   discount_rate,
  //   discount_price,
  //   description,
  //   sizes,
  //   thumbnail,
  // } = data;

  useEffect(() => {
    fetch(baseUri)
      .then(res => res.json())
      .then(result => console.log(result));
  });
  // console.log(data);

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
            <input type="checkbox" name="mini" />
            mini
          </label>
          <label>
            <input type="checkbox" name="one" />
            1호
          </label>
          <label>
            <input type="checkbox" name="two" />
            2호
          </label>
          <label>
            <input type="checkbox" name="three" />
            3호
          </label>
        </form>
        <div>
          <button type="button">가격 높은순</button>
          <button type="button">가격 낮은순</button>
          <button type="button">신상품</button>
          <button type="button">오래된 순</button>
        </div>
      </div>
      <div className="productContainer" />
      <button className="leadMore">더보기</button>
    </main>
  );
}

export default Main;
